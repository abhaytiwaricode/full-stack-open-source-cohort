/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression
      .replace(/\s+/g, '')
      .match(/(\d+(\.\d+)?|[+\-*/()])/g);

    if (!tokens || tokens.join('') !== expression.replace(/\s+/g, '')) {
      throw new Error('Invalid character found');
    }

    const results = [];
    const operators = [];
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };

    for (const token of tokens) {
      if (!isNaN(token) || token === '.') {
        results.push(parseFloat(token));
      } else if (['+', '-', '*', '/'].includes(token)) {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          this.applyOperator(operators, results);
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (
          operators.length > 0 &&
          operators[operators.length - 1] !== '('
        ) {
          this.applyOperator(operators, results);
        }
        if (operators.length === 0 || operators.pop() !== '(') {
          throw new Error('Mismatched parentheses');
        }
      } else {
        throw new Error(`Invalid character found: ${token}`);
      }
    }

    while (operators.length > 0) {
      if (operators[operators.length - 1] === '(') {
        throw new Error('Mismatched parentheses');
      }
      this.applyOperator(operators, results);
    }

    this.result = results.pop();
  }

  applyOperator(operators, results) {
    const operator = operators.pop();
    const operand2 = results.pop();
    const operand1 = results.pop();
    switch (operator) {
      case '+':
        results.push(operand1 + operand2);
        break;
      case '-':
        results.push(operand1 - operand2);
        break;
      case '*':
        results.push(operand1 * operand2);
        break;
      case '/':
        if (operand2 === 0) {
          throw new Error('Division by zero is not allowed');
        }
        results.push(operand1 / operand2);
        break;
    }
  }
}

module.exports = Calculator;
