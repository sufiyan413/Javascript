// // nmuber data type is a numeric value

// const score = 400        //way to declare number ...when you give number value js automatic detects it is a number 
// console.log(score);

// // another way to declare numbers

// const balance = new Number (1000)   // speciallly cast its a number
// console.log(balance);

// // agar number ko string me convert karna ho to

// console.log(balance.toString());


// console.log(balance.toFixed(2)); // precision value   1000.00


// ********************************* MATHS ******************************************

console.log(Math.abs(-4));  //  Negative value positive me convert ho jati h
console.log(Math.round(6.3)); // agar value ko round off karna ho to
console.log(Math.ceil(6.3));  // top value choose hogi
console.log(Math.floor(6.3)); // bottom side value choose hogi
console.log(Math.sqrt(16));   // square root maalum karna ho to

// agar array me mujhe lowest or highest value malum karna ho to

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

// sab se zyada use wali liaberary

// math.random

console.log(Math.random()); // math.random ki value humesha 0 to 1 ke beech me aaegi

console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

// agar mujhe value particular range me chahiye ..jaise ek dice game ke liye

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min )


