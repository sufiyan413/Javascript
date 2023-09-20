// IMMEDIATE INVOKED FUNCTION EXCUTION (IIFE)

(function message (){                            // named iife
    console.log("Hello developers");
})();      
// message()

// (function() {} )() wrap in paranthesis 

( (name) => {                                 // un-named iife
    console.log(`my name is ${name}`);
})("sufiyan")