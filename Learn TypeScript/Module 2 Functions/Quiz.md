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
