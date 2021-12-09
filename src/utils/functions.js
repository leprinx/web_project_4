import {api, id } from "../pages/index.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";


const imageModal = new PopupWithImage(".cover_type_preview");



export const loadingMessage = (loading, popupSelector, textContent) => {
  if (loading) {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
    console.log(textContent);
  } else {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
    console.log(textContent);  
  }
};
