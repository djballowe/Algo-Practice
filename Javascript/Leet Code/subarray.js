/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let biggest = nums[0];
    let smallest = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > biggest) {
            biggest = nums[i];
        } 
        if (nums[i] < smallest) {
            smallest = nums[i];
        }
        sum += nums[i];
    }
    if (biggest < 0) {
        return biggest;
    }
    if(smallest > 0) {
        return sum;
    }

    let start = 0;
    let end = nums.length - 1;
    let startPair = start;
    let endPair = end;
    let biggestSum = sum;
    let startSum = nums[start];
    let endSum = nums[end];
    while (startPair < endPair) {
        if(nums[start] < 0) {
            start ++;
            startPair = start;
            sum -= nums[start];
            biggestSum = sum;
            startSum = nums[start];
        }
        if (nums[end] < 0) {
            end --;
            endPair = end;
            sum -= nums[end];
            biggestSum = sum;
            endSum = nums[end];
        }
        if (nums[startPair] < 0 && nums[startPair + 1] >= 0) {
           if (startSum < 0) {
               start = startPair + 1;
               startPair = start;
               sum -= startSum;
           }
        } else {
            startPair++;
            startSum += nums[startPair];
        }
        if (nums[endPair] < 0 && nums[endPair - 1] >= 0) {
            if (endSum < 0) {
                end = endPair - 1;
                endPair = end;
            }
         } else {
            endPair--;
            endSum += nums[endPair];
            sum -= endSum;

         } 
    }
    return sum;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// start and end of array must be +