/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let count2 = 0;
    let count3 = 0;
    let count5 = 0;
    while (x !== 1) {
        if (x % 2 === 0) {
            x/2
            count2++;
        } else if (x % 3 === 0) {
            x/3
            count3++;
        } else if (x % 5 === 0) {
            x/5
            count5++;
        }
    }
    if (count2 !== 0) {
        two = 2*count2;
    }
    if (count3 !== 0) {
        three = 3*count3;
    }
    ans = two * three;
    return ans;
    
};

console.log(mySqrt(144))

// square root (x) Leet Code 5/20