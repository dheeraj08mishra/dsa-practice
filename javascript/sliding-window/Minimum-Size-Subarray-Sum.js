/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

var minSubArrayLen = function (target, nums) {
  let length = Infinity;

  // brute force solution, O(n^2) time complexity
  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //       sum = sum + nums[j];
  //       if (sum >= target) {
  //         length = Math.min(length, j - i + 1);
  //       }
  //     }
  //   }

  // optimized solution, O(n) time complexity
  let start = 0,
    sum = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      length = Math.min(length, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }

  return length === Infinity ? 0 : length;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // → 2
