fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert response to JSON
  })
  .then((data) => {
    console.log("Fetched Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
