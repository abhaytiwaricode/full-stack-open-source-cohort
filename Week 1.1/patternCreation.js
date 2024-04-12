function createPattern(numberOfRows) {
  for (var i = 0; i < numberOfRows; i++) {
    var strinToPrint = '';
    for (var j = 0; j < i + 1; j++) {
      strinToPrint = strinToPrint + '*';
    }
    console.log(strinToPrint);
  }
}

createPattern(5);
