// Example data: an array and an object
const numbers = [1, 2, 3, 4, 5];
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using for...in loop to iterate over object properties
console.log("Using for...in loop for object properties:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log();

// Using for...in loop to iterate over array indices
console.log("Using for...in loop for array indices:");
for (let index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}
console.log();

// Using for...of loop to iterate over array elements
console.log("Using for...of loop for array elements:");
for (let num of numbers) {
    console.log(num);
}
console.log();

// Using forEach method to iterate over array elements
console.log("Using forEach method for array elements:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
console.log();
