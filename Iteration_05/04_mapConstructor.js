// In-built data structure
// allows you to store key-value pairs
// keys can be any data type
// no duplicate values
// unique values

// creating an empty map

// const myMap = new Map()

// console.log(myMap);

// // Map(0) {}

// OR

// const myMap = new Map([
//     ['key1','value1'],
//     ['key2','value2'],

// ])

// console.log(myMap);

// Map(2) { 'key1' => 'value1', 'key2' => 'value2' }


// creating map

const map = new Map()

// set key-value pairs using set method

map.set('Name','Sufiyan')
map.set('Age',27)
map.set('Course','Frontend Developer')
map.set('Email','sss@google.com')

// console.log(map);

// *************************************************************


// Map(4) {
//     'Name' => 'Sufiyan',
//     'Age' => 27,
//     'Course' => 'Frontend Developer',
//     'Email' => 'sss@google.com'
//   }

// *************************************************************

// checking if propety exist in map or not

// console.log(map.has('Name'));    //true
// console.log(map.has('Contact'));    //false

// *************************************************************

// to retrieve values

console.log(map.get('Name'));   // Sufiyan
console.log(map.get('Age'));    // 27
console.log(map.get('Course')); // Frontend Developer

// *************************************************************

//You can get the number of key-value pairs in a Map using the size property

console.log(map.size);  //4

// *************************************************************

// if you want to delete key-value entry from map

// map.delete('keyName')

// *************************************************************


// if you want to remove all entries from a Map 

// map.clear()


// *************************************************************

// To iterate over map

//for of loop

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`);
}


// Name :- Sufiyan
// Age :- 27
// Course :- Frontend Developer
// Email :- sss@google.com

// *************************************************************
