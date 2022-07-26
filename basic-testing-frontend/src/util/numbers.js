import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  const converted = Number(value);
  return converted;
}

export function cleanNumbers(numberStrValues) {
  const numbers = [];
  for (const numberInput of numberStrValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
