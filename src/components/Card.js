

class Card {
  constructor({ data, handleCardClick, handleCardDelete, handleCardLikes, userData }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._data = data;
    this._likes = data.likes;
    this._userData = userData;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLikes = handleCardLikes;
  }
  _getCardTemplate() {
    this._cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".places__element");
    return this._cardTemplate;
  }
  _isLiked(){
    return this._likes.some((el) => el._id === this._userData);
  }
  _setEventListeners() {
    this._placeImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._removePlace.addEventListener("click", (evt) => {
      this._handleCardDelete(evt);
    });
    this._likeButton.addEventListener("click", () => {
      this._handleCardLikes(this._isLiked())
      .then((res) =>{
        console.log(res.likes);
        this._likeButton.classList.toggle("places__element-like_active");
        this._likes = res.likes;
        this._showLikes.textContent = this._likes.length;
      }).catch((err) => {
        console.log(`Error: ${err}`);
      });
    });
  }
  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    this._placeName = this._card.querySelector(".places__title");
    this._placeImage = this._card.querySelector(".places__picture");
    this._placeName.textContent = this._name;
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._showLikes = this._card.querySelector(".places__show-likes");
    this._showLikes.textContent = this._likes.length;
    this._removePlace = this._card.querySelector(".places__element-remove");
    if (this._data.owner._id !== this._userData) {
      this._removePlace.remove();
    }
    this._likeButton = this._card.querySelector(".places__element-like");
    if(this._isLiked()){
      this._likeButton.classList.add("places__element-like_active");
    }
    this._setEventListeners();
    return this._card;
  }
}

export default Card;
