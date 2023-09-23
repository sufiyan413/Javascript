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
