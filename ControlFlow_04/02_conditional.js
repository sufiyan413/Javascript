// SWITCH CASE

//syntax

// switch (expression) {
//     case value1:
//         // Code to be executed if expression matches value1
//         break;
//     case value2:
//         // Code to be executed if expression matches value2
//         break;
//     // More cases can be added as needed
//     default:
//     // Code to be executed if none of the cases match expression
// }


// simple calculator 

let operator = "+";
let num1 = 10;
let num2 = 5;
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}

console.log(`Result: ${result}`);


// claculate the shipping cost based on product


let product = "clothing";
let productWeight = 4;

function calculateShippingCost(productType, weight) {
    let shippingCost;

    switch (productType) {
        case "book":
            shippingCost = 5;
            break;
        case "clothing":
            shippingCost = weight > 10 ? 10 : 5;
            break;
        case "electronics":
            shippingCost = weight > 5 ? 15 : 10;
            break;
        default:
            shippingCost = "Shipping not available for this product";
    }

    return shippingCost;
}


let cost = calculateShippingCost(product, productWeight);
console.log(`Shipping Cost: $${cost}`); 


// month che cking

const month =3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Incorrect data");
        break;
}