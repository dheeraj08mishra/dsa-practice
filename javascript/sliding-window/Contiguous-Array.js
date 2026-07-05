/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

 

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.
*/

var findMaxLength = function (nums) {
  let count = 0,
    result = 0;
  let map = new Map();
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    }
    if (nums[i] === 1) {
      count++;
    }

    if (map.has(count)) {
      result = Math.max(result, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return result;
};

console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));
