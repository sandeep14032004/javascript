// scopes.js

// Global Scope
// Variables declared outside any function or block have global scope.
// They can be accessed from anywhere in the code.
let globalVar = "I am global";

function displayGlobalVar() {
  console.log(globalVar); // Accessible
}

displayGlobalVar();
console.log(globalVar); // Accessible

// Function Scope
// Variables declared within a function are only accessible within that function.
// They are not accessible outside the function.
function myFunction() {
  let functionVar = "I am in a function";
  console.log(functionVar); // Accessible
}

myFunction();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Block Scope
// Variables declared with let and const within a block (e.g., inside an if statement or a loop)
// have block scope. They are only accessible within that block.
{
  let blockVar = "I am in a block";
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

if (true) {
  const blockConst = "I am in an if block";
  console.log(blockConst); // Accessible
}
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

// Lexical Scope
// Lexical scope (also known as static scope) means that the scope of a variable is determined
// by its position within the source code, and nested functions have access to variables
// declared in their outer scope.
function outerFunction() {
  let outerVar = "I am outside";

  function innerFunction() {
    console.log(outerVar); // Accessible
  }

  innerFunction();
}

outerFunction();

// Module Scope
// Variables declared within a module (using ES6 module syntax) are scoped to that module.
// They are not accessible outside the module unless explicitly exported.
// Note: This requires module files and can't be demonstrated directly in this script.

// In module1.js
// export const moduleVar = 'I am in a module';

// In main.js
// import { moduleVar } from './module1.js';
// console.log(moduleVar); // Accessible

// Example to show various scopes
function showScopes() {
  // Function Scope
  let functionScopedVar = "I am function scoped";

  if (true) {
    // Block Scope
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // Accessible
  }

  // console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

  function innerFunction() {
    // Lexical Scope
    console.log(functionScopedVar); // Accessible
  }

  innerFunction();
}

showScopes();
console.log(globalVar); // Accessible
// console.log(functionScopedVar); // Uncaught ReferenceError: functionScopedVar is not defined

const addTwo = (num) => {
  console.log(num + 1);
};

addTwo(5);
