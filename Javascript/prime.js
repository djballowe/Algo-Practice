const randomNum = (min, max) => {
  let total = max - min + 1;
  let result = Math.floor(Math.random() * total) + min;
  return result;
};

const createArray = () => {
  let ints = [];
  if (ints.length === 0) {
    for (let i = 1; i <= 15; i++) {
      ints.push(randomNum(1, 30));
    }
  }
  let duplicates = ints.filter((x, index) => index !== ints.indexOf(x));
  if (duplicates.length === 0) {
    console.log(ints);
    return ints;
  } else if (duplicates.length > 0) {
    createArray();
  }
};

createArray();
