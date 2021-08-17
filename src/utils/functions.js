import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";

const imageModal = new PopupWithImage(".cover_type_preview");

export const createCard = (card) => {
  const newCardAdded = new Card(
    {
      data: card,
      handleCardClick: () => {
        imageModal.open(card);
      },
    },
    "#places-template"
  );
  return newCardAdded;
};

export const loadingMessage = (loading, popupSelector, textContent) => {
  if (loading) {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
  } else {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
  }
};
