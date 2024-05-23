import { Section } from "./section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { Card } from "./card.js";

const userInfo = new UserInfo(".profile__name", ".profile__role");
const popupEditProfile = new PopupWithForm(
  ".popup-edit-profile",
  handleProfileFormSubmit
);
const popupAddCard = new PopupWithForm(
  ".popup-add-card",
  handleAddCardFormSubmit
);
const popupViewImage = new PopupWithImage(".popup-view-image");

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    popupEditProfile.open();
  });
document
  .querySelector(".profile__add-card-button")
  .addEventListener("click", () => {
    popupAddCard.open();
  });

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data.name, data.role);
}

function handleAddCardFormSubmit(data) {
  const newCard = createCard(data);
  cardList.addItem(newCard);
}

function createCard(data) {
  const card = new Card(data, ".template-card", () => {
    popupViewImage.open(data.link, data.name);
  });
  return card.generateCard();
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    },
  },
  ".elements"
);
cardList.renderItems();
