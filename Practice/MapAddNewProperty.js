const products = [{ name: "Laptop" }, { name: "Phone" }];
// Output: [{ name: "Laptop", inStock: true }, { name: "Phone", inStock: true }]

let Adding = products.map((obj) => {
  return (obj.stock = true);
});

console.log(Adding);
