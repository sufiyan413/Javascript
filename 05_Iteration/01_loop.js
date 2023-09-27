// loops are used to perform repeted task based on condition
// a loop will continue untill the condition return falls

// 1) for loop

// when you know the exact number of time you want to repeat a block of code then you can use for loop

// basic syntax

// for (let initiallization; condition; iteration) {
//     block of code

// }

// print number from 1 to 10

for (let i = 0; i <= 10; i++) {


    // console.log(i);

}

// count numbers 0 to 5

for (let i = 0; i <= 5; i++) {
    // console.log(i);
}

// print table from 1 to 5
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {

        // console.log(`${i} * ${j} = ${i*j}`);

    }

}

// printing single line star

let stars = "";

for (let i = 0; i < 5; i++) {
    stars = stars + "* ";

}

// console.log(stars);
// * * * * *



// Print a right-angled triangle
// function trianglePattern(){
let star = '';

for (let i = 0; i < 5; i++) {

    star = star + "* ";

//     console.log(star);
}

// }

// trianglePattern(5)
// *
// * *
// * * *
// * * * *
// * * * * *

// printing inverted right angled triangle


// let numberOfRows = 5;

// for (let i = numberOfRows; i >= 1; i--) {
//     let star2 = '';
//     for (let j = 1; j <= i; j++) {
//         star2 = star2 + '* '

//     }
//     // console.log(star2);
// }
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


//pyramid pattern

let n = 5

for (let i = 1; i <= n; i++) {          // outer loop iterates through the rows of the pyramid from 1 to n.


    let row = '';
    for (let j = 1; j <= n - i; j++) {  // the first inner loop adds the required spaces before the stars in
        row = row + ' ';                 //  each row The number of spaces decreases as you go down the pyramid.
    }
    for (let k = 1; k <= i; k++) {
        row += '* ';
    }
    // console.log(row);
}


numberOfRowss = 5

for (let i = 1; i <= numberOfRowss; i++) {
    let row = ''

    for (let j = 1; j <= numberOfRowss - i; j++) {
        row = row + " "                                // row = '' + " "
    }
    for (let k = 1; k <= i; k++) {
        row = row + "* "
    }
    console.log(row);
}
    //      * 
    //     * *    
    //    * * *   
    //   * * * *  
    //  * * * * * 









