import { extractEnteredNumerValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";
const form = document.querySelector("form");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberStrValues = extractEnteredNumerValues(form);

  let result = calculateResult(numberStrValues);

  let resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
