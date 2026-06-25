/*
You're given an array of integers. You need to find all unique triplets [a, b, c] in the array such that a + b + c === 0. The same triplet of values shouldn't appear more than once in your result, even if there are multiple ways to pick those values from different indices.
Example: nums = [-1, 0, 1, 2, -1, -4] → [[-1, -1, 2], [-1, 0, 1]] (notice: even though -1 appears multiple times in the array, each unique triplet of values is only included once)
This is meaningfully harder than what we've done before for two reasons: it's three numbers instead of two, and you need to handle duplicate avoidance in the output.
*/

let threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
