import { it, expect, vi } from "vitest";
import writeData from "./io";

it("should execute the writeFile method", () => {
  const testData = "Test data";
  const testFileName = "test.txt";
  // Test if promise resolves
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  // Our test works !, so what is the problem ?
  // we just created a test.txt file because of this test, that is a side effect
  // this is a problem because we can overwrite, delete or replace important data.

  // Another Side Effects : sending http requests, working with databases while testing
  // these are side effects because we are interacting with external tools out of our code.
});

// Use Mocks to test 3rd party libraries or code that we don't own, see io.test.js to see the fixed version
