export class Card {
  constructor(place, link, selector) {
    this._place = place;
    this._link = link;
    this._selector = selector;
  }

  _createCardElement() {
    const template = document.querySelector(this._selector);
    const cardElement = template.content
      .querySelector(".elements__card")
      .cloneNode(true);
    const textElement = cardElement.querySelector(".elements__card-name");
    const imageElement = cardElement.querySelector(".elements__card-image");

    textElement.textContent = this._place;
    imageElement.src = this._link;
    imageElement.alt = this._place;

    return cardElement;
  }

  _handleLikeButton(event) {
    event.target.classList.toggle("elements__like-button_active");
  }

  _handleRemoveButton(event) {
    const cardElement = event.target.closest(".elements__card");
    cardElement.remove();
  }

  _setEventListeners(element) {
    const likeButton = element.querySelector(".elements__like-button");
    likeButton.addEventListener("click", this._handleLikeButton);

    const removeButton = element.querySelector(".elements__delete-button");
    removeButton.addEventListener("click", this._handleRemoveButton);
  }

  generateCard() {
    const cardElement = this._createCardElement();
    this._setEventListeners(cardElement);
    return cardElement;
  }
}
