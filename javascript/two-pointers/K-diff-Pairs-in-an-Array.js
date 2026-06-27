/*
You're given an array of integers and an integer k. You need to find the number of unique pairs (i, j) in the array where the absolute difference between nums[i] and nums[j] equals exactly k. Each pair should be counted once, regardless of how many times the same pair of values appears in the array.
Example: nums = [3, 1, 4, 1, 5], k = 2 → 2 (the pairs are (1,3) and (3,5) — note 1 appears twice in the array, but the pair (1,3) is only counted once)
*/

let findPairs = function (nums, k) {
  let map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (k == 0) {
      if (value > 1) {
        count++;
      }
    } else {
      if (map.has(key + k)) {
        // map.has(key - k)
        count++;
      }
    }
  }
  return count;
};
