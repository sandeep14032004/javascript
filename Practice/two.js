function GoodMoring(greet) {
  console.log("Waiting for 2 seconds...");
  setTimeout(() => {
    console.log("good morning from Goodmorning function ");
    greet();
  }, 2000);
}

function greet() {
  console.log("greeting from greet function");
}
GoodMoring(greet);
