class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popupElement.classList.add("cover_open");
        document.addEventListener("keyup", this._handleEscClose);
    }
    close() {
        this._popupElement.classList.remove("cover_open");
        document.removeEventListener("keyup", this._handleEscClose);
    }
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        };
    }
    setEventListeners() {
        this._popupElement.addEventListener("click", (e) => {
            if (e.target.classList.contains("button") ||
                e.target.className.includes("cover ") === true) {
                this.close();
            }
        });
    }
}

export default Popup;

//index.js

// const editPopup = new Popup("cover_type_edit");
// editPopup.setEventListeners();
// editPopup.open();

// const addCardPopup = new Popup("cover_type_add");
// addCardPopup.setEventListeners();
// addCardPopup.open();

// const imagePopup = new Popup("cover_type_preview");
// imagePopup.setEventListeners();
// imagePopup.open();