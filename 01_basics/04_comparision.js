// console.log(2>1);
// console.log(1 === 1);        // true
// console.log(1 ==='1');      // false
// console.log(1 !== 1);        // false
// console.log(1 !== '1');      // true
// Comparison Methods in JavaScript

// Equality Operators
console.log("Equality Operators:");
console.log(1 === 1);        // true
console.log(1 === '1');      // false
console.log(1 !== 1);        // false
console.log(1 !== '1');      // true
console.log(1 == 1);         // true
console.log(1 == '1');       // true
console.log(1 != 1);         // false
console.log(1 != '1');       // false
console.log(""); // empty line for separation

// Relational Operators
console.log("Relational Operators:");
console.log(5 > 3);          // true
console.log(3 > 5);          // false
console.log(5 >= 3);         // true
console.log(3 >= 3);         // true
console.log(3 < 5);          // true
console.log(5 < 3);          // false
console.log(3 <= 5);         // true
console.log(5 <= 3);         // false
console.log(""); // empty line for separation

// Logical Operators
console.log("Logical Operators:");
console.log(true && true);   // true
console.log(true && false);  // false
console.log(true || false);  // true
console.log(false || false); // false
console.log(!true);          // false
console.log(!false);         // true
console.log(""); // empty line for separation

// Special Operators
console.log("Special Operators:");
let foo = null ?? 'default';
console.log(foo);            // 'default'