## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// Function to display the counter
function displayCounter(count) {
console.log(count);
}

// Function to increment the counter
function incrementCounter(count) {
count++;
displayCounter(count);
setTimeout(incrementCounter, 1000, count); // Call incrementCounter after 1 second
}

// Initialize the counter
let count = 0;

// Display the initial counter value
displayCounter(count);

// Start the counter
incrementCounter(count);

(Hint: setTimeout)
