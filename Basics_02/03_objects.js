// objects ko 2 tarike se declare krte hain 1) literal 2) constructor => singleton

// object literals

const mySymbol = Symbol('myKey');  // add symbol in object keys and access it

const JsUser = {
    name: "sufiyan", // name apne aap me string ki tarah work karega
    "Full Name": "Shaikh Sufiyan",  // cant access property using . notation.. you can use [] notation
    age: 27,
    location: "osmanabad",
    email: "sufiyan@gmail.com",
    [mySymbol]: 'Value for mySymbol',  // adding symbol as a key 
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// to access properties

// objectName.propertyName

console.log(JsUser.name);  // using dot notation // but it's not a proper way

console.log(JsUser["email"]);  // using square notation .. its a proper way


// console.log(JsUser.Full Name);  not allowed // syntax error
console.log(JsUser["Full Name"]);  

console.log(JsUser[mySymbol]);  // Accessing the property with a symbol key




// to change values of key

JsUser.email = "sss@gmail.com"

console.log(JsUser);

// {
//     name: 'sufiyan',
//     'Full Name': 'Shaikh Sufiyan',
//     age: 27,
//     location: 'osmanabad',
//     email: 'sss@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'monday', 'saturday' ],
//     [Symbol(myKey)]: 'Value for mySymbol'
//   }

// if i want lock values ...kisi ko acess nhi dena hai values change karne ka

// Object.freeze(JsUser)



//To add a function to your JsUser object
//adding new property and this property  is a greeting function
JsUser.greeting = function(){
 console.log("hello js user");
}

console.log(JsUser.greeting());
// hello js user

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
   }

console.log(JsUser.greetingTwo());
// hello js user,sufiyan
// undefined => ek excution apne aap ho jata h
