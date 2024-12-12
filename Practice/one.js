// function squareNumbers(numbers) {
//   return numbers.map((nums) => nums ** 2);
// }

// const numbers = [1, 2, 3, 4];
// console.log(squareNumbers(numbers));
// // Output: [1, 4, 9, 16]

// function filterEvenNumbers(numbers) {
//   return numbers.filter((numbers) => numbers % 2 == 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(numbers));
// // Output: [2, 4, 6]

// function calculateTotal(cart) {
//   return cart.reduce((sum, nums) => sum + nums.price, 0);
// }

// const cart = [
//   { name: "Item 1", price: 100 },
//   { name: "Item 2", price: 200 },
//   { name: "Item 3", price: 300 },
// ];
// // console.log(calculateTotal(cart));
// // Output: 600

// arr = [1, 1, 3, , 4, 5, 6, 7, 6];
// arr.forEach((num) => {
//   console.log(num);
// });

// const items = [
//   { name: "Laptop", brand: "Dell", price: 800 },
//   { name: "Phone", brand: "Apple", price: 1200 },
//   { name: "Headphones", brand: "Sony", price: 150 },
//   { name: "Monitor", brand: "Samsung", price: 300 },
// ];

// items.forEach((key) => {
//   console.log(key.name, " : ", key.brand, " : ", key.price);
// });

// let arr = [1, 2, 3, , 4, 5, 6, 7, 8];
// let arr1 = arr.filter((num) => num % 2 == 0);
// console.log(arr1);

// let filteredArray = items.filter((bk) => bk.price > 300 && bk.brand == "Apple");
// console.log(filteredArray);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let SumofArr = arr.reduce((sum, num) => {
  console.log(`acc : ${sum} and current value : ${num}`);

  return sum + num;
}, 0);
console.log(SumofArr);
