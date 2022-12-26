let raceNumber = Math.floor(Math.random() * 1000);

// 2. Create a variable that indicates whether a runner registered early or not. Set it equal to a Boolean value.
let registeredEarly = false;

// 3. Create a variable for the runner’s age and set it equal to a number.
let age = 28;

// 4. Create a control flow statement that checks whether the runner is an adult AND registered early.
if (age > 18 && registeredEarly) {
  console.log(`Your race starts at 9:30 am, Your race number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race is at 11:00 am. Your race number is ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race is at 12:30pm. Your race number is ${raceNumber}`);
} else if (age === 18) {
  console.log("Please see the registration desk.");
}
