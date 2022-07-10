function titleCase(title, minorWords) {
  let ans = [];
  if (minorWords === undefined) {
    const wordArray = title.toLowerCase().split(' ');
    wordArray.forEach((word) => {
      word = word[0].toUpperCase() + word.substr(1);
      ans.push(word);
    });
    return ans;
  }
  const minorArray = minorWords.toLowerCase().split(' ');
  const wordArray = title.toLowerCase().split(' ');
  wordArray.filter((word) => {
    if (minorArray.indexOf(word) === -1) {
      word = word[0].toUpperCase() + word.substr(1);
      ans.push(word);
    } else {
      ans.push(word);
    }
  });
  ans[0] = ans[0][0].toUpperCase() + ans[0].substr(1);
  return ans.join(' ');
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'in the'));
