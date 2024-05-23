import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  open(link, name) {
    const image = this._popup.querySelector(".popup-view-image__render-image");
    const caption = this._popup.querySelector(".popup-view-image__image-title");
    image.src = link;
    image.alt = name;
    caption.textContent = name;
    super.open();
  }
}

export { PopupWithImage };
