// arrays
// array ek object hai
// array ko square bracket me likhte hain
// array is used to store a collection of multiple items in a single variable name
// arrays are resizable

const myArray = [0,1,2,3,4,5]

const heros = new Array ("shaktiman","spiderman","superman","badman",)

console.log(myArray);
// [ 0, 1, 2, 3, 4, 5 ]

console.log(heros);
// [ 'shaktiman', 'spiderman', 'superman', 'badman' ]

// using index number we can access the value
// indexing start from 0 in arrays

console.log(heros[2]);
// superman


// array me humko ek property milti hai jis se hum array ki legnth maalum kar sakte hain

console.log(heros.length);
// 4

// **************************** Array Methos**********************************

// 1) Push    we can add new value  into an array using push method

heros.push("iron man")
console.log(heros);
// [ 'shaktiman', 'spiderman', 'superman', 'badman', 'iron man' ]


// 2) Pop  removes the last value ofan array

heros.pop()
console.log(heros);
// [ 'shaktiman', 'spiderman', 'superman', 'badman' ]


// 3) unshft   add new value in starting of an array

heros.unshift("iron man")
console.log(heros);
// [ 'iron man', 'shaktiman', 'spiderman', 'superman', 'badman' ]


// 4) shift  remove the first value of an array

heros.shift()
console.log(heros);
// [ 'shaktiman', 'spiderman', 'superman', 'badman' ]


// quesitoining methods in array

// 1) includes   array value exist karti hai ya nhi ye pata karna ho to


console.log(heros.includes("shaktiman"));
// true         yes shaktiman value exist in an array


// 2) indexof  array me jo value hai uska index number maalum karna ho to

console.log(heros.indexOf("shaktiman"));
// 0


// join   agar array ko string me convert karna ho to

const newHeros = heros.join()
console.log(newHeros);
// shaktiman,spiderman,superman,badman

console.log(typeof newHeros);
// string


// slice , splice


console.log("A",heros);
// A [ 'shaktiman', 'spiderman', 'superman', 'badman' ]   total 4 vALUES including


const myNewHeros = heros.slice(1,3)    //  returns a copy of a section of an array

console.log(myNewHeros);    
//  [ 'spiderman', 'superman' ]  

console.log("B",heros);
// B [ 'shaktiman', 'spiderman', 'superman', 'badman' ]  original array remains the same 


const otherHeros = heros.splice(1,3)
console.log(otherHeros);
// [ 'spiderman', 'superman', 'badman' ]

console.log("C",heros);    // the splice method manuplate the original array
//B [ 'shaktiman' ]       // see in original array the values are removed

//_________________________________________________________________________________________________________________

const myOriginalArray = ["A","B","C","D","E"];
console.log(myOriginalArray);

const myNewArray = myOriginalArray.slice(1,4)
console.log(myNewArray);
// output :=> copy of a section [ 'B', 'C', 'D' ] , without manupulating the orgignal array

//__________________________________________________________________________________________________________________

const alphabets = ["A","B","C","D","E"];
alphabets.splice(2,2)
console.log(alphabets);

// i can add new elements

const mixAlphabets = ["A","B","C","D","E"];
mixAlphabets.splice(2,2,1,2)
console.log(mixAlphabets);

// _________________________________________________________________________________________________________________