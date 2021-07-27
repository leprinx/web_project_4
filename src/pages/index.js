import "./index.css";

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
    popupAddCard
} from "../utils/constants.js";



const initialCards = [{
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const imageModal = new PopupWithImage(".cover_type_preview");
imageModal.setEventListeners();

const renderElementsTemplate = new Section({
    renderer: (card) => {
        const { link, name } = card;
        const newCard = new Card({
            data: card,
            handleCardClick: () => {
                imageModal.open({ link, name });
            }
        }, "#places-template");
        const generatedCard = newCard.generateCard();
        renderElementsTemplate.addItem(generatedCard);
    }
}, ".places__elements");
renderElementsTemplate.renderItems(initialCards);

const newUserInfo = new UserInfo({
    name: displayedName,
    job: displayedInfo
});

const editProfileForm = new PopupWithForm({
    callback: (data) => {
        newUserInfo.setUserInfo(data);
    }
}, ".cover_type_edit");

editProfileForm.setEventListeners();

openEditProfileBtn.addEventListener("click", () => {
    editProfileForm.open();
    inputUserName.value = newUserInfo.getUserInfo().name.textContent;
    inputUserDescription.value = newUserInfo.getUserInfo().job.textContent;
});

const addCardForm = new PopupWithForm({
    callback: (card) => {
        const newCardAdded = new Card({
            data: card,
            handleCardClick: () => {
                imageModal.open(card);
            },
        }, "#places-template");
        renderElementsTemplate.addItem(newCardAdded.generateCard());
    }
}, ".cover_type_add");

addCardForm.setEventListeners();

openAddCardBtn.addEventListener("click", () => {
    addCardForm.open();
});

const editFormValidator = new FormValidator(settings, popupEditProfile);
editFormValidator.enableValidation();
const addCardFormValidator = new FormValidator(settings, popupAddCard);
addCardFormValidator.enableValidation();