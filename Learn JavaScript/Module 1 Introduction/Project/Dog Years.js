// 1. Create a variable named myAge, and set it equal to your age as a number.
const myAge = 28;

// 2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
let earlyYears = 2;

// 3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// 4. Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears.
let laterYears = myAge - 2;

// 5. Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;

// 6. If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?
console.log(earlyYears);
console.log(laterYears);

// 7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;

// 8. Let’s use a string method next. Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters.
const myName = "Suraj".toLowerCase();
console.log(myName);

// 9. Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence: My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years. Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

// 10. Great work! You can convert any human age to dog years. Try changing myAge and see what happens. If you’d like extra practice, try writing this project without the *= operator.
// myAge = x * 10
