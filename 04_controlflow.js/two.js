// for...of loop (for arrays)
// let arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//   console.log("Array element:", element);
// }

// for...in loop (for objects)
// let obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   console.log("Object key:", key, "value:", obj[key]);
// }

// let arr1 = [1, 2, 3, 4, 5, 6];
// for (let i in arr1) {
//   console.log(arr1[i]);
// }

const myObj = {
  name: "sandeep",
  id: 1,
  address: "jagatsinghpur",
};
for (let key in myObj) {
  console.log(key, " - ", myObj[key]);
}
