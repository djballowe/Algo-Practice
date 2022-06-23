function solution(str){
   let ans = [];
   let counter = 1;
    for (let i = 1; i < str.length; i++) {
        counter ++;
        if (counter % 2 === 0) {
           let even = i;
           let odd = i - 1;
           let combine = str[odd] + str[even];
           ans.push(combine);
       }
   }
   if (str.length % 2 !== 0) {
    let last = str[str.length - 1] + '_'
    ans.push(last)
}
   return ans;
}

console.log(solution("abcdefg"))