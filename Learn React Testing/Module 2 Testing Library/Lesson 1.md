# React Testing Library

## Review

Good job! We can now use React Testing Library (RTL) to test our React components. Let’s quickly review what we’ve learned so far:

React Testing Library allows us to test React components by mimicking real user interactions.

In order to make your component available in the unit test, we have to use the render() function. We can check to see the available components in our rendered DOM by using the screen.debug() method. screen is a special object that can be thought of as a representation of the browser window.

RTL has built in query methods (.getByX,.findByX,.queryByX) that allows us to extract the DOM nodes from your components. We can use these query methods by using the screen object e.g. screen.getByText()

We can test the behavior of these extracted nodes by using the jest matchers provided by the @testing-library/jest-dom library. E.g. expect().toBeChecked().

We can mimic user interactions by using methods provided by the testing-library/user-event library. An example method is userEvent.click().

Besides .findByX, RTL has the waitFor() asynchronous function that can be used to test asynchronous events such as an element being removed asynchronously or a component making an API call.

Want to learn more about testing your React components? Check out the article(s) below!

[Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details)
