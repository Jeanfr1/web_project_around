import likedImage from "../images/like-clicked.png";
import heartImage from "../images/Like.png";

export default class Card {
  constructor(data, dataTemplate, handleImagePopup) {
    this._name = data.title;
    this._link = data.link;
    this._dataTemplate = dataTemplate;
    this._handleImagePopup = handleImagePopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template")
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", (evt) => {
        this._likeButton(evt);
      });

    this._element
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleImagePopup(this._link, this._name);
      });
  }

  _deleteCard() {
    const elements = document.querySelector(".elements");
    const card = this._element;
    elements.removeChild(card);
  }

  _likeButton(evt) {
    const target = evt.target;
    const currentSrc = target.getAttribute("src");

    if (currentSrc === heartImage) {
      target.setAttribute("src", likedImage);
    } else if (currentSrc === likedImage) {
      target.setAttribute("src", heartImage);
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    const currentCardName = this._element.querySelector(".elements__card-name");
    currentCardName.textContent = this._name;

    this._setEventListeners();

    const imageElement = this._element.querySelector(".elements__card-image");
    imageElement.setAttribute("src", this._link);
    imageElement.setAttribute("alt", this._name);

    return this._element;
  }
}
