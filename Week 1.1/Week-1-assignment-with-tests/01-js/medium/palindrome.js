/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  // Convert the string to lowercase to make it case-insensitive
  str = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  str = str.replace(/[^a-z0-9]/g, '');

  // Compare the original string with its reversed version
  return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
