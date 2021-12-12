import "./index.css"; 
import Api from "../components/Api.js"; 
import FormValidator from "../components/FormValidator.js"; 
import Card from "../components/Card.js"; 
import Section from "../components/Section.js"; 
import PopupWithImage from "../components/PopupWithImage.js"; 
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from "../components/PopupDeleteCard.js";
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
import { timers } from "jquery";



const api = new Api({ 
  baseUrl: "https://around.nomoreparties.co/v1/group-13", 
  authToken: "9610d3b0-6c7e-4344-9c28-b6cc47054a96", 
}); 
 

const userInfo = api.getUserData();
const firstCards = api.getCards();
Promise.all([userInfo, firstCards])
.then(([userData, cards]) => {
  newUserInfo.setUserInfo(userData);
  renderElementsTemplate.renderItems(cards.reverse());
})
.catch((err) =>{
  console.log(`Error: ${err}`);
})



const createCard = (card) => {
  const newCardAdded = new Card(
    {
      data: card,
      handleCardClick: () => {
        imageModal.open(card);
      },
      handleCardDelete: (evt) => {
        deletePopup.open(card._id, evt);
      },
      handleCardLikes: (isLiked) =>{
        return isLiked ? api.removeLike(card._id) : api.addLike(card._id)
      },
      userData: newUserInfo.getId()
    },
    "#places-template"
  );
  return newCardAdded;
};

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

const imageModal = new PopupWithImage(".cover_type_preview"); 
imageModal.setEventListeners();


const newUserInfo = new UserInfo({ 
  name: displayedName, 
  job: displayedInfo,
  avatar: avatar
}); 

const changePicPopup = new PopupWithForm( 
  { 
    callback: (input) => { 
      api 
        .changeProfilePic(input["pic-link"])
        .then(() => {
          newUserInfo.changeAvatar(input["pic-link"]);
          changePicPopup.close()
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })        
    }, 
  }, 
  ".cover_type_changePic" 
); 
changePicPopup.setEventListeners(); 
avatarButton.addEventListener("click", () => { 
  changePicPopup.open();
}); 

const deletePopup = new PopupDeleteCard(
  { 
    callback: (id, place) => { 
        api.removeCard(id)
        .then(()=> {
          place.remove();
          deletePopup.close()}
          )
        .catch((err) => {
          console.log(`Error: ${err}`);
        }) 
    }, 
  }, 
  ".cover_type_delete" 
)
deletePopup.setEventListeners();

  



const editProfileForm = new PopupWithForm( 
  { 
    callback: (data) => {
      api 
        .updateUserId(data)
        .then(res =>{
          newUserInfo.setUserInfo(res);
        })
        .then(() => editProfileForm.close())
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
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
      api 
        .addCard(card) 
        .then((res) => { 
          const response = res; 
          const addedPlace = createCard(response);
          renderElementsTemplate.addItem(addedPlace.generateCard()); 
        })
        .then(() => addCardForm.close())
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
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
