/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    let ans = 0;
    start = 0;
    end = x;
    while (start <= end) {
        mid = start + end / 2;
        if (mid * mid == x) {
            ans = mid;
            break;
        } 
        if (mid * mid < x) {
            start = mid +1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    return ans; 
};

console.log(mySqrt(144));

// square root (x) Leet Code 5/20