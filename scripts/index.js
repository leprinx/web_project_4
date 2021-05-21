let coverEl = document.querySelector(".cover");
let coverOpener = document.querySelector(".profile__modifier");
let coverCloser = document.querySelector(".button");
let formSaved = document.querySelector(".form__save-button");

let formName = document.querySelector(".form__edit-form-name");
let formDescription = document.querySelector(".form__edit-form-description");
let displayedName = document.querySelector(".profile__author");
let displayedInfo = document.querySelector(".profile__subtitle");


// function that opens our cover by adding class

coverOpener.addEventListener("click", function() {
    coverEl.classList.add("cover__open");
});

// function that closes our form

function closeCover() {
    coverEl.classList.remove("cover__open");;
};

coverCloser.addEventListener("click", function() {
    closeCover();
});

//make textContent displayed and form equal

//when opening form make existing text appear

formName.value = displayedName.textContent;
formDescription.value = displayedInfo.textContent;

//save form text to dispkay new values, only when save element is clicked

formSaved.addEventListener("click", function(event) {
    event.preventDefault();
    displayedName.textContent = formName.value;
    displayedInfo.textContent = formDescription.value;
    closeCover();
});

//function that likes or unlikes places element
let likeElem = document.querySelectorAll(".places__element-like");

for (let i = 0; i < likeElem.length; i++) {
    likeElem[i].addEventListener("click", function() {
        likeElem[i].classList.toggle("places__element-like_active");
        if (likeElem[i].classList.contains("places__element-like_active") == true) {
            likeElem[i].textContent = "♥";
        } else {
            likeElem[i].textContent = "♡";
        }
    });
};