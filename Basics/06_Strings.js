const name = "sufiyan"
const repoCount = 50

// agar mujhe in dono ko concacinate karna hai to

// console.log(name + repoCount)  // syntax thoda sahi nhi lagta aise

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation


// string declare karne ka ek aur tarika hai

const gameName = new String("pubg")
// console.log(gameName)

console.log(gameName[0]); // key value pair access <---

//prototype access karna ho to

console.log(gameName.length);  // string ki length check kar sakte hain

console.log(gameName.toUpperCase());  // string ko agar upper case me convert karna ho to

console.log(gameName.charAt(2))  // kis index par konsa charachter hai ye check karna ho to

console.log(gameName.indexOf("g"));  // charachter ka index number maalum karna ho to



const newStringOne = "  Sufiyan   "  // is string me space bahot hai
console.log(newStringOne)


// agar mujhe ye space remove karna ho to

console.log(newStringOne.trim());

 

const url = "https://cdn-icons-png.flaticon.com/512/87/87390.png"

// agar url me se kisi symbol ya text ko dusre symbol se replace karna ho to

console.log(url.replace(".","-"))

console.log(url.includes("png")); //string me characters hain ya nhi check karna ho to

// agar string ko ek array me convert karna ho to

console.log(url.split('-','3'));

