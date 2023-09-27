// operators are special symbols or keywords .. usedto perform operations

// 1) aritmetic operator


// let x = 5;
// let y = 3;
// console.table([x+y,x-y,x*y,x/y,x%y])

// 2) Assign operators

// let number = 5; assiignment operator
// number += 1;    add and asign
// number -= 2;    subtract and asign
// number *= 5;    multiply and asign
// number /= 5;    division and asign
// number %= 2;    modulus and asign

// 3) comparison operator

// i)  equal to (==)        return true if both operands value are equal
// ii) not equal to (!=)    return true if both operands value isnot equal

let x = 5;
let y = "5";

// console.log(x==y)
// console.log(x!=y)

// iii) strict equal to (===)  return true if both operands value and data type are same
// iv)  strict not equal (!==) return true if both operands value and data type not equal

// console.log(x===y);
// console.log(x!==y);

// v) greater than (>) return true if the value of left operand is greater than the right operand
// vi) less than (<)   return true if the value of left operand is less than the right operand

let num1 = 20
let num2 = 10

// console.log(num1>num2);
// console.log(num1<num2);

// 4) logical operator

// i) logical and (&&)  return true if both operand are true

let number1 = 5
let number2 = 3

console.log((number1>number2)&&(number2<number1))

// ii) logical OR (||) return true if one the operand is true ..if both operands are false then return flase

console.log((number1<number2)||(number2>number1))

// iii) logical not (!) return true if operands are not equal

console.log(!(number1<number2))