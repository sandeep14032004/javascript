// for (let i = 0; i < 11; i++) {
//     console.log(i);

// }
// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`outer loop value : ${i}`);
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);

// }

// for_loop_examples.js

// Basic for loop
console.log("Basic for loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For loop with multiple variables
console.log("\nFor loop with multiple variables:");
for (let i = 0, j = 5; i <= 5; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

// For loop with different initialization
console.log("\nFor loop with different initialization:");
let k = 0;
for (; k < 5; k++) {
  console.log(k);
}

// For loop without initialization
console.log("\nFor loop without initialization:");
let m = 0;
for (; m < 5; m++) {
  console.log(m);
}

// For loop without condition
console.log("\nFor loop without condition:");
for (let n = 0; ; n++) {
  console.log(n);
  if (n >= 4) break;
}

// For loop without increment/decrement
console.log("\nFor loop without increment/decrement:");
for (let p = 0; p < 5; ) {
  console.log(p);
  p++;
}

// Infinite for loop (uncomment with caution)
// console.log("\nInfinite for loop:");
// for (;;) {
//     console.log("This will run forever");
// }

// Looping through an array
console.log("\nLooping through an array:");
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Looping through a string
console.log("\nLooping through a string:");
let str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// Using for...of loop (for arrays and iterable objects)
console.log("\nUsing for...of loop:");
for (let value of arr) {
  console.log(value);
}

// Using for...of loop with strings
console.log("\nUsing for...of loop with strings:");
for (let char of str) {
  console.log(char);
}

// Using for...in loop (for objects)
console.log("\nUsing for...in loop:");
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(`key: ${key}, value: ${obj[key]}`);
}

// Nested for loops
console.log("\nNested for loops:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// Using break in for loop
console.log("\nUsing break in for loop:");
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Using continue in for loop
console.log("\nUsing continue in for loop:");
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Labels in for loops
console.log("\nLabels in for loops:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`i: ${i}, j: ${j}`);
  }
}
