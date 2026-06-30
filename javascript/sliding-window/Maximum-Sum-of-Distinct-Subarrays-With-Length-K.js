/*
You're given an integer array nums and an integer k. You need to find the maximum sum among all subarrays of length exactly k, but with one added condition: all elements within that subarray must be distinct (no repeated values inside the window). If no subarray of size k has all-distinct elements, return 0.
Example: nums = [1,5,4,2,9,9,9], k = 3 → 15 (the subarray [4,2,9] has all distinct elements and sums to 15 — the highest among all valid windows; windows like [2,9,9] or [9,9,9] are disqualified because they contain repeated values)
*/

let maxSumDistinctSubarray = function (nums, k) {
  let sum = 0,
    max = 0;
  let map = new Map();
  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    sum += nums[i];
  }
  if (map.size === k) {
    max = sum;
  }
  let start = k,
    end = nums.length;
  while (start < end) {
    sum = sum - nums[start - k] + nums[start];
    map.set(nums[start], (map.get(nums[start]) || 0) + 1);
    map.set(nums[start - k], map.get(nums[start - k]) - 1);
    if (map.get(nums[start - k]) === 0) {
      map.delete(nums[start - k]);
    }
    if (map.size === k) {
      max = Math.max(max, sum);
    }
    start++;
  }
  return max;
};

console.log(maxSumDistinctSubarray([1, 5, 4, 2, 9, 9, 9], 3)); // → 15
