// // array_methods.js

// const arr = [1, 2, 3, 4, 5, "sandeep", 7.8];
// console.log(arr);
// console.log(typeof(arr)); // Output: object

// // Array methods

// // 1. Push - Adds one or more elements to the end of an array
// arr.push(6);
// console.log(arr);

// // 2. Pop - Removes the last element from an array
// arr.pop();
// console.log(arr);

// // 3. Shift - Removes the first element from an array
// arr.shift();
// console.log(arr);

// // 4. Unshift - Adds one or more elements to the beginning of an array
// arr.unshift(0);
// console.log(arr);

// // 5. Length - Returns the length of an array
// console.log(arr.length);

// // 6. IndexOf - Returns the first index at which a given element can be found
// console.log(arr.indexOf("sandeep"));

// // 7. Includes - Checks if an array contains a specified element
// console.log(arr.includes(4));

// // 8. Slice - Returns a shallow copy of a portion of an array into a new array
// console.log(arr.slice(1, 4)); // [2, 3, 4]

// // 9. Splice - Changes the contents of an array by removing or replacing existing elements
// arr.splice(2, 1, 'new');
// console.log(arr);

// // 10. Concat - Merges two or more arrays
// const arr2 = [6, 7, 8];
// const mergedArr = arr.concat(arr2);
// console.log(mergedArr);

// // 11. Join - Joins all elements of an array into a string
// console.log(arr.join(' - '));

// // 12. Reverse - Reverses an array in place
// console.log(arr.reverse());

// // 13. Sort - Sorts the elements of an array in place and returns the array
// const numArr = [5, 2, 8, 1, 4];
// console.log(numArr.sort());

// // 14. Map - Creates a new array with the results of calling a function for every array element
// const squaredArr = numArr.map(x => x * x);
// console.log(squaredArr);

// // 15. Filter - Creates a new array with all elements that pass the test implemented by the provided function
// const filteredArr = numArr.filter(x => x > 3);
// console.log(filteredArr);

// // 16. Reduce - Applies a function against an accumulator and each element in the array to reduce it to a single value
// const sum = numArr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// // 17. ForEach - Executes a provided function once for each array element
// numArr.forEach(x => console.log(x));

// // 18. Find - Returns the value of the first element in the array that satisfies the provided testing function
// const found = numArr.find(x => x > 3);
// console.log(found);

// // 19. FindIndex - Returns the index of the first element in the array that satisfies the provided testing function
// const foundIndex = numArr.findIndex(x => x > 3);
// console.log(foundIndex);

// // 20. Every - Tests whether all elements in the array pass the test implemented by the provided function
// const allAboveThree = numArr.every(x => x > 3);
// console.log(allAboveThree);

// // 21. Some - Tests whether at least one element in the array passes the test implemented by the provided function
// const someAboveThree = numArr.some(x => x > 3);
// console.log(someAboveThree);

// // 22. Fill - Fills all the elements of an array from a start index to an end index with a static value
// const filledArr = new Array(5).fill(0);
// console.log(filledArr);

// // 23. CopyWithin - Copies part of an array to another location in the same array
// const copyWithinArr = [1, 2, 3, 4, 5];
// copyWithinArr.copyWithin(0, 3);
// console.log(copyWithinArr);

// // 24. Flat - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// const nestedArr = [1, 2, [3, 4, [5, 6]]];
// console.log(nestedArr.flat(2));

const marvel_heros = ["iron man", "spider man", "captain america"];
const dc_heros = ["batman", "superman", "flash"];
// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
// const all_heros1 = [...marvel_heros,...dc_heros]
// console.log(all_heros1);
const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flatArray = nestedArray.flat(Infinity);
// console.log(flatArray);

console.log(Array.isArray("sandeep"));
console.log(Array.from("sandeep"));
