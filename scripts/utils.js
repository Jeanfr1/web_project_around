const popup = document.querySelector(".popup");

export function changeVisibility() {
  popup.classList.toggle("popup_opened");
  updateEventListener();
}

export function hideVisibility() {
  popup.classList.remove("popup_opened");
  updateEventListener();
}

function updateEventListener() {
  const isOpen = popup.classList.contains("popup_opened");
  const eventListenerAction = isOpen
    ? "addEventListener"
    : "removeEventListener";
  document[eventListenerAction]("keydown", closePopupKeyEscape);
}
