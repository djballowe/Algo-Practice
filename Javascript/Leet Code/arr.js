/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = 101;
            count --;
        }
    }
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    console.log(nums);
    return count;
};

// size of the remaining array
// take out the value
// cant make a new array


console.log(removeElement([3,2,2,3], 3));