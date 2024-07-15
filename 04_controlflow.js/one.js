
// Conditional Statements

// if statement
let num = 10;
if (num > 5) {
    console.log("Number is greater than 5");
}

// if-else statement
if (num < 5) {
    console.log("Number is less than 5");
} else {
    console.log("Number is not less than 5");
}

// if-else if-else statement
if (num < 5) {
    console.log("Number is less than 5");
} else if (num > 5) {
    console.log("Number is greater than 5");
} else {
    console.log("Number is equal to 5");
}

// switch statement
let color = "red";
switch (color) {
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    default:
        console.log("Color is not red or blue");
}

// Loops

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log("While loop iteration:", i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log("Do-while loop iteration:", j);
    j++;
} while (j < 5);

// for...of loop (for arrays)
let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
    console.log("Array element:", element);
}

// for...in loop (for objects)
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log("Object key:", key, "value:", obj[key]);
}

// Functions

// Function declaration
function add(a, b) {
    return a + b;
}
console.log("Sum using function declaration:", add(5, 3));

// Function expression
const subtract = function(a, b) {
    return a - b;
}
console.log("Difference using function expression:", subtract(5, 3));

// Arrow function
const multiply = (a, b) => {
    return a * b;
}
console.log("Product using arrow function:", multiply(5, 3));

// IIFE (Immediately Invoked Function Expression)
let division = (function(a, b) {
    return a / b;
})(10, 2);
console.log("Quotient using IIFE:", division);

// IIFE using arrow function
let modulus = ((a, b) => {
    return a % b;
})(10, 3);
console.log("Remainder using arrow function IIFE:", modulus);

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote);

// Break and Continue

// Break
for (let k = 0; k < 10; k++) {
    if (k === 5) {
        break;
    }
    console.log("Break loop iteration:", k);
}

// Continue
for (let l = 0; l < 10; l++) {
    if (l === 5) {
        continue;
    }
    console.log("Continue loop iteration:", l);
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Falsy values in JavaScript
console.log("Falsy Values:");
console.log(Boolean(false));       // false
console.log(Boolean(0));           // false
console.log(Boolean(-0));          // false
console.log(Boolean(0n));          // false
console.log(Boolean(""));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));         // false

// Everything else is considered truthy
console.log("\nTruthy Values:");
console.log(Boolean(true));        // true
console.log(Boolean({}));          // true (empty object)
console.log(Boolean([]));          // true (empty array)
console.log(Boolean(42));          // true (any number other than 0)
console.log(Boolean("0"));         // true (non-empty string)
console.log(Boolean("false"));     // true (non-empty string)
console.log(Boolean(new Date()));  // true (Date object)
console.log(Boolean(-42));         // true (negative number)
console.log(Boolean(3.14));        // true (positive number with decimals)
console.log(Boolean(Infinity));    // true (positive infinity)
console.log(Boolean(-Infinity));   // true (negative infinity)
console.log(Boolean(function() {})); // true (function)

// Demonstrating truthy and falsy values in conditionals

let testValue = "";

if (testValue) {
    console.log("\nThis is truthy");
} else {
    console.log("\nThis is falsy");
}

testValue = "hello";

if (testValue) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

let val1;
// val1 = 4 ?? 10
val1 = null ?? 10
console.log(val1);
