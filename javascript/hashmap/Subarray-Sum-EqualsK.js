/*
You're given an array of integers and a target integer k. You need to find the total count of contiguous subarrays whose elements sum up to exactly k.
Example: nums = [1, 1, 1], k = 2 → 2 (subarrays [1,1] at index 0-1, and [1,1] at index 1-2, both sum to 2)
Note: this asks for a count, not the subarrays themselves, and "contiguous" means the elements must be next to each other in the original array — no skipping around.
*/

let subarraySum = function (nums, k) {
  // brute force solution, O(n^2) time complexity
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //       sum += nums[j];
  //       if (sum === k) {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;

  // optimized solution, O(n) time complexity
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return count;
};
