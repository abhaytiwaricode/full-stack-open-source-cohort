/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // First, check if the lengths of the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert both strings to lowercase to make the comparison case-insensitive
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Sort the characters of both strings and compare them
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
