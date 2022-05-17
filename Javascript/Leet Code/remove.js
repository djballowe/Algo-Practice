/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] = 101;
        } else {
            counter ++;
        }
    }
    nums.sort(function(a, b) {
        return a - b;
    });
    return counter;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// remove duplicates from sorted array Leet Code 5/17