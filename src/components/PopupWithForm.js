import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ callback }, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupElement.querySelector(".form");
        this._button = this._form.querySelector(".form__save-button");
    }
    _getInputValues() {
        this._inputList = Array.from(this._popupElement.querySelectorAll(".form__edit-form"));
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });

        return this._inputValues;
    }
    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callback(this._getInputValues());
            this._button.textContent = "Saving...";
        });
        super.setEventListeners();
    }
    open() {
        super.open();
        this._button.textContent = "Save"
    }

    close() {
        super.close();
        this._form.reset();
    }
}
export default PopupWithForm;