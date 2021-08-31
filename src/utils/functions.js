import {api, id } from "../pages/index.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";


const imageModal = new PopupWithImage(".cover_type_preview");


// export const createCard = (card) => {
//   const newCardAdded = new Card(
//     {
//       data: card,
//       handleCardClick: () => {
//         imageModal.open(card);
//       },
//       handleCardDelete: (id) => {
//         const deletePopup = new PopupDeleteCard(
//           { 
//             callback: (id) => { 
//               loadingMessage(true, formDelete, "Deleting..."); 
//               api
//                 .removeCard(id)
//                 .finally(loadingMessage(false, formDelete, "Deleting..."));  
//             }, 
//           }, 
//           ".cover_type_delete" 
//         )
//         deletePopup.setEventListeners();
//         deletePopup.open();
//       },
//       handleCardLikes: (isLiked, cardId) =>{
//         return isLiked ? api.addLike(cardId) : api.removeLike(cardId)
//       },
//       userInfo: id
//     },
//     "#places-template"
//   );
//   return newCardAdded;
// };

export const loadingMessage = (loading, popupSelector, textContent) => {
  if (loading) {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
  } else {
    popupSelector.querySelector(".form__save-button").textContent = textContent;
  }
};
