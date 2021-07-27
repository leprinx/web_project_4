import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open({ link, name }) {
        this._popupElement.querySelector(".cover__preview-image").src = link;
        this._popupElement.querySelector(".cover__preview-image-subtitle").textContent = name;
        super.open();
    }
}

export default PopupWithImage;