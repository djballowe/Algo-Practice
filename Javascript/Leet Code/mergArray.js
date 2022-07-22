const merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort();
  let fakeNums = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== 0) {
      fakeNums.push(nums1[i]);
    }
  }
  nums1 = fakeNums;
  return nums1;
};

console.log(merge([1, 2, 3], 3, [2, 5, 6], 3));
