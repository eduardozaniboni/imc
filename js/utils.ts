import { Modal } from "./modal";

export function notANumber(value: string) {
  return isNaN(Number(value)) || value == "";
}

export function calculateIMC(weight: string, height: string) {
  return (Number(weight) / (Number(height) / 100) ** 2).toFixed(2);
}

export function displayResultMessage(result: string) {
  const message = `Seu IMC é de ${result}`;
  if (Modal.message) {
    Modal.message.innerHTML = message;
    Modal.open();
  }
}
