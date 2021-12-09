import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._link = this._popupElement.querySelector(".cover__preview-image");
        this._name = this._popupElement.querySelector(".cover__preview-image-subtitle");
    }
    open({ link, name }) {
        this._link.src = link;
        this._name.textContent = name;
        this._textContent = name;
        super.open();
    }
}

export default PopupWithImage;