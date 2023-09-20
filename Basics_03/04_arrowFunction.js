const user = {
    username:"Sufiyan",   //changable
    price:999,
    welcomemessage:function () {
        console.log(`${this.username} , welcome to website`);  //this refers current contax
        console.log(this);
    }
   
}

user.welcomemessage()
// Sufiyan , welcome to website
user.username="aawez"  // contax change
user.welcomemessage()   
// aawez , welcome to website     //this keyword helps to change contax into current contex


//******************************************************************************************/

// // arrow function syntax

// // const addTwo = (num1,num2) => {
// //     return num1 + num2
// // }

// // console.log(addTwo(3,4));

// // easy way // implicit return
// const addTwo = (num1,num2) => num1 + num2

// console.log(addTwo(3,5));
     
// returning object
//If you want to return an object from an arrow function, you'll need to wrap the object in parentheses
const createPerson = (name, age) => ({ name, age });
const person = createPerson("Sufi", 30);
console.log(person); // Output: { name: 'Sufi', age: 30 } 
  
