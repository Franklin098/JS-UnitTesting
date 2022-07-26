import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string no matter which value is passed in", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided", () => {
    const calculationsResult = 8;
    const resultText = generateResultText(calculationsResult);
    expect(resultText).toContain(calculationsResult.toString());
  });

  it("should return an empty string if no-calc is provided as a result", () => {
    const calculationsResult = "no-calc";
    const resultText = generateResultText(calculationsResult);
    expect(resultText).toBe("");
  });

  it("should return a string that contains -Invalid- if invalid is provided as a result", () => {
    const calculationsResult = "invalid";
    const resultText = generateResultText(calculationsResult);
    expect(resultText).toContain("Invalid");
  });
});
