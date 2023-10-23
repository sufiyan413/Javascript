// constructor is a special method that is called when an instance of the class created.

function user(username,loginCount,isLoggedIn){
this.username = username,
this.loginCount = loginCount,
this.isLoggedIn = isLoggedIn  
}

 //The constructor function's this keyword refers to this newly created object.
//                               OR
// Inside a constructor function , `this` refers to the newly created object.

//The `new` keyword is used to create an instance of an object from a constructor function.
// It creates an empty object

const userOne = new user("Sufiyan",11,true)

console.log(userOne);