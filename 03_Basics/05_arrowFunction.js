//how the this keyword behaves differently in normal functions and arrow functions

// i have a normal function

// function sayHello() {
//     console.log(`Hello, ${this.name}!`);
//   }
  
//   const person = {
//     name: 'Sufiyan',
//     greet: sayHello
//   };
  
//   person.greet(); // Outputs: "Hello, Sufiyan!"
  

  // Note:- in normal function .. 'this' inside sayhello  refers to the person object because it was
  // called using person.greet()

  //*********************************************************************************************** 

  const sayHello = () => {
    console.log(`Hello, ${this.name}!`);
  };
  
  const person = {
    name: 'Sufiyan',
    greet: sayHello
  };
  
  person.greet();

  // Hello, undefined!

  // Here, this inside the arrow function still tries to refer to the person object, but it doesn't have its own this. 
  //Instead,