var counter = 1;
var counter2 = 1;

function printCounter() {
  console.clear();
  console.log(counter);
  counter = counter + 1;
}

setInterval(printCounter, 1000);

for (var i = 0; i < 10000000000; i++) {
  counter2 += 1;
}

console.log(counter2);
