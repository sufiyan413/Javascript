// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptor);

const bank = {
    name: "BOM",
    location: "osmanabad",
    IFSC: "411"
}

console.log(Object.getOwnPropertyDescriptor(bank,"name"));

Object.defineProperty(bank,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(bank,"name"));
