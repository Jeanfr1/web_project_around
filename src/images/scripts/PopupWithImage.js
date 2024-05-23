import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(imageSelector, titleSelector, popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(imageSelector);
    this._titleElement = this._popup.querySelector(titleSelector);
  }

  open(image, name) {
    this._imageElement.src = image;
    this._imageElement.alt = name;
    this._titleElement.textContent = name;
    super.open();
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    const overlay = this._popup.firstElementChild;

    closeButton.addEventListener("click", () => this.close());
    overlay.addEventListener("click", () => this.close());
  }
}
