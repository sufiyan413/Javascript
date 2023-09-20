function calculateCartPrice(...number1){
return number1
}

// console.log(calculateCartPrice(2));  // 2

// agar cART me aur values add ho rhi hai to

console.log(calculateCartPrice(200,400,600));   // inoutput only one value count 200..to avoid this use spreade operator
// [ 200, 400, 600 ]

const user = {
    userName:"Sufiyan",
    price:199
}

// passing object into function

function handleObject(anyobject){
console.log(`user name is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user)  // user name is Sufiyan and price is 199


// passing array into function

const myArray = [200,400,600]

function returnSecondValue ( getArray){
   return getArray[2]
}

console.log(returnSecondValue(myArray)); // 600

//***********************************************************************


// Function with Default Parameters (ES6):

function greetingWithDefault (name="Guest"){
    console.log(`hello ${name}`);
}

greetingWithDefault();  //hello Guest
greetingWithDefault("Sufiyan"); 