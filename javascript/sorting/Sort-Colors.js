/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

var sortColors = function (nums) {
  let p0 = (p1 = 0),
    p2 = nums.length - 1;
  while (p1 <= p2) {
    if (nums[p1] === 0) {
      [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
      p0++;
      p1++;
    } else if (nums[p1] === 1) {
      p1++;
    } else {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
