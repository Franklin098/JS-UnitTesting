import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNoEmpty()", () => {
  it("should throw and error if we pass empty string", () => {
    let input = "";
    let execFunc = () => {
      validateStringNotEmpty(input);
    };

    expect(execFunc).toThrow();
  });

  it("should should not throw if we pass valid string", () => {
    let input = "valid";
    let execFunc = () => {
      validateStringNotEmpty(input);
    };

    expect(execFunc).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw and error if we a string to validateNumber()", () => {
    let input = "1";
    let execFunc = () => {
      validateNumber(input);
    };

    expect(execFunc).toThrow();
  });

  it("should throw and error if we pass undefined to validateNumber()", () => {
    let input = undefined;
    let execFunc = () => {
      validateNumber(input);
    };

    expect(execFunc).toThrow();
  });
});
