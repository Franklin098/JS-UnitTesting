import { cleanNumbers } from "./util/numbers.js";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // fixing with string to int converion, we found this bug in our code thanks to unit testing
    sum += +number;
  }
  return sum;
}

export function calculateResult(numberStrValues) {
  let result = "";
  try {
    const numbers = cleanNumbers(numberStrValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  return result;
}
