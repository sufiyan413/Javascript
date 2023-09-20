// package of code , reusable

function sayMyName() {             // body
    console.log("Sufiyan");         // block of code
}                                  // body

// sayMyName  // reference

sayMyName()  // calling function
// output => Sufiyan

// ***************************************************************************************************************

// parameters and arguments

function addTwoNumbers(number1, number2) {           // paasing parameters in paranthesis
    console.log(number1 + number2);
}

// addTwoNumbers() // NaN not a number because arguments not passed

// paasing arguments

// addTwoNumbers(2,5)  // output is 7

// ***********************************************************************************************************

// function addTwoNumbers(number1,number2){           
//     console.log(number1+number2);
//     }

//     const result = addTwoNumbers(3,6)
//     console.log(result);
// //      9
// // undefined

// reurn

function addTwoNumbers(number1, number2) {
    //  let result = number1 + number2
    //  return result
    return number1 + number2
}

const result = addTwoNumbers(3, 6)
console.log(result);  // 9

// ***************************************************************************************

function loginUserMessage(username) {
    if (!username) {                                           // username === undefined
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("sufiyan")
// function excute hua value written bhi hui lekin humne print karne bola hi nahi 

// printing

// console.log(loginUserMessage());   // agar value pass nahi karenge undefined aaega

console.log(loginUserMessage("Sufiyan")); 
// Sufiyan just logged in
