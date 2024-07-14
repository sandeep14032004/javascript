// const score = 400
// const balance = new Number(200)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
// const otherNumber = 123.2543
// console.log(otherNumber.toPrecision(3));
// const hundread = 100000000000
// console.log(hundread.toLocaleString('en-IN'));
// console.log(Number.MIN_VALUE);

// **************************************************Math************************

// Constants
// console.log(Math.PI);        // The ratio of the circumference of a circle to its diameter (approximately 3.14159)
// console.log(Math.E);         // Euler's number, the base of natural logarithms (approximately 2.718)
// console.log(Math.SQRT2);     // The square root of 2 (approximately 1.414)
// console.log(Math.SQRT1_2);   // The square root of 1/2 (approximately 0.707)
// console.log(Math.LN2);       // The natural logarithm of 2 (approximately 0.693)
// console.log(Math.LN10);      // The natural logarithm of 10 (approximately 2.302)
// console.log(Math.LOG2E);     // The base-2 logarithm of E (approximately 1.442)
// console.log(Math.LOG10E);    // The base-10 logarithm of E (approximately 0.434)

// // Methods

// // Rounding methods
// console.log(Math.round(4.7));   // Rounds to the nearest integer (5)
// console.log(Math.ceil(4.1));    // Rounds up to the nearest integer (5)
// console.log(Math.floor(4.9));   // Rounds down to the nearest integer (4)
// console.log(Math.trunc(4.9));   // Returns the integer part of a number (4)

// // Arithmetic methods
// console.log(Math.abs(-4.7));       // Returns the absolute value (4.7)
// console.log(Math.sign(-10));       // Returns the sign of a number (-1 for negative, 1 for positive, 0 for zero)
// console.log(Math.pow(2, 3));       // Returns the base to the exponent power (2^3 = 8)
// console.log(Math.sqrt(16));        // Returns the square root of a number (4)
// console.log(Math.cbrt(27));        // Returns the cube root of a number (3)
// console.log(Math.hypot(3, 4));     // Returns the square root of the sum of squares of its arguments (5)

// // Logarithmic methods
// console.log(Math.log(1));         // Returns the natural logarithm (base E) of a number (0)
// console.log(Math.log2(8));        // Returns the base-2 logarithm of a number (3)
// console.log(Math.log10(100));     // Returns the base-10 logarithm of a number (2)
// console.log(Math.exp(1));         // Returns E raised to the power of a number (approximately 2.718)

// // Trigonometric methods
// console.log(Math.sin(Math.PI / 2));    // Returns the sine of an angle (1)
// console.log(Math.cos(0));              // Returns the cosine of an angle (1)
// console.log(Math.tan(Math.PI / 4));    // Returns the tangent of an angle (1)
// console.log(Math.asin(1));             // Returns the arcsine of a number (PI/2)
// console.log(Math.acos(1));             // Returns the arccosine of a number (0)
// console.log(Math.atan(1));             // Returns the arctangent of a number (PI/4)
// console.log(Math.atan2(1, 1));         // Returns the arctangent of the quotient of its arguments (PI/4)

// // Min/Max methods
// console.log(Math.min(1, 2, 3));        // Returns the smallest of the given numbers (1)
// console.log(Math.max(1, 2, 3));        // Returns the largest of the given numbers (3)

// // Random method
// console.log(Math.random());            // Returns a random number between 0 (inclusive) and 1 (exclusive)
// Math.random always gives random number between 0 and 1
const min = 10
const max = 20
rand = Math.floor(Math.random()*(max-min+1))+min
console.log(rand);