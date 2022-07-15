function solution(string) {
  let arr = string.split('');
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) > 64 && arr[i].charCodeAt(0) < 91) {
      ans.push(i);
    }
  }
  ans.forEach((index) => {
    arr.splice(index, 0, ' ');
  });
  return ans;
}

console.log(solution('camelCasingTest'));
