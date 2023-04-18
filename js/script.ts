import { AlertError } from "./alert-error";
import { calculateIMC, notANumber, displayResultMessage } from "./utils";

const form = document.querySelector("form") as HTMLFormElement;
const inputWeight = document.querySelector("#weight") as HTMLInputElement;
const inputHeight = document.querySelector("#height") as HTMLInputElement;

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};
