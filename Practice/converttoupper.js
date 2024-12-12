const names = ["Alice", "Bob", "Charlie"];
// Output: ["ALICE", "BOB", "CHARLIE"]
let result = names.map((name) => {
  return name.toUpperCase();
});

console.log(typeof result);
console.log(result);
