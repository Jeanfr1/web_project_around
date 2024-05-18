export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_opened")) {
    closePopup(event.target);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup_opened");
    if (openPopup) {
      closePopup(openPopup);
    }
  }
});
