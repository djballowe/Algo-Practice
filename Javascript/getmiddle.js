function getMiddle(s) {
        if (s.length % 2 == 0) {
            ans =  s[(s.length/2)-1] + s[s.length/2];
        } else {
            (s.length % 2 !== 0) 
            ans = s[(s.length-1)/2];
        } 
    return ans;
}

console.log(getMiddle("test"));