import { it, expect, describe } from "vitest";
import "./numbers";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("Transform to number", () => {
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
});

describe("cleanNumbers()", () => {
  // Integration Test: by calling cleanNumbers() we are testing if multiple functions work well together
  it("should return an array of number values if an array of string number values is provided", () => {
    // arrange
    const strNumbers = ["1", "2"];
    // act
    const cleanedNumbers = cleanNumbers(strNumbers);
    // assert
    expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers[1]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]); // use toEqual instead of toBe, since toBe checks reference equality
    // toEqual does deep comparison checking each properties.
  });

  // We must test if units works together as expected, units working good doesn't mean the whole system
  // is going to work good when all the pieces are working together.
  it("should throw an error if an array with at least one empty string is provided", () => {
    // arrange
    const strNumbers = ["", "1"];
    // act
    const cleanFn = () => cleanNumbers(strNumbers);
    // assert
    expect(cleanFn).toThrow();
  });
});
