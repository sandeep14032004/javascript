const words = ["apple", "banana", "cherry", "date"];

let Long = words.filter((fruits) => {
  return fruits.length > 5;
});
console.log(Long);
