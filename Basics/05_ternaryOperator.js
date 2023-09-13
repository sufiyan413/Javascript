// ternar operator provides a way to make decision in one line
// condition ? expressionIfTrue : expressionIfFalse;


let age = 15;

let mesaage = age>18 ? "you are an adult" : "you are minor"

// console.log(mesaage)

message = age>=18 ? "you can drive":"you cannot drive"

// console.log(message)

let isRaining = false
let activity = isRaining ? 'stay in home':'go for walk'
// console.log(activity);


// Nesting Ternary Operators

let temperature = 45;

let popUp = (temperature>35) ? 'Hot' :(temperature>23) ? 'normal' : (temperature>15) ? 'normal':'cool'

console.log(popUp);

