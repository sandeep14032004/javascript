// const user = {
//   username: "sandeep",
//   price: 990,
//   welcomemessage: function () {
//     console.log(`${this.username} , welcome to website`);
//   },
// };
// user.welcomemessage()
// user.username = "virat"
// user.welcomemessage()

// const chai = () =>{
//     console.log(this);
// }
// chai()

// const sum = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(sum(1,2));

// const sum = (n1,n2) => n1+n2
// console.log(sum(3,4));

const myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);

let squaredArray = myArray.map((num) => num * 2);
console.log(squaredArray);

let evenNumbers = myArray.filter((num) => num % 2 == 0);
console.log(evenNumbers);

let sum = myArray.reduce((sum, num) => sum + num, 0);
console.log(sum);
