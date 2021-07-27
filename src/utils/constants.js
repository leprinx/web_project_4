export const settings = {
    formSelector: ".form",
    inputSelector: ".form__edit-form",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "form__edit-form-error",
    errorClass: "form__input_error_active"
};
//selector for the template elements
const cardTemplate = document.querySelector("#places-template").content.querySelector(".places__element");
const placesList = document.querySelector(".places__elements");
// const removePlace = document.querySelector("#places-template").content.querySelector(".places__element-remove");



//form to edit profile
export const popupEditProfile = document.querySelector(".cover_type_edit");
export const openEditProfileBtn = document.querySelector(".profile__modifier");
const closeEditProfileBtn = document.querySelector(".button_type_profile");
const formEditProfile = document.querySelector(".form_type_profile");

export let inputUserName = document.querySelector(".form__edit-form_type_name");
export let inputUserDescription = document.querySelector(".form__edit-form_type_description");
export const displayedName = document.querySelector(".profile__author");
export const displayedInfo = document.querySelector(".profile__subtitle");

//form to add new places
export const popupAddCard = document.querySelector(".cover_type_add");
export const openAddCardBtn = document.querySelector(".add-element");
const closeAddCardBtn = document.querySelector(".button_type_places");
const formAddCard = document.querySelector(".form_type_places");


const inputCardName = document.querySelector(".form__edit-form_type_new-place");
const inputImageLink = document.querySelector(".form__edit-form_type_place-picture");
const submitAddCardBtn = popupAddCard.querySelector(".form__save-button");



//preview place full screen 
const popupImage = document.querySelector(".cover_type_preview");
const previewImage = popupImage.querySelector(".cover__preview-image");
const previewSubtitle = popupImage.querySelector(".cover__preview-image-subtitle");
const closePopupImage = popupImage.querySelector(".button_type_preview");