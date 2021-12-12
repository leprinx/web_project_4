class FormValidator {
    constructor(settings, formElement) {
        this._form = formElement
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
    }
    _hasSomeInvalid() {
        return this._inputList.every((input) => input.validity.valid);
    }
    _toggleSubmit() {
        if (!this._hasSomeInvalid()) {
            this._disableButton();
        } else {
            this._button.disabled = false;
            this._button.classList.remove(this._inactiveButtonClass);
        };
    }
    _showInputError(input) {
        this._errorSpan = this._form.querySelector(`#${input.id}-error`);
        this._errorSpan.textContent = input.validationMessage;
        input.classList.add(this._errorClass);
    }
    _hideInputError(input) {
        this._errorSpan = this._form.querySelector(`#${input.id}-error`);
        this._errorSpan.textContent = "";
        input.classList.remove(this._errorClass);
    }
    _isValid(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input);
        }
    }
    _disableButton(){
        this._button.disabled = true;
        this._button.classList.add(this._inactiveButtonClass);
    }
    _setEventListeners() {
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._button = this._form.querySelector(this._submitButtonSelector);
        this._form.addEventListener("reset", ()=>{
            this._disableButton();
            this._inputList.forEach((inputElement) => {
                this._hideInputError(inputElement) 
            })
        })
        this._inputList.forEach((input) => {
            input.addEventListener("input", (evt) => {
                this._toggleSubmit();
                this._isValid(input);
            });
        });
    }
    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}
export default FormValidator;