// Function Declaration
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function Expression
const fibonacci = function(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Arrow Function
const isEven = (num) => num % 2 === 0;

console.log("isPrime(7):", isPrime(7));       // true
console.log("fibonacci(6):", fibonacci(6));   // 8
console.log("isEven(10):", isEven(10));       // true

// Callback version (simulated async)
function isPrimeAsyncCallback(num, callback) {
  setTimeout(() => {
    if (num <= 1) return callback(null, false);
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return callback(null, false);
    }
    callback(null, true);
  }, 100);
}

// Using callback
isPrimeAsyncCallback(11, (err, result) => {
  if (err) console.error(err);
  else console.log("Callback isPrimeAsyncCallback(11):", result);
});

// Promise-based version
function isPrimeAsyncPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== 'number') return reject(new Error("Invalid input"));
      if (num <= 1) return resolve(false);
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return resolve(false);
      }
      resolve(true);
    }, 100);
  });
}

// Using promise
isPrimeAsyncPromise(11)
  .then(result => console.log("Promise isPrimeAsyncPromise(11):", result))
  .catch(err => console.error(err));
 