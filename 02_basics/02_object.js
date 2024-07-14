// const Jsuser = {
//     "name" : "sandeep",
//     age : 21 , 
//     branch : "CSE",
//     university : "giet university"
// }
// console.log(Jsuser.name);
// // Jsuser.address = "jagatsinghpur"
// // console.log(Jsuser);
// // Example of JavaScript object methods

// // Creating an object
// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2022,
//     color: 'Silver',

//     // Method inside an object
//     start: function() {
//         return `${this.brand} ${this.model} started.`;
//     },

//     // Another method
//     drive: function(speed) {
//         return `${this.brand} ${this.model} is driving at ${speed} km/h.`;
//     }
// };

// // Accessing object properties
// console.log('Car Brand:', car.brand);
// console.log('Car Model:', car.model);
// console.log('Car Year:', car.year);
// console.log('Car Color:', car.color);

// // Calling object methods
// console.log(car.start()); // Output: Toyota Camry started.
// console.log(car.drive(60)); // Output: Toyota Camry is driving at 60 km/h.

// // Adding a new property to the object
// car.price = 25000;
// console.log('Car Price:', car.price);

// // Deleting a property from the object
// delete car.color;
// console.log('After deleting Car Color:', car.color); // Output: undefined

// // Checking if a property exists in an object
// console.log('Does car have brand property?', 'brand' in car); // Output: true
// console.log('Does car have color property?', 'color' in car); // Output: false

// // Getting all keys of an object
// const keys = Object.keys(car);
// console.log('Object keys:', keys); // Output: ['brand', 'model', 'year', 'start', 'drive', 'price']

// // Getting all values of an object
// const values = Object.values(car);
// console.log('Object values:', values); // Output: ['Toyota', 'Camry', 2022, function start(), function drive(), 25000]

// // Getting entries (key-value pairs) of an object
// const entries = Object.entries(car);
// console.log('Object entries:', entries);
// /*
// Output:
// [
//   ['brand', 'Toyota'],
//   ['model', 'Camry'],
//   ['year', 2022],
//   ['start', [Function: start]],
//   ['drive', [Function: drive]],
//   ['price', 25000]
// ]
// */

// // Cloning an object
// const clonedCar = { ...car };
// console.log('Cloned Car:', clonedCar);

// // Merging objects
// const additionalInfo = { fuelType: 'Petrol', mileage: '18 kmpl' };
// const mergedCar = { ...car, ...additionalInfo };
// console.log('Merged Car:', mergedCar);



// ********************************************
const tinderuser = new Object()
tinderuser.id = "123we"
tinderuser.name = "abd"
tinderuser.isLoggedIn = true
console.log(tinderuser);