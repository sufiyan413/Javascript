let score = 33;

// console.log(typeof score);


let newScore = "33"  //value is in string

// mujhe isko number me convert karna hai

let valueInNumber = Number(newScore)
// console.log(typeof valueInNumber);

let value = true;  // value is in boolean
let valueInNum = Number(value)
// console.log(valueInNum)


//if want to convert number value into boolean

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 


//  *********************************************  SOME OPERATIONS  *********************************************

// 1)

let Value = 3
let negvalue = -Value
// console.log(negvalue);  //output is -3

// 2)

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2

// console.log(str3);  output is "hello world"

// 3)

console.log("1"+2);
console.log(1+"2"); 

// output is 12
 //When you use + with a string and a number, JavaScript converts the number to a string and concatenates them.

console.log("1"+2+2);

// output is 122
// "1" + 2 results in the string "12" because it's concatenating the string "1" with the number 2.
// Then, "12" + 2 results in the string "122" because it's concatenating the string "12" with the number 2.

console.log(1+2+"2");

// output is 32
//  when you use the + operator with both numbers and strings, it performs left-to-right evaluation.
// So, in the expression 1 + 2 + "2":
// 1 + 2 is evaluated first as a numerical addition, resulting in 3 (a number).
// Then, 3 + "2" is evaluated. Since one of the operands is a string, 
//JavaScript converts the number 3 to a string and performs string concatenation. The result will be the string "32".