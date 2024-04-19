/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error('Invalid input: n must be a non-negative number.'));
    } else {
      setTimeout(() => {
        resolve();
      }, n * 1000); // Convert seconds to milliseconds
    }
  });
}
wait(5)
  .then(() => {
    console.log('5 seconds have passed.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
