import Popup from "./Popup.js";

class PopupDeleteCard extends Popup {
    constructor({ callback }, popupSelector) {
        super(popupSelector);
        this._callback = callback;
        this._form = this._popupElement.querySelector(".form");
    }
    setEventListeners() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._callback();
        });
        super.setEventListeners();
    }
}
export default PopupDeleteCard;