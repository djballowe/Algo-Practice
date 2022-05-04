function spinWords(string){
  let split = string.split('');
  let reverse = split.reverse();
  let join = reverse.join('');
  return join;
}

console.log(spinWords('another one bites the dust'));