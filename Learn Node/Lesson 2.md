# JavaScript for Node.js

Review of essential JavaScript concepts for Node.js

Welcome, Codecademy Learners. Congratulations on the progress you have made thus far.

The goal of this article is to review some important JavaScript concepts that will be useful to fully utilize Node.js, which we will dive into in the next module. This article will cover topics such as, arrow expressions, non-blocking I/O(Input/Output), the setInterval() function, and the setTimeout() function, and modules. If you are thinking to yourself, “wow, I’m not sure what these concepts are”, that’s ok. If you would like to learn more about a topic, click on the links throughout this article. Now, let’s get to our first topic—arrow expressions.

## Arrow Expressions

With the introduction of ES6 (ECMAScript) in 2015 came a new feature called arrow expressions. Arrow expressions has allowed developers to omit parts of the function they don’t need. This means that it allows your code to become more maintainable and organized.

Let’s take a look at the code below. You will see two different functions defined. The first is anonymous (function is not named), and the second is named. When using an arrow expression, we do not use the function declaration. To define an arrow expression you simply use: () => { }. You can pass arguments to an arrow expression between the parenthesis (()).

```
// Defining an anonymous arrow expression that simply logs a string to the console.
console.log(() => console.log('Shhh, Im anonymous'));

// Defining a named function by creating an arrow expression and saving it to a const variable helloWorld.
const helloWorld = (name) => {
console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};

// Calling the helloWorld() function.
helloWorld('Codey'); //Output: Welcome Codey to Codecademy, this is an Arrow Function Expression.
```

## Asynchronous Concepts

When it comes to development in Node.js and JavaScript, we use a mix of synchronous code (blocking I/O), and asynchronous code (non-blocking I/O). A common example of asynchronous code are Promises.

### Promises

A Promise is a JavaScript object that represents the eventual outcome of an asynchronous operation. A Promise has three different outcomes: pending (the result is undefined and the expression is waiting for a result), fulfilled (the promise has been completed successfully and returned a value), and rejected (the promise did not successfully complete, the result is an error object).

In the code below a new Promise is being defined and is passed a function that takes two arguments, a fulfilled condition, and a rejected condition. We then log the returned value of the Promise to the console and chain a .catch() method to handle errors.

```
// Creating a new Promise and saving it to the testLuck variable. Two arguments are being passed, one for when the promise resolves, and one for if the promise gets rejected.
const testLuck = new Promise((resolve, reject) => {
if (Math.random() < 0.5) {
resolve('Lucky winner!')
} else {
reject(new Error('Unlucky!'))
}
});

testLuck.then(message => {
console.log(message) // Log the resolved value of the Promise
}).catch(error => {
console.error(error) // Log the rejected error of the Promise
});
```

## Async/Await

The async...await syntax allows developers to easily implement Promise-based code. The keyword async used in conjunction with a function declaration creates an async function that returns a Promise. Async functions allow us to use the keyword await to block the event loop until a given Promise resolves or rejects. The await keyword also allows us to assign the resolved value of a Promise to a variable.

Let’s take a look at the code below. In the code below an asynchronous arrow expression is defined with the async keyword. In the function body we are creating a new Promise which passes a function that is executed after 5 seconds, we await the Promise to resolve and save the value returned to finalResult, and the output of the Promise is logged to the console.

```
// Creating a new promise that runs the function in the setTimeout after 5 seconds.
const newPromise = new Promise((resolve, reject) => {
setTimeout(() => resolve("All done!"), 5000);
});

// Creating an asynchronous function using an arrow expression and saving it to a the variable asyncFunction.
const asyncFunction = async () => {
// Awaiting the promise to resolve and saving the result to the variable finalResult.
const finalResult = await newPromise;

// Logging the result of the promise to the console
console.log(finalResult); // Output: All done!
}

asyncFunction();
```

## setInterval() and setTimeout()

In addition to utilizing the async...await syntax, we can also use the setInterval() and setTimeout() functions. In the example code of the previous section, we created a setTimeout() instance in the Promise constructor.

The setInterval() function executes a code block at a specified interval, in milliseconds. The setInterval() function requires two arguments: the name of the function (the code block that will be executed), and the number of milliseconds (how often the function will be executed). Optionally, we can pass additional arguments which will be supplied as parameters for the function that will be executed by setInterval(). The setInterval() function will continue to execute until the clearInterval() function is called or the node process is exited. In the code block below, the setInterval() function in the showAlert() function will display an alert box every 5000 milliseconds.

```
// Defining a function that instantiates setInterval
const showAlert = () => {
// Calling setInterval() and passing a function that shows an alert every 5 seconds.
setInterval(() => {
alert('I show every 5 seconds!')
}, 5000);
};

// Calling the newInterval() function that calls the setInterval
showAlert();
```

The setTimeout() function executes a code block after a specified amount of time (in milliseconds) and is only executed once. The setTimeout() function accepts the same arguments as the setInterval() function. Using the clearTimeout() function will prevent the function specified from being executed. In the code block below, a function named showTimeout() is declared as an arrow expression. The setTimeout() function is then defined and displays an alert box after 5 seconds.

```
// Defining a function that calls setTimeout
const showTimeout = () => {
// Calling setTimeout() that passes a function that shows an alert after 5 seconds.
setTimeout(() => {
alert('I only show once after 5 seconds!');
}, 5000);
};

// Calling the showTimeout() function
showTimeout();
```

## Review

Congratulations—you made it to the end of the article! You are ready for your journey to learning Node.js. We covered essential JavaScript topics such as arrow expressions, asynchronous programming (non-blocking I/O), the setInterval() function, and the setTimeout() function.

If you are unclear or want to learn more about any of the topics that have been covered in this article, please utilize the Codecademy Forum or click on the links in the article to learn more!
