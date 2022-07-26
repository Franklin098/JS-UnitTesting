# Hooks

If you look at hooks.js you can see that there is a lot of duplication, we are always creating a new email and User object in every test.


We could try to create a globar email test and user object, but that is goign to cause that our tests fails. 

Why ? Our first test updates the email inside the user object, so in the following test it fails.

Hoooks can help us to solve this problem

* Before All: good for general initialization

* Before Each / Before All: for reseting variables to initial values

* After All: can help for general clean up works. Like cleaning a testing database that we create for the test, after all tests we can delete the data so we do not store dummy data in our storage

Each hook can be use inside a describe() suite, to apply different scopes


# Concurrent Tests

By defult test run sequentially, but we can add the concurrent anotation to run tests in parallel

```
it.concurrent("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

describe.concurrent('Test Suite',()=>{

});

```