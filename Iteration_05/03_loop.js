// for....of loop

// used tp iterate the values of an iterable objects , such as arrays, strings, map, set and more 

// basic syntax

// for (const iterator of object) {
    
// }

//Iterating over Arrays:-

const numberList = [1,2,3,4,5,6]

for (const values of numberList) {
    console.log(values);
}


const greetings = "Hello World"

for (const greet of greetings) {
    console.log(greet);
    
}


// 

const userDetails = new Map()

map.set('Name','Sufiyan')
map.set('Age',27)
map.set('Course','Frontend Developer')
map.set('Email','sss@google.com')

for (const [key,value] of userDetails) {
    console.log(`${key} :- ${value}`);
}

// Name :- Sufiyan
// Age :- 27
// Course :- Frontend Developer
// Email :- sss@google.com