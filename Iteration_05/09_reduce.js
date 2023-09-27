 //reduce() methode

 // reduce method iterstes over each element of an array and applies as specified function tomreduce the array to a
 // single result

// Real world example :- used to accumulate and compute final value (the sum of numbers ) from an array
// like a shopping cart total amount calculation

// array.reduce(callback, initialValue);


const cartPrice = [100,200,250,450]

// const totalPrice = cartPrice.reduce(function (accumulator,currentValue){
//     console.log(`acc: ${accumulator} and currValue :- ${currentValue}`);
//     return accumulator + currentValue
// },0 )

const totalPrice =cartPrice.reduce( (accumulate,currentValue) => accumulate + currentValue, 0 )
 
console.log(totalPrice);

const shoppinCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "data analyst course",
        price: 2999
    },
]

const priceToPay=shoppinCart.reduce( (accumulator,item) => accumulator+item.price,0)

console.log(priceToPay);