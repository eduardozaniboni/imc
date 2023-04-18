export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    if (Modal.wrapper != null) {
      Modal.wrapper.classList.add("open");
    }
  },

  close() {
    if (Modal.wrapper != null) {
      Modal.wrapper.classList.remove("open");
    }
  },
};

if (Modal.buttonClose instanceof HTMLButtonElement) {
  Modal.buttonClose.onclick = () => {
    Modal.close();
  };
}

window.addEventListener("keydown", handleKeydown);
function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
