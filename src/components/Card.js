import Api from "./Api.js";
import PopupDeleteCard from "./PopupDeleteCard.js";
import { formDelete } from "../utils/constants.js";
import { loadingMessage } from "../utils/functions.js";

const newApi = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  authToken: "9610d3b0-6c7e-4344-9c28-b6cc47054a96",
});

class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._likes = data.likes;
  }
  _getCardTemplate() {
    this._cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".places__element");
    return this._cardTemplate;
  }
  _handleLikeIcon() {
    if (this._likeButton.classList.contains("places__element-like_active")) {
      newApi.removeLike(this._id).then((res) => {
        if (res.likes.length > -1) {
          this._showLikes.textContent = res.likes.length;
        }
      });
    } else {
      newApi.addLike(this._id).then((res) => {
        console.log(res);
        this._showLikes.textContent = res.likes.length;
      });
    }
    this._likeButton.classList.toggle("places__element-like_active");
  }
  _handleRemovePlace() {
    this._place = this._removePlace.parentElement;
    this._popupDelete = new PopupDeleteCard(
      {
        callback: () => {
          loadingMessage(true, formDelete, "Deleting...");
          newApi
            .removeCard(this._id)
            .finally(loadingMessage(false, formDelete, "Deleting..."));
          this._place.remove();
        },
      },
      ".cover_type_delete"
    );
    this._popupDelete.setEventListeners();
  }
  _setEventListeners() {
    this._placeImage.addEventListener("click", () => {
      this._handleCardClick();
    });
    this._removePlace.addEventListener("click", () => {
      this._handleRemovePlace();
      this._popupDelete.open();
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
    this._showLikes = this._card.querySelector(".places__show-likes");
    this._showLikes.textContent = this._likes.length;
    this._removePlace = this._card.querySelector(".places__element-remove");
    newApi.getUserId().then((res) => {
      if (this._data.owner._id != res._id) {
        this._removePlace.remove();
      }
    });
    this._likeButton = this._card.querySelector(".places__element-like");
    newApi.getUserId().then((res) => {
      const found = this._likes.some((el) => el.name === res.name);
      if (found) {
        this._likeButton.classList.add("places__element-like_active");
      }
    });
    this._setEventListeners();
    return this._card;
  }
}

export default Card;
