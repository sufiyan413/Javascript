// sort

// sort the elements of an array as string and arrange themin descending order (small to large)

const numbers = [8,4,7,2,1,3]

numbers.sort((a,b) => a-b)
// a and b are placeholders for two numbers being compared.
// a - b part of the comparison function tells JavaScript to subtract b from a. If the result is negative,
//it means a should come before b. If it's positive, it means a should come after b. If it's zero, they are 
// considered equal.
console.log(numbers);// [ 1, 2, 3, 4, 7, 8 ]

// list of people's names

const names = ['John', 'Alice', 'Bob', 'Eve', 'Charlie'];

names.sort()

console.log(names); //[ 'Alice', 'Bob', 'Charlie', 'Eve', 'John' ]

// list of multiple products

const products = [
    { name: 'Laptop', price: 800 }, //product1
    { name: 'Phone', price: 500 },  //product2
    { name: 'Tablet', price: 300 }, //product3
    { name: 'Monitor', price: 200 }, //product4
    { name: 'Keyboard', price: 50 }  //product5
  ];

  // i want to sort them by their prices in ascending order

  products.sort( (product1,product2) => product1.price - product2.price )

  console.log(products);
//   [
//     { name: 'Keyboard', price: 50 },
//     { name: 'Monitor', price: 200 },
//     { name: 'Tablet', price: 300 },
//     { name: 'Phone', price: 500 },
//     { name: 'Laptop', price: 800 }
//   ]
  