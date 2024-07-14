// function saymyName(){
//     console.log("sandeep");
//     console.log("sandeep");
// }
// saymyName()
// function sum(n1 , n2) {//parameters
//     console.log(n1+n2);
// }
// sum(3,4)//arguments
// function sum(n1 , n2) {//parameters
//     return(n1+n2);
// }
// result = sum(3,4)//arguments
// console.log(result);

// function greet(name, age) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// }

// greet('Alice', 25);  // Hello, my name is Alice and I am 25 years old.
// function calculateCartPrice(...price){
//     return price
// }
// result = calculateCartPrice(100,200,300)
// console.log(result);
function calculateCartPrice(n1,n2,...price){
    return price
}
result = calculateCartPrice(100,200,300)
console.log(result);