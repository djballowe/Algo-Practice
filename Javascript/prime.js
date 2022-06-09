function isPrime(num) {
  if (num === 0 || num === 1 || num % 2 === 0 || num < 0 || num % 3 === 0 || num % 5 === 0) {
      return false;
  } else {
      return true;
  }
}

console.log(isPrime(73));