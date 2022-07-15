function toWeirdCase(string) {
  let lower = string.toLowerCase().split('');
  let count = 0;
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === ' ') {
      count = 0;
    } else if (count % 2 === 0 || count === 0) {
      lower.splice(i, 1, lower[i].toUpperCase());
      count++;
    } else {
      count++;
    }
  }
  return lower.join('');
}

console.log(toWeirdCase('Weird string case'));
