// Data Types in JavaScript

// Primitive Data Types
// 1. Number
let numberExample = 42;
console.log("Number:", numberExample);                // 42

// 2. String
let stringExample = "Hello, World!";
console.log("String:", stringExample);                // "Hello, World!"

// 3. Boolean
let booleanExample = true;
console.log("Boolean:", booleanExample);              // true

// 4. Null
let nullExample = null;
console.log("Null:", nullExample);                    // null

// 5. Undefined
let undefinedExample;
console.log("Undefined:", undefinedExample);          // undefined

// 6. Symbol
let symbolExample = Symbol("symbol");
console.log("Symbol:", symbolExample);                // Symbol(symbol)

// 7. BigInt
let bigIntExample = BigInt(1234567890123456789012345678901234567890n);
console.log("BigInt:", bigIntExample);                // 1234567890123456789012345678901234567890n

console.log(""); // empty line for separation

// Non-Primitive Data Types
// 1. Object
let objectExample = {
  name: "John",
  age: 30
};
console.log("Object:", objectExample);                // { name: 'John', age: 30 }

// 2. Array
let arrayExample = [1, 2, 3, 4, 5];
console.log("Array:", arrayExample);                  // [1, 2, 3, 4, 5]

// 3. Function
function functionExample() {
  return "Hello from function!";
}
console.log("Function:", functionExample());          // "Hello from function!"

// 4. Date
let dateExample = new Date();
console.log("Date:", dateExample);                    // current date and time

console.log(""); // empty line for separation

// Type Checking
console.log("Type Checking:");
console.log(typeof numberExample);                    // "number"
console.log(typeof stringExample);                    // "string"
console.log(typeof booleanExample);                   // "boolean"
console.log(typeof nullExample);                      // "object" (this is a known quirk in JS)
console.log(typeof undefinedExample);                 // "undefined"
console.log(typeof symbolExample);                    // "symbol"
console.log(typeof bigIntExample);                    // "bigint"
console.log(typeof objectExample);                    // "object"
console.log(Array.isArray(arrayExample));             // true (special method to check arrays)
console.log(typeof functionExample);                  // "function"
console.log(typeof dateExample);                      // "object"
