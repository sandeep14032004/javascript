// JavaScript String Methods

const str = "Hello, JavaScript!";

// charAt() - Returns the character at the specified index (position)
console.log(str.charAt(0)); // Output: "H"

// charCodeAt() - Returns the Unicode of the character at the specified index
console.log(str.charCodeAt(0)); // Output: 72

// concat() - Joins two or more strings and returns a new concatenated string
console.log(str.concat(" How are you?")); // Output: "Hello, JavaScript! How are you?"

// includes() - Checks if a string contains a specified value, returns true or false
console.log(str.includes("Java")); // Output: true

// endsWith() - Checks if a string ends with a specified value, returns true or false
console.log(str.endsWith("!")); // Output: true

// indexOf() - Returns the index of the first occurrence of a specified value in a string
console.log(str.indexOf("J")); // Output: 7

// lastIndexOf() - Returns the index of the last occurrence of a specified value in a string
console.log(str.lastIndexOf("a")); // Output: 10

// match() - Searches a string for a match against a regular expression, returns the matches
console.log(str.match(/Java/g)); // Output: ["Java"]

// repeat() - Returns a new string with a specified number of copies of an existing string
console.log(str.repeat(2)); // Output: "Hello, JavaScript!Hello, JavaScript!"

// replace() - Searches a string for a specified value or a regular expression, returns a new string with replacements
console.log(str.replace("JavaScript", "World")); // Output: "Hello, World!"

// search() - Searches a string for a specified value or regular expression, returns the position of the match
console.log(str.search("Java")); // Output: 7

// slice() - Extracts a part of a string and returns a new string
console.log(str.slice(7, 17)); // Output: "JavaScript"

// split() - Splits a string into an array of substrings, returns the new array
console.log(str.split(", ")); // Output: ["Hello", "JavaScript!"]

// startsWith() - Checks if a string starts with a specified value, returns true or false
console.log(str.startsWith("Hello")); // Output: true

// substring() - Extracts characters from a string between two specified indices
console.log(str.substring(7, 17)); // Output: "JavaScript"

// toLowerCase() - Converts a string to lowercase letters
console.log(str.toLowerCase()); // Output: "hello, javascript!"

// toUpperCase() - Converts a string to uppercase letters
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"

// trim() - Removes whitespace from both ends of a string
const strWithSpaces = "   Hello, JavaScript!   ";
console.log(strWithSpaces.trim()); // Output: "Hello, JavaScript!"

// trimStart() - Removes whitespace only from the beginning of a string
console.log(strWithSpaces.trimStart()); // Output: "Hello, JavaScript!   "

// trimEnd() - Removes whitespace only from the end of a string
console.log(strWithSpaces.trimEnd()); // Output: "   Hello, JavaScript!"

// valueOf() - Returns the primitive value of a String object
console.log(str.valueOf()); // Output: "Hello, JavaScript!"
