class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__card-image").src = this._link;
    this._element.querySelector(".elements__card-image").alt = this._name;
    this._element.querySelector(".elements__card-name").textContent =
      this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__card-image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
  }
}

export { Card };
