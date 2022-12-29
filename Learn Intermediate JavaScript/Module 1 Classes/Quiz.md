# Classes

1. What is the purpose of the constructor() method?

- The constructor() is called when you create a new instance of a class. It sets the property values for each instance.

If the class inherits properties from a parent class, then it will call super to pass arguments to the parent’s constructor().

2. Which of the following is the subclass in the example below?

```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12;
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}
```

- The Apartment class extends the methods and properties in the RentalUnit class.

3. What is the purpose of inheritance?

- To share data and methods between objects.

--- WRONG

4. Which of the following problems do classes alleviate?

- Classes make it easy to create multiple objects that share property names and methods.

Each instance of a class has the same properties, getters, setters, and methods. Only the property values change.

5. What is the purpose of the super keyword?

- The super keyword is used in subclasses to call a parent constructor().

--- WRONG

6. How would you call the .randomBorough() method in the example below?

```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12;
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);
```

- Apartment.randomBorough()

--- WRONG

7. When you create a subclass using the extends keyword, what will the class inherit from its parent?

- The subclass inherits all of the parent’s getters, setters, and methods. You can also use the super keyword to set properties in the parent class.

--- WRONG

8. Which of the following is a method of the RentalUnit class?

```
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }

  get address() {
    return this._address;
  }

  get cost() {
    return this._cost;
  }

  calculateMonthly() {
    return this.cost / 12;
  }
}
```

- .calculateMonthly()

Including .calculateMonthly(), there are technically four methods in this example: the constructor(), the two getters, and .calculateMonthly().

9. Which of the following keywords is required to create a new class?

- class

--- WRONG

10. Why will the code below throw an error?

```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this._costPerYear / 12;
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    this._numberOfBedrooms = numberOfBedrooms;
    super(address, costPerYear);
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);
```

- In Apartments’ constructor(), the super keyword must be called before this is used.

If you use this before super, JavaScript will throw an error.

11. Which of the following will create an instance of the RentalUnit class, and save it to a variable called myRental?

```
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }

  get address() {
    return this._address;
  }

  get cost() {
    return this._cost;
  }

  calculateMonthly() {
    return this.cost / 12;
  }
}
```

- const myRental = new RentalUnit('111 33rd St NE’, 19000);

  You must include the new keyword and two arguments.
