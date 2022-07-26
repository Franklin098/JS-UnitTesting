# Spies & Mocks

**Dealing with Side Effects & External Dependencies**


## Side Effects

Examples of Side Effects : 

- Sending http requests
- Working with databases while testing
- Writting, deleting files from file system.

These are side effects because we are interacting with external tools out of our code.

Side effects problems:

Writting to the file system: the tests can fail if there is no existing file or directory if we are trying to write something in disk. We can accidentally delte or overwrite production files.


Sending http request: we can change the state or data of the other system by sending a lots of http request operations while running our test

Working with databases: we can end up with a database full of garbage data generated every time we run the tests, our tests can fail if we rely on data that should be on the database.


**To avoid side effects and focus in your code insted of 3rd party code, you can use mocks and spies**


## Spies

They are "wrappers" around functions or empty replacements for functions that allow you to track if and how a function was called.

You can use spies if you are only interested in knowing if a certain function was called or not.

Replace your original function with a spy.

## Mocks

A replacement for an API that may provide some test-specific behavior instead.

You can implement some test specific logic in the replacement function, even different behaviour than the original function.


Some deffinitions:

* **Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.
    
* **Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an InMemoryTestDatabase is a good example).
    
* **Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
    
* **Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
    
* **Mocks** are pre-programmed with expectations which form a specification of the calls they are expected to receive. They can throw an exception if they receive a call they don't expect and are checked during verification to ensure they got all the calls they were expecting.

Use Mocks to test 3rd party libraries or code that we don't own.

> See src/util/io.test.js for an example using Mocks

Mocks is about replacing and mocking entire modules and its behaviour.

Spies are simpler, just help us to know if a passed in function has been called or not.

