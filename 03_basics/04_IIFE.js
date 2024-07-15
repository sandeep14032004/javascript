// (function sum () {
//     console.log("good morning")
// })();
// ((name) => {
//     console.log(`${name} , "good morning using arrow function"`);
// })("sandeep");
// iife_sum.js

// IIFE using a regular function
(function(a, b) {
    let sum = a + b;
    console.log("Sum using regular function:", sum);
})(5, 3);

// IIFE using an arrow function
((a, b) => {
    let sum = a + b;
    console.log("Sum using arrow function:", sum);
})(5, 3);


// iife_return.js

// IIFE using a regular function
let sumRegular = (function(a, b) {
    let sum = a + b;
    return sum;
})(5, 3);

console.log("Sum using regular function:", sumRegular);

// IIFE using an arrow function
let sumArrow = ((a, b) => {
    let sum = a + b;
    return sum;
})(5, 3);

console.log("Sum using arrow function:", sumArrow);
