// forEach method called on an array and takes a function as an argument .
// the function you provide will be excuted for each element in the array.

// this method is used to iterate over the element of an array

// basic syntax

// Array.forEach( function(element,index,array){

// } )

// example 

const heros = ["spiderman","Superman","Hulk","Thor","Batman"]

// heros.forEach(function (value){
// console.log(value);
// })

// spiderman
// Superman
// Hulk
// Thor
// Batman

// callback function

heros.forEach( (item) => {
// console.log(item);
})

// spiderman
// Superman
// Hulk
// Thor
// Batman

const numbers = [1,2,3,4,5,6,7,]

numbers.forEach( (number) => {
    square = number * number
    // console.log(square);
} )

// 1
// 4
// 9
// 16
// 25
// 36
// 49

const fruits = ['banana','apple','mango','grapes']

fruits.forEach(function(fruit,index,array){
    // console.log(`Index is ${index}, Fruit is ${fruit}`);
    // console.log(`The entire array: ${array}`);

})

// Index is 0, Fruit is banana
// Index is 1, Fruit is apple
// Index is 2, Fruit is mango
// Index is 3, Fruit is grapes

// iterating over array of  object

const employeDetails = [
    {
        employeName:"Sufiyan",
        employeId:123,
        designation: "Developer"
    },
    {
        employeName:"aawez",
        employeId:122,
        designation: "Programmer"
    },
    {
        employeName:"zeeshan",
        employeId:124,
        designation: "Tester"
    },
    {
        employeName:"Faisal",
        employeId:125,
        designation: "Quality"
    }
]

employeDetails.forEach( (item) => {
console.log(`Employe Name is ${item.employeName} And EmployeId is ${item.employeId}`);
} )

// Employe Name is Sufiyan And EmployeId is 123
// Employe Name is aawez And EmployeId is 122
// Employe Name is zeeshan And EmployeId is 124
// Employe Name is Faisal And EmployeId is 125
