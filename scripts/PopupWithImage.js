import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(imageSelector, titleSelector, popupSelector) {
    super(popupSelector);
    this._imageSelector = this._popup.querySelector(imageSelector);
    this._titleSelector = this._popup.querySelector(titleSelector);
  }

  open(image, name) {
    this._imageSelector.src = image;
    this._imageSelector.alt = name;
    this._titleSelector.textContent = name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    const closeZoom = this._popup.querySelector(".popup__close");
    closeZoom.addEventListener("click", () => this.close());
    this._popup.firstElementChild.addEventListener("click", () => this.close());
  }
}
