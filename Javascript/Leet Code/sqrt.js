/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    start = 0;
    end = x;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            end = x - 1;
        } else {
            start = x + 1;
        }
    }
    return end; 
};

console.log(mySqrt(144));

// square root (x) Leet Code 5/20