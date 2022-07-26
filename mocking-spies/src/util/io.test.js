import { it, expect, vi } from "vitest";
import writeData from "./io";

// use Mocks to test 3rd party libraries or code that we don't own

vi.mock("fs"); // pass the name or path of the module we want to mock
// now, in our following tests, whenever we call the 'fs' node module, vitest passes the mock automatically instead
import { promises as fs } from "fs";

it("should execute the writeFile method", () => {
  // arrange
  const testData = "Test data";
  const testFileName = "test.txt";

  // act
  writeData(testData, testFileName);

  // test if the mock has been called
  expect(fs.writeFile).toBeCalled();
  expect(fs.writeFile).toBeCalledTimes(1);
});

// mock Node path module and its 'join' function
vi.mock("path", () => {
  return {
    // default export
    default: {
      join: (...args) => {
        // the last argument is always the filename
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  // arrange
  const testData = "Test data";
  const testFileName = "test.txt";

  // act
  writeData(testData, testFileName); // we use tha Node path module here, and its 'join' function
  // vitest automatically injects our mocks inside writeData when we import the modules inside

  // test if the mock has been called with the correct parameters
  expect(fs.writeFile).toBeCalledWith(testFileName, testData);
});
