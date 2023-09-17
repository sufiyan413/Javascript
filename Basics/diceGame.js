// dice game whose value in between 1 to 6

const minValue = 1
const maxValue = 6

// console.log(Math.random());
// output is 0.8420424650744018
// but i want value greater than 0


// console.log(Math.random()*10);
// output is 5.050242164269417 in decimal numbers
// but i need round figure value

// console.log(Math.floor(Math.random()*10));
// the output is in between 0 to 1
// i need exact value from 1 to 6

console.log(Math.floor(Math.random()*(maxValue-minValue+1)+minValue));
