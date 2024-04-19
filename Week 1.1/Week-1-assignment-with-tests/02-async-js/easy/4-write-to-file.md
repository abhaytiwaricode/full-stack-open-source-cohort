## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Data to be written to the file
const content = "Hello, world! This is some content to be written to a file.";

// File path where the content will be written
const filePath = 'example.txt';

// Writing to the file asynchronously
fs.writeFile(filePath, content, (err) => {
if (err) {
console.error('Error writing to file:', err);
return;
}
console.log('Content successfully written to file.');
});
