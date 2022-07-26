import { it, expect } from "vitest";
import { add } from "./math";

// 'test' and 'it' are the same function

// it('description of you test', testFunction())
// you read like 'It should add all number values in an array'
it("should add all number values in an array", () => {
  // Arrange: a good practice is to define inputs and expected outputs together
  const numbers = [1, 2, 3];
  const expectedResult = 6;

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

// We want to also test things that should not happen
it("should yiend Nan if at least one invalid numer is provided", () => {
  //Arrange
  const inputs = ["invalid", 2];
  //Act
  const result = add(inputs);
  //Assert
  expect(result).toBeNaN();
  // 1st time the test failed, in this case we know we should fix our implementation code
});

it("should yiend a correct sum if array of string is provided", () => {
  //Arrange
  const inputs = ["1", "2"];
  //Act
  const result = add(inputs);
  //Assert
  expect(result).toBe(3);
  // 1st time the test failed, in this case we know we should fix our implementation code
});

it("should yiend 0 if an empty array is provided", () => {
  //Arrange
  const inputs = [];
  //Act
  const result = add(inputs);
  //Assert
  expect(result).toBe(0);
  // 1st time the test failed, in this case we know we should fix our implementation code
});

it("should throw an error if no value is passed into the function", () => {
  // Arrange and Act
  const resultFunction = () => {
    add();
  };
  // Assert
  // Vitest runs the function for us
  expect(resultFunction).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  // Arrange and Act
  const resultFunction = () => {
    add(5, 2, 1, 3);
  };
  // Assert
  // We can pase a string for check if it is in the error message, or if it is the correct type
  expect(resultFunction).toThrow(/is not iterable/);
});
