const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 22 },
  { name: "Doe", age: 18 },
];
// Output: [{ name: "Jane", age: 22 }, { name: "Doe", age: 18 }]

let arr = people.filter((adult) => {
  if (adult.age > 18) {
    console.log(adult);
  }
});
