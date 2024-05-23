import { Section } from "./section.js";
import { Card } from "./card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import "./styles/index.css";

const initialCards = [
  // Adicione seus cartões iniciais aqui
];

const cardListSelector = ".elements__list";
const cardTemplateSelector = "#card-template";
const popupImageSelector = ".popup-view-image";
const popupProfileSelector = ".popup-profile";
const popupAddCardSelector = ".popup-add-card";
const profileNameSelector = ".profile__name";
const profileRoleSelector = ".profile__role";

const userInfo = new UserInfo(profileNameSelector, profileRoleSelector);

const handleCardClick = (link, name) => {
  popupWithImage.open(link, name);
};

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data.name, data.role);
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(popupAddCardSelector, (data) => {
  const card = new Card(
    { name: data.name, link: data.link },
    cardTemplateSelector,
    handleCardClick
  );
  const cardElement = card.generateCard();
  section.addItem(cardElement);
});
popupAddCard.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardTemplateSelector, handleCardClick);
      const cardElement = card.generateCard();
      section.addItem(cardElement);
    },
  },
  cardListSelector
);

section.renderItems();

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    const userData = userInfo.getUserInfo();
    document.querySelector(".popup__input_type_name").value = userData.name;
    document.querySelector(".popup__input_type_role").value = userData.role;
    popupProfile.open();
  });

document.querySelector(".profile__add-button").addEventListener("click", () => {
  popupAddCard.open();
});
