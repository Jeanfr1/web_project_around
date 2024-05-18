export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    const likeIcon = this._element.querySelector(".elements__like-icon");
    likeIcon.classList.toggle("elements__like-icon_active");
  }

  _handleImageClick() {
    const popupViewImage = document.querySelector(".popup-view-image");
    const popupImage = popupViewImage.querySelector(
      ".popup-view-image__render-image"
    );
    const popupTitle = popupViewImage.querySelector(
      ".popup-view-image__image-title"
    );

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupTitle.textContent = this._name;
    openPopup(popupViewImage);
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });

    this._element
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".elements__card-name").textContent =
      this._name;
    const cardImage = this._element.querySelector(".elements__card-image");
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
