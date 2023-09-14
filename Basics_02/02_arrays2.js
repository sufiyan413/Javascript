const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// suppose i am pushing dc_heros into marvel_heros

// lets see  what happens

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// output is [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//               0        1           2                      3


// the better way to merge

// concat   2 array ko combine karta hai aur ek naya array return karta hai
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// ouput is => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// easy way 

// using spread operator

// spread operato three dots ... se represent karte hai,
// The spread operator can be used to create a new array by copying the elements from an existing array.
// modifying newArray won't affect originalArray

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros);
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//flat method

// suppose mere pas ek array hai jiske andar ek aur array hai aur is array me ek aur array hai

const list = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// mujhe is sab values ko ek array me lena hai

const newList = list.flat(Infinity)
console.log(newList);
// output =>
//  [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]


// suppose jab aap kisi website se data collect kar rhe hain to wo alag format me aata hai like objects me ya string me
// lekin agar wo data array me chahiye to

console.log(Array.isArray("username"));
// false  

console.log(Array.from("username"));
// [
//     'u', 's', 'e',
//     'r', 'n', 'a',
//     'm', 'e'
//   ]

let score1 = 100
let score2 = 200
let score3 = 300

// agar in vribles ko array me convert karna ho to

// of  Returns a new array from a set of elements.

console.log(Array.of(score1,score2,score3));
// output => [ 100, 200, 300 ]
