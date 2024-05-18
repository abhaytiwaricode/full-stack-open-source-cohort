const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

function calculateMul(counter) {
  var mul = 1;
  for (var i = 1; i <= counter; i++) {
    mul = mul * i;
  }
  return mul;
}

function givePage(req, res) {
  res.sendFile(__dirname + '/index.html');
}

app.get('/', givePage);

app.get('/sum', (req, res) => {
  console.log(req.body);
  var counter = parseInt(req.query.counter);

  var sum = calculateSum(counter);
  var mul = calculateMul(counter);

  var answerObject = {
    sum: sum,
    mul: mul,
  };
  res.json(answerObject);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
