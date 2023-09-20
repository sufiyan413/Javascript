// let a = 10                       // functional scope,block scope,re-assigned,
// const b = 20                     // functional scope,block scope,
// var c = 30                      // global scope,functional scope,re-assigned,redeclare

// console.log(a);
// console.log(b);
// console.log(c);

// 10
// 20
// 30

// Scoping in JavaScript refers to the rules that determine where variables and functions are accessible 
// or visible within your code.

if (true){

let a = 10
const b = 20
var c = 30

console.log("INNER",a);
console.log("INNER",c);
}

// console.log(a);    a is not defined
// console.log(b);        b is not defined
console.log(c);            // 30

// nested scope

function one() {
    const username = "Sufiyan"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  not access, because out of scope

    two()
}

one()