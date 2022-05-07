function getMiddle(s) {
    let even;
    let odd;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            even = s[i/2] + s[(i/2)+1];
        } else if (i % 2 !== 0) {
            odd = s[i/2];
        }
    }
    return even;
}

console.log(getMiddle('test'));