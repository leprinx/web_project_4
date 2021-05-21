const coverEl = document.querySelector(".cover");
const coverOpener = document.querySelector(".profile__modifier");
const coverCloser = document.querySelector(".button");
const formSaved = document.querySelector(".form__save-button");

const formName = document.querySelector(".form__edit-form-name");
const formDescription = document.querySelector(".form__edit-form-description");
const displayedName = document.querySelector(".profile__author");
const displayedInfo = document.querySelector(".profile__subtitle");

const likeElem = document.querySelectorAll(".places__element-like");

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


for (let i = 0; likeElem.length; i++) {
    likeElem[i].addEventListener("click", function() {
        likeElem[i].classList.add("places__element-like_active");
        const likedElem = document.querySelectorAll(".places__element-like_active");
        for (let j = 0; likedElem.length; j++) {
            likedElem[j].textContent = "♥";
            likedElem[j].addEventListener("click", function() {
                likedElem[j].classList.remove("places__element-like_active");
                likedElem[j].classList.add("places__element-like_disabled");
                let disabledLike = document.querySelectorAll("places__element-like_disabled");
                for (let m = 0; disabledLike.length; m++) {
                    disabledLike[m].textContent = "test";
                }
            })
        }
    });
};