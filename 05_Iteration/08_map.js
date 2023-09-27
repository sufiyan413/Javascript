//  map method
// powerfull tool for working with arrays
// create a new array by applying provided function
// iterate over each element in the original array one by one from left to right


// basic syntax 

// const newArray = array.map(function(currentValue,index,array))

const numbers = [1,2,3,4,5,6,7]

// i want to double number on this array

const doubleNUmber = numbers.map( (number) => number * 2)



// console.log(doubleNUmber);

// [ 2,  4,  6, 8, 10, 12, 14 ]

//Capitalizing Strings

const words= ["hello", "world", "javascript"]

const capitalWords = words.map( (word) => word.toUpperCase() )

// console.log(capitalWords);

// [ 'HELLO', 'WORLD', 'JAVASCRIPT' ]


//Extracting Object Properties

const users = [
    { name: "Sufiyan", age: 27 },
    { name: "Awez", age: 26 },
    { name: "Zeeshan", age: 24 },
  ];

  //  extract the name property from each user object in the users array.

  const userName = users.map( (user) => user.name )

//   console.log(userName);  //[ 'Sufiyan', 'Awez', 'Zeeshan' ]


//Calculating Square Roots

const newNumbers = [4,9,16,25,36]

//calculate the square root of each number in the numbers array.

const squareRoot = newNumbers.map((number) => Math.sqrt(number))

// console.log(squareRoot);    //[ 2, 3, 4, 5, 6 ]


//Formatting Data

const data = [
    { firstName: "SUfiyan", lastName: "Shaikh" },
    { firstName: "Mujahid", lastName: "Pathan" },
  ];

  // to format the data by combining the firstName and lastName properties of each object in the data array.

  const formatteData = data.map((person) => `${person.firstName} ${person.lastName}`)

  console.log(formatteData);

  //[ 'SUfiyan Shaikh', 'Mujahid Pathan' ] 