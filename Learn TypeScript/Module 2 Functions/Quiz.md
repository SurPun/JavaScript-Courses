# Functions Quiz

1. Fill in the code to declare the correct return type for the arrow function, whatsMyAge().

```
const whatsMyAge = (): number => {
  return Math.floor(Math.random()*120 + 1);
};

console.log(`I am ${whatsMyAge()} years old today!`);
```

2. Set the parameter type annotation for the customer() function to accept an order parameter of type number and a name parameter of type string. Then call the function by passing in arguments of the correct type.

```
function customer(order: number, name: string) {
  console.log(`Order =  ${order} , Name = ${name}`);
}
customer(1, 'Alexander');
```

3. Quiz: Functions
   Fill in the code to infer that myAnswer is being assigned a value of type boolean that will surface an error if any other value type is assigned.

```
function factOrFiction() {
  return Math.random() >= .5 ? true : false;
}

const myAnswer :  boolean = factOrFiction();
```

4. Which function call will result in a compilation error?

```
function greet(greeting: string, name?: string ) {
  return greeting + ' ' + (name || 'neighbor') + '!';
}
```

-

5. Please fill in the function code with default parameters to print the message:

```
The wheels on the bus go
...round and round
...round and round
...round and round
```

```
function proclaim(status = , repeat = ) {
  console.log(status);
  for (let i = 0; i < repeat; i += 1) {
    console.log('...round and round');
  }
}

proclaim;
```

-

6. Fill in the following code to log Dinky Bubble on the console.

```
function sillyNameGenerator(index1: number, index2: number): void {
  let firstName = ['Runny', 'Buttercup', 'Dinky'];

  let lastName = ['Bubble', 'Buffalo', 'Gross'];

  console.log(`${firstName[index1]} ${lastName[index2]}`)
}

sillyNameGenerator(2, 0)
```

7. Fill in the code for a function that accepts a string type and number type for parameters but doesn’t return a value.

```
function repeatSyllableSong(syllable: string, repeatNumber: number): void {
  let song: string = '';
  for (let i = 0; i <= repeatNumber ; i++) {
    song += syllable;
  }
  console.log(song);
}

repeatSyllableSong('la', 4);
```
