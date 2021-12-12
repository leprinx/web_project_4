import Popup from "./Popup.js";

class PopupDeleteCard extends Popup {
    constructor({ callback }, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupElement.querySelector(".form");
        this._button = this._form.querySelector(".form__save-button")
    }
    open(cardId, evt) {
        super.open();
        this._button.textContent = "Yes";
        this._card = evt.target.parentElement;
        this._cardId = cardId;
    }
    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._button.textContent = 'Deleting...';
            this._callback(this._cardId, this._card);
        });
        super.setEventListeners();
    }
}
export default PopupDeleteCard;