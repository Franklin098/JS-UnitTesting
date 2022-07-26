# What is Testing ?

**Verify if something works as intended**

We want to make sure that our software, our app works as intended.

Manual Testing have some downsides, can be Tedious & Cumbersome. Probably we are going to forget to test some scenario, it is error-prone.

Automated Testing saves times, and it is reliable as we document the test, we don't need to remember every test scenario. It is predictable & consistent.

With autometd testing we have an initial effort (write tests), but no effor thereafter. high/complete code & scenario coverage can be achieved.


# Unit Testing, Why and What?

Unit Testing is one popular kind of automated testing.

A *Unit* is just a building blog of our app, ideally the smallest possible building block: functions, class a component.

We have an application with a lot of functions and classes, a lot of units working together. The idea behind *Unit Testing* is that we write test for each individual units. If all units were tested, the overall app should work. But we also backed up this with *Integration Test*.

**Test the individual building blocks.**

Whenever we change something in our code, we write all the tests again, then we can know if some update in the code broked the funcionality.

If we code with unit test in mind, we'll end up writting cleaner and better code.

*Unit tests ignore actual user flows and interfaces, since we are testing just a small unit.*

*With unit test is easy to find the exact spot where something is broken.*


# Integration Testing

**Test the combination of building blocks.**

We verify that the hole app works well, if  different units are executed working together.

Even if all of our units work welll individualy, once we combine them they might not work well anymore.

The combination of units can stil fail.

*With integration test spotting the exact root of error can be tricky (the opposite as unit tests).*

If we have a function that call other functions, obviously while testing it, we'll need to call the function inside of it and its interactions.

If we are combining multiple units or modules, then we'll need integration test.

> Go to src/util/numbers.test.js to see the tests for cleanNumbers() functions.


# End-To-End Testing

**Test entire flows and application features.**

Focus on specific user or API interaction.

Test the actual "real" users interactions.

E2E test are the most realistic tests.

*With integration test it is challenging to cover all behaviours and it can be hard to find the exact place where the error is located.*


**You should combine Unit Test, Integration Test and E2E Test to have a good reliable app.**


# Test Driven Development TDD

A philosophy for coding and writting tests.

*You don't write your code and then some tests for it.*

**Instead you write tests first, even before writting any application code.**

Steps of TDD:

1. Write tests where you define the expected behaviour (These tests will fail at the beginning).
2. Implement the code to make tests succeed
3. Refactor or optimize if necessary and add new tests whenever you want to add a new behaviour.

# Tools

* Test Runner: tool that executes you test codes. Since our testing code is appart of our main application code, we have a dedicated tool to run just the tests.

* Assertion Library: helps to define what should be the expected behaviour, outputs. Checks whether the expectations are met. Support all kind of expectations and modes (syn / async code).


# Test Patterns

## AAA Arrange, Act, Assert

* Arrange: define the testing environment and values.
    - A good practice is to define **inputs and expected outputs together** in the Arrange section. So if we want to change the inputs, then we can easily remember to also change the expected value.

* Act: run the actual code/function that should be tested

* Assert: evaluate the produced value and compare it to the expected value


# Spies & Mocks

**Dealing with Side Effects & External Dependencies**

