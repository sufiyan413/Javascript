//  It's a useful array method when you want to filter out elements based on a certain criterion and create 
//a new array with only the elements that meet that criterion

// syntax 

// const newArray = originalArray.filter(function(){
//     return
// })

// filter even numbers from an array

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const evenNumbers = numbers.filter( (number) => {     // in scope return keyword needed
// return number % 2 === 0
// } )

// console.log(evenNumbers);
// //[ 2, 4, 6, 8, 10 ]

const evenNumbers = numbers.filter( (number) => number % 2===0)   //explicit return
// console.log(evenNumbers);
// [ 2, 4, 6, 8, 10 ]

// array of object

const books = [
    {
        title: "book one",
        genre:"History", 
        publish:"2001"
    },
    {
        title: "book two",
        genre:"Math",
        publish:"2003"
    },
    {
        title: "book three",
        genre:"Physics",
        publish:"2005"
    },
    {
        title: "book four",
        genre:"History",
        publish:"2010"
    },
    {
        title: "book five",
        genre:"Biology",
        publish:"2011"
    },
    {
        title: "book six",
        genre:"Math",
        publish:"2023"
    },
    {
        title: "book seven",
        genre:"Chemestry",
        publish:"1990"
    },
    {
        title: "book eight",
        genre:"Math",
        publish:"2023"
    },
    {
        title: "book nine",
        genre:"Biology",
        publish:"1990"
    },
    {
        title: "book ten",
        genre:"Physics",
        publish:"2005"
    },  
]

let userBooks = books.filter( (book) => book.genre === "History" )
// [
//     { title: 'book one', genre: 'History', publish: '2001' },
//     { title: 'book four', genre: 'History', publish: '2010' }
//   ]

userBooks = books.filter( (book) => book.publish <= 2000 )
// [
//     { title: 'book seven', genre: 'Chemestry', publish: '1990' },
//     { title: 'book nine', genre: 'Biology', publish: '1990' } 
//   ]
userBooks = books.filter( (book) => book.genre === "Math" && book.publish >= 2000 )
// [
//     { title: 'book two', genre: 'Math', publish: '2003' },
//     { title: 'book six', genre: 'Math', publish: '2023' },
//     { title: 'book eight', genre: 'Math', publish: '2023' }
//   ]
console.log(userBooks); 

