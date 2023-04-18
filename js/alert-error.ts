export const AlertError = {
  element: document.querySelector(".alert-error"),
  open() {
    if (AlertError.element != null) {
      AlertError.element.classList.add("open");
    }
  },
  close() {
    if (AlertError.element != null) {
      AlertError.element.classList.remove("open");
    }
  },
};
