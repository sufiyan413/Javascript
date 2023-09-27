// while loop

let count = 1;

while (count <= 5) {
//   console.log(`Count is ${count}`);
  count++;
}


// Example 1: Printing even numbers from 2 to 10 

let number = 2;

while (number <= 10) {
//   console.log(`Even number: ${number}`);
  number += 2;
}


// Example 2: Summing numbers from 1 to 100 using a while loop

let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}

// console.log(`Sum of numbers from 1 to 100 is: ${sum}`);


// do...while loop 

let num = 1;

do {
  console.log(`Number is ${num}`);
  num++;
} while (num <= 5);


// Example 1: Rolling a dice until a 6 is obtained using a do...while loop

let diceRoll;
let attempts = 0;

do {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  attempts++;
  console.log(`Attempt ${attempts}: Rolled a ${diceRoll}`);
} while (diceRoll !== 6);

console.log(`It took ${attempts} attempts to roll a 6.`);



