## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

// Function to display the counter
function displayCounter(count) {
console.log(count);
}

// Function to increment the counter
function incrementCounter() {
count++;
displayCounter(count);
}

// Initialize the counter
let count = 0;

// Display the initial counter value
displayCounter(count);

// Increment the counter every second
setInterval(incrementCounter, 1000);
