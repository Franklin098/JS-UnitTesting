# Find Bugs Thanks to Testing

If you write good tests for different scenarios it can help you to find bugs in your own implementation and then fix it.

Unit testing is a powerful tool for improve your own code.

# Writting Tests is an Iterative Process

You write tests, fix your code and then write more tests over time.

## You should also test things that should not happen to your code, like checking if you are throwing a correct error

> Go to math.test.js for a demo

# Test Suites

A group or collection of tests. Test Suites help us to organize our tests to packages aaccording to their concern or topic.

```
describe('test suite description', ()=>{

    // tests

    it('should do x', ()=>{
        // test
    })
})
```

We can use multiple nested describe() functions to organize our code as we want.

# Writting Good Tests

## What Should and Shouldn't be tested

* Our test should test just *our code*.

* Don't test third party libraries (don't test DOM elements, or React components).

Example: 

If we are using fetch() API, don't test if it works as intended

Don't test your server-side code implicitly via your client-side code.

Write separate test for your backend code instead.

*Do test your client-side reaction to different responsetes & errors.* (like missing response data, errors, etc).


## Good Tests Are Short and Concise

* You should test just *one thing* in every single test, one specific unit and specific behaviour or expected outcome.

* You shouldn't test many different functions together.

* Keep tests simple and focus on the escence of what we want to test.

* Keep the number of asserts low.

> Go to app.js file

Inside app.js you can find formSubmitHandler() function, you can see that is a large function, with a lot of code. **What you should do with large functions is to split them in more small and concise functions, in to make your tests easier and improve the readability of your code**.

Testing force you to write cleanear code, which is another advantage.

## Testing & Code Improvementes Work Together Iteratively

**You always want granular units, functions so you can write good tests**