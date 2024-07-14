let date = new Date()
console.log(date);
// date_methods.js

// Create a new Date object
let now = new Date();
console.log(now); // Current date and time

// Create a Date object for a specific date and time
let specificDate = new Date('2020-01-01T00:00:00');
console.log(specificDate);

// Get individual date components
console.log(now.getFullYear()); // Year
console.log(now.getMonth());    // Month (0-11)
console.log(now.getDate());     // Day of the month (1-31)
console.log(now.getDay());      // Day of the week (0-6, 0 is Sunday)
console.log(now.getHours());    // Hours (0-23)
console.log(now.getMinutes());  // Minutes (0-59)
console.log(now.getSeconds());  // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)

// Set individual date components
now.setFullYear(2022);
now.setMonth(11);  // December (months are 0-11)
now.setDate(25);   // Christmas
now.setHours(10);
now.setMinutes(30);
now.setSeconds(15);
console.log(now);

// Get the timestamp (milliseconds since Jan 1, 1970)
console.log(now.getTime());

// Create a Date object from a timestamp
let timestamp = 1597246200000;
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);

// Parse a date string
let parsedDate = Date.parse('2020-01-01T00:00:00');
console.log(new Date(parsedDate));

// Get the current timestamp
let currentTimestamp = Date.now();
console.log(currentTimestamp);

// Compare dates
let date1 = new Date('2020-01-01');
let date2 = new Date('2021-01-01');
console.log(date1 < date2); // true

// Date methods to extract components in UTC
console.log(now.getUTCFullYear());
console.log(now.getUTCMonth());
console.log(now.getUTCDate());
console.log(now.getUTCHours());
console.log(now.getUTCMinutes());
console.log(now.getUTCSeconds());
console.log(now.getUTCMilliseconds());

// Get the difference between dates
let diff = date2 - date1; // difference in milliseconds
let diffDays = diff / (1000 * 60 * 60 * 24); // convert milliseconds to days
console.log(diffDays);

// Date formatting using toString methods
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toISOString());
console.log(now.toUTCString());