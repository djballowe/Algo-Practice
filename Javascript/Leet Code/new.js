/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let arr = digits.join('');
    if (arr.length > 10) {
        addition= BigInt(arr) + 1n;
        let array = addition.toString().split('');
        return array.map(x => parseInt(x));
    } else {
        addition = parseInt(arr) + 1;
        let array = addition.toString().split('');
        return array.map(x => parseInt(x));
    }

};


console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

// Plus One leet code 5/19