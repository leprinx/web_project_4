import "./index.css";

import Api from "../components/Api.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  displayedName,
  displayedInfo,
  inputUserName,
  inputUserDescription,
  openEditProfileBtn,
  openAddCardBtn,
  settings,
  popupEditProfile,
  popupAddCard,
  popupChangeProfilePic,
  avatar,
  avatarButton,
  formAddCard,
  formAvatar,
  formDelete,
  formEditProfile,
} from "../utils/constants.js";
import initialCards from "../utils/initialCards.js";
import { createCard, loadingMessage } from "../utils/functions.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-13",
  authToken: "9610d3b0-6c7e-4344-9c28-b6cc47054a96",
});

api.getUserId().then((res) => {
  avatar.src = res.avatar;
});

const imageModal = new PopupWithImage(".cover_type_preview");
imageModal.setEventListeners();

const changePicPopup = new PopupWithForm(
  {
    callback: (input) => {
      loadingMessage(true, formAvatar, "Saving...");
      api
        .changeProfilePic(input["pic-link"])
        .finally(loadingMessage(false, formAvatar, "Saved"));
      avatar.src = input["pic-link"];
    },
  },
  ".cover_type_changePic"
);
changePicPopup.setEventListeners();
avatarButton.addEventListener("click", () => {
  changePicPopup.open();
});

const renderElementsTemplate = new Section(
  {
    renderer: (card) => {
      const newCard = createCard(card);
      const generatedCard = newCard.generateCard();
      renderElementsTemplate.addItem(generatedCard);
    },
  },
  ".places__elements"
);

api.getCards().then((cards) => {
  renderElementsTemplate.renderItems(cards);
});

const newUserInfo = new UserInfo({
  name: displayedName,
  job: displayedInfo,
});
api.getUserId().then((data) => {
  newUserInfo.setUserInfo({ name: data.name, job: data.about });
});

const editProfileForm = new PopupWithForm(
  {
    callback: (data) => {
      loadingMessage(true, formEditProfile, "Saving...");
      api
        .updateUserId({ name: data.name, about: data.job })
        .finally(loadingMessage(false, formEditProfile, "Saved"));
      newUserInfo.setUserInfo({ name: data.name, job: data.job });
    },
  },
  ".cover_type_edit"
);

editProfileForm.setEventListeners();

openEditProfileBtn.addEventListener("click", () => {
  editProfileForm.open();
  inputUserName.value = newUserInfo.getUserInfo().name.textContent;
  inputUserDescription.value = newUserInfo.getUserInfo().job.textContent;
});

const addCardForm = new PopupWithForm(
  {
    callback: (card) => {
      loadingMessage(true, formAddCard, "Adding...");
      api
        .addCard(card)
        .then((res) => {
          const response = res;
          const addedPlace = createCard(response);
          renderElementsTemplate.addItem(addedPlace.generateCard());
        })
        .finally(loadingMessage(false, formAddCard, "Adding..."));
    },
  },
  ".cover_type_add"
);

addCardForm.setEventListeners();

openAddCardBtn.addEventListener("click", () => {
  addCardForm.open();
});

const editFormValidator = new FormValidator(settings, popupEditProfile);
editFormValidator.enableValidation();
const addCardFormValidator = new FormValidator(settings, popupAddCard);
addCardFormValidator.enableValidation();
const profilePicValidator = new FormValidator(settings, popupChangeProfilePic);
profilePicValidator.enableValidation();
