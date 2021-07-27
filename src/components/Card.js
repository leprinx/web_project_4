class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._data = data;
    }
    _getCardTemplate() {
        this._cardTemplate = document.querySelector(this._templateSelector)
            .content.querySelector(".places__element");
        return this._cardTemplate;

    }
    _handleLikeIcon() {
        this._likeButton.classList.toggle("places__element-like_active");
    }
    _handleRemovePlace(event) {
        const targeted = this._removePlace;
        const place = targeted.parentElement;
        place.remove();
    }
    _setEventListeners() {
        this._placeImage.addEventListener("click", () => {
            this._handleCardClick();
        });
        this._removePlace.addEventListener("click", () => {
            this._handleRemovePlace();
        });
        this._likeButton.addEventListener("click", () => {
            this._handleLikeIcon();
        });
    }
    generateCard() {

        this._card = this._getCardTemplate().cloneNode(true);
        this._placeName = this._card.querySelector(".places__title");
        this._placeImage = this._card.querySelector(".places__picture");
        this._placeName.textContent = this._name;
        this._placeImage.src = this._link;
        this._placeImage.alt = this._name;

        this._removePlace = this._card.querySelector(".places__element-remove");

        this._likeButton = this._card.querySelector(".places__element-like");
        this._setEventListeners();
        return this._card;
    }
}

export default Card;