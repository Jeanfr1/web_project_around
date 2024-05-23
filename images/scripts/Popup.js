export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup-opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup-opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const popups = Array.from(document.querySelectorAll(".popup-opened"));
      popups.forEach((popup) => popup.classList.remove("popup-opened"));
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close");
    const overlay = this._popup.firstElementChild;

    closeButton.addEventListener("click", () => this.close());
    overlay.addEventListener("click", () => this.close());
  }
}
