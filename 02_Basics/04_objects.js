//creating new object for appUser

// const appUser = new Object()     //singleton object

const  appUser = {}      //non-singleton object

// adding new properties in object

appUser.id = "123abc"
appUser.name= "sufiyan"
appUser.isLoggedIn = false

console.log(appUser);
// { id: '123abc', name: 'sufiyan', isLoggedIn: false }

// if i want all keys of object
console.log(Object.keys(appUser));
//[ 'id', 'name', 'isLoggedIn' ]   data type array helping to loop

// if i want all values of the keys
console.log(Object.values(appUser));
// [ '123abc', 'sufiyan', false ]

const regularUser ={
    email:"sss@google.come",
    fullName:{                     //nesting object
         firstName:"Sufiyan",
         lastName:"Shaikh"
    }
}

//accessing value by using dot notation

console.log(regularUser.fullName);
// { firstName: 'Sufiyan', lastName: 'Shaikh' }

console.log(regularUser.fullName.firstName);
// Sufiyan



// combining two objects

const obj1 = {fName:"sufiyan",lName:"Shaikh"}

const obj2 = {age:27,location:"osmanabad"}

const obj3 = Object.assign({},   obj1,   obj2)
//                       target

console.log(obj3);
// { fName: 'sufiyan', lName: 'Shaikh', age: 27, location: 'osmanabad' }

// using spread operator
// easy way
const obj4 = {...obj1,...obj2}
console.log(obj4);
// { fName: 'sufiyan', lName: 'Shaikh', age: 27, location: 'osmanabad' }

