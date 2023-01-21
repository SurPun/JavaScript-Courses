# Unit Testing with Jest

## Notes

```
//assertions
  expect(actualIngredients).toBeDefined();
  expect(actualIngredients).toEqual(expectedIngredients);
  expect(actualIngredients.length).toBe(5);
  expect(actualIngredients[0] === "Basil").toBeTruthy();
  expect(actualIngredients).not.toContain("Ice Cream");
```

Let’s go over the matchers used in this example:

.toBeDefined() is used to verify that a variable is not undefined. This is often the first thing checked.

.toEqual() is used to perform deep equality checks between objects.

.toBe() is similar to .toEqual() but is used to compare primitive values.

.toBeTruthy() is used to verify whether a value is truthy or not.

.not is used before another matcher to verify that the opposite result is true

.toContain() is used when we want to verify that an item is in an array. In this case, since the .not matcher is used, we are verifying that "Ice Cream" is NOT in the array.

As mentioned in the previous lesson, there are many different matches. Rather than memorizing all of them, you should consult the complete list in the [Jest documentation.](https://jestjs.io/docs/expect)

## Let's Review!

Great work! We have covered a lot over this lesson. Let’s take a moment to review:

We have learned that Jest is an easy-to-use framework for testing in a JavaScript environment because it combines a test-runner with assertion methods like the expect() API.

We also learned some of the basic syntax involved with creating a simple unit test, such as the test() function.

After tackling basic unit tests we adventured into the realm of testing asynchronous code with Jest by using the done parameter to wait for asynchronous callbacks and the async/await keywords to wait for Promises to resolve

Lastly, we learned how to mock functions using jest.fn() and make use of mocked modules with jest.mock() by mocking the Axios module.

While we have learned a lot there is always more knowledge to be obtained and we encourage you to continue exploring Jest and its wonderful features!
