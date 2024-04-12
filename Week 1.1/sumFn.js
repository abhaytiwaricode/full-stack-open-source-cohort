function sum(index1, index2) {
  return index1 + index2;
}

function multiply(index1, index2) {
  return index1 * index2;
}

function divide(index1, index2) {
  return index1 / index2;
}

function doArithmetic(firstEl, secondEl, ArithmeticFn) {
  return ArithmeticFn(firstEl, secondEl);
}

var answer = doArithmetic(4, 8, sum);
console.log(answer);
