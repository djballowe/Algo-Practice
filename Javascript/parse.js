function parse(data) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        count++;
        break;
      case 'd':
        count--;
        break;
      case 's':
        count = Math.pow(count, 2);
        break;
      case 'o':
        arr.push(count);
        break;
    }
  }
  return arr;
}

console.log(parse('iiisxxxdoso'));
