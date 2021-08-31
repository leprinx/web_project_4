import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ callback }, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupElement.querySelector(".form");
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
        });
        super.setEventListeners();
    }
}
export default PopupWithForm;