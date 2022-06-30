/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum;
  let startIndex;
  let endIndex;
  let arrLength = endIndex - startIndex;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      start = nums[i];
      startIndex = i;
      break;
    }
    for (let j = nums.length - 1; j > 0; j++) {
      if (nums[j] > 0) {
        end = nums[j];
        endIndex = j;
        break;
      }
    }
  }
  for (let e = startIndex; e < arrLength; e++) {
    sum = nums[e] + nums[e + 1];
    return end;
  }
  return end;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 1, -3, 4, -1, 2, 1, -5, 100 do this first thing in the morning
// the first and last number have to be postive
// only test the in a row numbers starting and ending with a positive number
