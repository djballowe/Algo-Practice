/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let sum = 0;
  nums.forEach((n) => {
    if (sum < 0) {
      sum = 0;
    }
    sum += n;
    maxSum = Math.max(maxSum, sum);
  });
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// the first and last number have to be postive
// only test the in a row numbers starting and ending with a positive number
