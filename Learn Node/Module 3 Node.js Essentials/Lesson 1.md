# Node.js Essentials

## Review

Congratulations on making it to the end! Let’s take a moment to review the content covered in this lesson:

Blocking code runs synchronously and non-blocking code, such as timer functions, runs asynchronously.

Core modules are provided to developers to perform common tasks efficiently. Core modules are used by passing a string with the module’s name into the require() statement.

We can make our own instances of the EventEmitter class, and we can subscribe to listen for named events with the .on() method and emit events with the .emit() method.

Node allows for both output, data/feedback to a user-provided by a computer, and input data/feedback to the computer provided by the user. To handle errors during asynchronous operations, provided callback functions are expected to have an error as their first parameter.

The buffer module provides global Buffer objects used to represent a fixed amount of memory that can’t be resized.

The timer module provides functions that allow developers to execute callbacks at a specified point of time in the future.

The Node fs core module is an API for interacting with the file system.

Streams allow us to read or write data piece by piece instead of all at once.
