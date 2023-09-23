// conditional statement are used to perform different actions based on different conditions

// 1) IF statement

// SYNTAX

// if (condition) {
// body of if
// }

// IF statement evaluate the cndition inside the paranthesis
// if condition is evaluated to "TRUE" the code inside the body of if is excuted
// if condition is evaluated to "FALSE" the code inside the body of if is skipped

let age = 18

if (age >= 18) {
    console.log("You Can drive");
}


let number = 1

if (number > 0) {
    console.log(`${number} is the positive number`);
}

let num1 = "2"
let num2 = 2

if (num1 === num2) {
    console.log(`${num1} and ${num2} are equal numbers`);
}
// the evaluated condition is "FALSE" ...so the code inside the body of IF is skipped


// else statement

//You can use the else statement to specify a block of code to be executed if the condition in the if statement is false.

//syntax 

// if (condition) {
//     Code to be executed if the condition is true
//   } else {
//     Code to be executed if the condition is false in the body of "IF"
//   }

let isUserLoggedIn = false

if (isUserLoggedIn === true) {
    console.log("Your Welcome");
} else {
    console.log("PLease Login");
}


let driverAge = 17

if (driverAge >= 18) {
    console.log("you can drive");
} else {
    console.log("you cannot drive");
}

// even odd

let num = 10

if (num % 2 === 0) {
    console.log(` ${num} is even number`);
} else {
    console.log(`${num} is odd number `);
}

// find leap year
//A leap year is a year which has 366 days. The extra day is 29 February. There is a leap year every four years in the Western calendar.
//Any year that is evenly divisible by 4 is a leap year
const year = 2024

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {

    console.log(`${year} is not a leap year`);
}

// user authentication

const username = "Sufi@123"
const password = 12345

if (username === "Sufi@123" && password === 12345) {
    console.log("Login successful.");
} else {
    console.log("Login failed. Please check your credentials.");

}
// else if

// When you have multiple conditions to check, you can use the else if statement

// Syntax

// if (condition1) {
//     // Code to be executed if condition1 is true
//   } else if (condition2) {
//     // Code to be executed if condition2 is true
//   } else {
//     // Code to be executed if neither condition1 nor condition2 is true
//   }

// checking temperature

let temperature = 10
let weatherWarning;

if (temperature < 0) {
    weatherWarning = "Extreme cold"
} else if (temperature > 0 && temperature < 30) {
    weatherWarning = "Cold weather. Dress warmly."
} else if (temperature >= 30 && temperature < 80) {
    weatherWarning = "Moderate temperature"
} else {
    weatherWarning = "Hot weather. Stay hydrated";
}

console.log(weatherWarning);


const number1 = 20
const operator = "+"
const number2 = "10"

function claculator(number1, operator, number2) {
    let result


    if (number1 === "" || number2 === "") {

        return "please enter number"

    } else if (operator === "+") {
        result = number1 + number2
    } else if (operator === "-") {
        result = number1 - number2
    } else if (operator === "*") {
        result = number1 * number2
    } else if (operator === "/") {
        if (number2 === 0) {
            return "Division by zero is not allowed"
        }
        result = number1 / number2;
    } else if (operator === "%") {
        result = number1 % number2;
    } else {
        return "invalid operator"
    }

    return result;
}

const result = claculator(number1, operator, number2)
console.log(result);


// Function to generate a greeting based on the time of day

function greeting(hour) {
    if (hour < 12) {
        return "Good morning!";
      } else if (hour < 18) {
        return "Good afternoon!";
      } else {
        return "Good evening!";
      }
}

const currentTime = new Date().getHours() //get the current hour of the day using new Date().getHours()
console.log(greeting(currentTime));  //  pass  value to the getGreeting 