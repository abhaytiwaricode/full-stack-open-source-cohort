function isAnagram(str1, str2) {
  var sortedStr1 = str1.split('').sort().join('');
  var sortedStr2 = str2.split('').sort().join('');

  if (sortedStr1 === sortedStr2) {
    return true;
  } else {
    return false;
  }
}

var ans = isAnagram('pass', 'assp');
console.log(ans);
