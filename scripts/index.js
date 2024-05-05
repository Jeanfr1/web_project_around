const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function renderCard(card) {
  const template = document
    .querySelector("#template")
    .content.querySelector(".elements__card");
  const currentCard = template.cloneNode(true);

  currentCard.querySelector(".elements__card-name").textContent = card.name;
  currentCard
    .querySelector(".elements__card-image")
    .setAttribute("src", card.link);
  currentCard
    .querySelector(".elements__card-image")
    .setAttribute("alt", card.name);

  currentCard
    .querySelector(".elements__delete-icon")
    .addEventListener("click", (evt) => {
      const elements = document.querySelector(".elements");
      const card = evt.target.closest(".elements__card");
      elements.removeChild(card);
    });

  currentCard
    .querySelector(".elements__like-icon")
    .addEventListener("click", () => {
      const likeIcon = currentCard.querySelector(".elements__like-icon");
      likeIcon.setAttribute(
        "src",
        likeIcon.getAttribute("src").includes("Like.png")
          ? "./images/like-clicked.png"
          : "./images/Like.png"
      );
    });

  return currentCard;
}

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

const elements = document.querySelector(".elements");
initialCards.forEach((card) => elements.appendChild(renderCard(card)));

const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");
const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopupButton = document.querySelector(".popup__close-button");
const editForm = document.querySelector(".popup__form");

editButton.addEventListener("click", () => {
  openPopup(popup);
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newName = document.querySelector("#input-name").value;
  const newRole = document.querySelector("#input-role").value;

  if (newName.trim() !== "" && newRole.trim() !== "") {
    profileName.textContent = newName;
    profileRole.textContent = newRole;
    closePopup(popup);
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

closePopupButton.addEventListener("click", () => closePopup(popup));

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    closePopup(event.target);
  }
});

document
  .querySelector(".profile__add-card-button")
  .addEventListener("click", () => {
    openPopup(document.querySelector(".popup-add-card"));
  });

document
  .querySelector(".popup-add-card__close-button")
  .addEventListener("click", () => {
    closePopup(document.querySelector(".popup-add-card"));
  });

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup-add-card")) {
    closePopup(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
});

document.querySelectorAll(".elements__card").forEach((card) => {
  const image = card.querySelector(".elements__card-image");
  image.addEventListener("click", () => {
    const popupViewImage = document.querySelector(".popup-view-image");
    const popupImage = popupViewImage.querySelector(
      ".popup-view-image__render-image"
    );
    const popupTitle = popupViewImage.querySelector(
      ".popup-view-image__image-title"
    );

    popupImage.setAttribute("src", image.getAttribute("src"));
    popupTitle.textContent = card.querySelector(
      ".elements__card-name"
    ).textContent;
    openPopup(popupViewImage);
  });
});

document
  .querySelector(".popup-view-image__close-button")
  .addEventListener("click", () => {
    closePopup(document.querySelector(".popup-view-image"));
  });

// Adicionando funcionalidade para criar novos cartões
const addCardForm = document.querySelector(".popup__add-card-form");

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputName = document.querySelector("#input-location-name");
  const inputImage = document.querySelector("#input-image");

  const newName = inputName.value.trim();
  const newImage = inputImage.value.trim();

  if (newName !== "" && newImage !== "") {
    const newCard = renderCard({ name: newName, link: newImage });
    elements.prepend(newCard);

    inputName.value = "";
    inputImage.value = "";

    closePopup(document.querySelector(".popup-add-card"));
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
