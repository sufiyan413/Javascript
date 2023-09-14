
// Date

let myDate = new Date()

console.log(myDate);   // output is not readable

// now convert date into string

console.log(myDate.toString());
// output is =>  Thu Sep 14 2023 18:09:35 GMT+0530 (India Standard Time)


//there are various methods available 

console.log(myDate.toDateString());
// output => Thu Sep 14 2023

console.log(myDate.toISOString());
// output => 2023-09-14T12:42:56.178Z

console.log(myDate.toLocaleString());
// output => 9/14/2023, 6:18:55 PM

console.log(typeof myDate);   // date is an object in js


// agar mujhe koi specific date declare karna hai

let myCreatedDate =  new Date (2023,8,14)
console.log(myCreatedDate);
// ouput => 2023-01-14T18:30:00.000Z

console.log(myCreatedDate.toLocaleString());
// ouput => 9/14/2023, 12:00:00 AM

// ********************* time stamp *********************

// exact time stamp ka value check karna ho to likes poles me sab se pahele kis ne ans diya ya quiz me 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// output is in milliseconds 1694696381505

console.log(myCreatedDate.getTime());

// agar isko seconds me convert karna ho to

console.log(Date.now()/1000);
// but it is in decimal value

console.log(Math.floor(Date.now()/1000));


