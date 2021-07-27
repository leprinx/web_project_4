import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor({ callback }, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupElement.querySelector(".form");
    }
    _getInputValues() {
        //collects data from the input fields
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
            this.close();
        });
        super.setEventListeners();
    }
    close() {
        this._form.reset();
        super.close();
    }
}
export default PopupWithForm;