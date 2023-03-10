# PropTypes

# React Forms

## Controlled vs Uncontrolled

There are two terms that will probably come up when you talk about React forms: controlled component and uncontrolled component. Like automatic binding, controlled vs uncontrolled components is a topic that you should be familiar with, but don’t need to understand deeply at this point.

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

Think of a typical <input type='text' /> element. It appears onscreen as a text box. If you need to know what text is currently in the box, then you can ask the <input />, possibly with some code like this:

```
let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.
```

The important thing here is that the <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.

The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.

In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more ‘React’ way of doing things.

You can find more information about controlled and uncontrolled components in the [React Forms documentation.](https://reactjs.org/docs/forms.html)

## React Forms Recap

Great work! You just wrote your first React form.

Notice that you didn’t use a submit button. You didn’t even use a <form> element! Your “form” was actually just an <input />.

That won’t always be the case. You will still sometimes want a <form> element and a submit button, especially if you need to differentiate between a finished form and an in-progress form. But in some cases, it’s fine to have a “form” that is really just an input field.

This is because, unlike in the traditional form paradigm, in React you re-send your form on every single character change. That removes the need to ever “submit” anything.

That marks the end of this lesson! You’ve learned a wide variety of important techniques: inline styles, separating container and presentational components, stateless functional components, proptypes, and forms. These techniques will be invaluable as you continue to build out more React apps!
