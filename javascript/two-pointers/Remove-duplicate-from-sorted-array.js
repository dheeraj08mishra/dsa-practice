/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

*/

var removeDuplicates = function (nums) {
  let p1 = 0,
    p2 = 1,
    count = 1;

  while (p2 < nums.length) {
    if (nums[p2] === nums[p2 - 1]) {
      p2++;
      continue;
    } else {
      p1++;
      nums[p1] = nums[p2];
      p2++;
    }
  }
  return p1 + 1;
};

console.log(removeDuplicates([1, 1, 2]));
