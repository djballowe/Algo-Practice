/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let arr = digits.join('');
    if (arr.length > 10) {
        addition= BigInt(arr);
        let array = addition.toString().split('');
        return array.map(x => parseInt(x));
    } else {
        addition = parseInt(arr) + 1;
        let array = addition.toString().split('');
        return array.map(x => parseInt(x));
    }

};


console.log(plusOne([1, 2, 3]))

// Plus One leet code 5/19