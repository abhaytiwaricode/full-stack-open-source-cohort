function printSingleFullRow(n) {
  var str = '';
  for (var i = 0; i < n; i++) {
    str = str + '*';
  }
  console.log(str);
}

function printPartialRow(n) {
  var str = '';
  str = str + '*';
  for (var i = 0; i < n - 2; i++) {
    str = str + ' ';
  }
  str = str + '*';
  console.log(str);
}

function printWholeThing(n) {
  printSingleFullRow(n);
  for (var i = 0; i < n - 2; i++) {
    printPartialRow(n);
  }
  printSingleFullRow(n);
}

printWholeThing(5);
