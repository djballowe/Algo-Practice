function getMiddle(s) {
    let ans;
    for (let i = 1; i < s.length; i++) {
        if (i % 2 == 0) {
            ans = s[i/2] + s[(i/2)+1];
        } else if (i % 2 !== 0) {
            ans = s[(i+1)/2];
        }
    }
    return ans;
}

console.log(getMiddle("middle"));