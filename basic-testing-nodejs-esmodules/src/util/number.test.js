import { it, expect } from "vitest";
import "./numbers";
import { transformToNumber } from "./numbers";

it("should return a number conversion of the input", () => {
  let inputStr = "5";
  let numericValue = 5;

  let result = transformToNumber(inputStr);

  expect(result).toBe(numericValue);
  expect(result).toBeTypeOf("number");
});

it("should convert negative numbers", () => {
  let inputStr = "-1000";
  let numericValue = -1000;

  let result = transformToNumber(inputStr);

  expect(result).toBe(numericValue);
});

it("should return 0 if we pass an empty string", () => {
  let input = "";

  let result = transformToNumber(input);

  expect(result).toBe(0);
});

it("should return NaN if we pass empty arguments", () => {
  let result = transformToNumber();
  expect(result).toBeNaN();
});
