import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

// test async code: use the 'done' parameter
it("should generate a token value", (done) => {
  const testEmail = "example@test.com";

  // the problem is that we are not waiting for the callback ->  we need to use 'done' parameter
  generateToken(testEmail, (err, token) => {
    // when working with async code we need to use try-catch if expect an error, if not, we just get a timeout
    try {
      expect(token).toBeDefined(); // test we dont get undefined
      //expect(token).toBe(2); // this test passes correctly, but it should fail.

      done(); // call it in the palce where we are done with all our test, so vitest knows that needs to wait until 'done'
    } catch (err) {
      done(err);
    }
  });
});

// it is easy to test code with promises
it("should generate a token value using promises", () => {
  const testEmail = "example@test.com";

  // expect supports exeptios out of the box -> 'resolves' and then test the actual valu, or 'reject'
  return expect(generateTokenPromise(testEmail)).resolves.toBeDefined();
});

// another way
it("should generate a token value using promises", async () => {
  // just by adding 'async' keyword to our test function, we can work as usual
  const testEmail = "example@test.com";

  const token = await generateTokenPromise(testEmail);

  expect(token).toBeDefined();
});
