# Types Quiz

1. TypeScript’s tsc command will let you know if your code tried to access members of variables known to not exist. TypeScript helps us quickly locate bugs in our code.

How many errors will TypeScript show based on the code provided?

```
let pizzaTopping = 'PEPPERONI';

console.log(pizzaTopping.toLowercase());
console.log(pizzaTopping.lenght);
```

- 2
  TypeScript will throw two errors because of the typos in the method names.

2. After running tsc main.ts, what happens?

- The TypeScript transcompiler reads main.ts file and creates a new main.js file that will be used for code execution.

3. What is the benefit of TypeScript?

- TypeScript adds types to JavaScript to help spot potential bugs in, clarify the structure of, and help refactor our code.

4. When declaring a variable with an initial value in TypeScript, the variable can never be reassigned a value of a different data type.

Which line of code will cause an error in TypeScript:

```
let name = 'Alex';
name = 'Alisha';

let isHungry = true;
isHungry = 'yes';
```

- isHungry = 'yes';
  isHungry was initialized with a data type of boolean causing an error when attempting to assign it a value of a string.

5. Given the following code, what will happen after running the TS compiler?

```
let answerToLife;
answerToLife = 42;
answerToLife = 'forty two';
```

- Compiles without any issues.

6. In the following line of code, we have declared the variable shouldWeOrderPizza without initializing a value. Fill in the code using type annotation to cause an error if a string value is assigned in the future rather than a boolean. Then assign the correct value type to shouldWeOrderPizza to avoid throwing an error:

```
let shouldWeOrderPizza: boolean;
shouldWeOrderPizza = true
```

7. Which of the following has a valid TypeScript file extension?

- hello.ts

8. Select a statement that is NOT true about the TypeScript transpiler.

- The TypeScript transpiler replaces TypeScript code with JavaScript code in place.

This statement is not correct because the transpiler produces a new JavaScript file instead of replacing the original TypeScript file.
