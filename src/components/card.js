export default class Card {
  constructor(
    dataCard,
    templateSelector,
    popupWithImage,
    handleDeleteClick,
    handleAddLike,
    handleRemoveLike
  ) {
    this._link = dataCard.link;
    this._name = dataCard.name;
    this._data = dataCard;
    this.owner = dataCard.owner._id;
    this._cardId = dataCard._id;
    this._likes = dataCard.likes;
    this._templateSelector = templateSelector;
    this._popupWithImage = popupWithImage;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template")
      .content.querySelector(".elements__card")
      .cloneNode(true);

    return cardElement;
  }

  removeElement() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__image").alt = this._name;
    this._element.querySelector(".elements__title").textContent = this._name;
    this._element.querySelector(".elements__like-count").textContent =
      this._likes.length;

    const trashDeleteOwner = () => {
      const myId = "21f49d39-7f3b-46b9-92e4-04f6de3be567";
      if (this.owner === myId) {
        this._element.querySelector(".elements__button-trash");
        return true;
      }
    };

    trashDeleteOwner();

    if (this.isLiked()) {
      const likeButton = this._element.querySelector(".elements__like-button");
      likeButton.classList.add("active");
    }

    return this._element;
  }

  isLiked() {
    const myId = "21f49d39-7f3b-46b9-92e4-04f6de3be567";
    return this._likes.some((like) => like._id === myId);
  }

  likeClick() {
    const likeButton = this._element.querySelector(".elements__like-button");
    const likeCount = this._element.querySelector(".elements__like-count");

    likeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
        this._handleRemoveLike(this._cardId).then((data) => {
          this._likes = data.likes;
          likeCount.textContent = this._likes.length;
        });
      } else {
        e.target.classList.add("active");
        this._handleAddLike(this._cardId).then((data) => {
          this._likes = data.likes;
          likeCount.textContent = this._likes.length;
        });
      }
    });
  }

  _trash() {
    const trashButton = this._element.querySelector(".elements__button-trash");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _setEventListeners() {
    this._trash();
    this.likeClick();
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }

  _handleImageClick() {
    this._popupWithImage.open(this._link, this._name);
  }
}
