function getCount(str) {
  let vowelsCount = 0;
  let split = str.split('');
  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u') {
      vowelsCount++;
    }
  }
  return vowelsCount
  

}

console.log(getCount('happily'));