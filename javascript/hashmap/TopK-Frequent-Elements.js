/*You're given an array of integers and a number k. You need to return the k most frequently occurring elements in the array.
Example: nums = [1, 1, 1, 2, 2, 3], k = 2 → [1, 2] (1 appears 3 times, 2 appears 2 times — these are the top 2 most frequent)
The order of the output doesn't matter, but you must return exactly k elements, and you can assume the answer is always well-defined (no ties that would make k ambiguous, for now).
*/

let topKFrequent = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let count = map.get(nums[i])[1];
      map.set(nums[i], [nums[i], count + 1]);
    } else {
      map.set(nums[i], [nums[i], 1]);
    }
  }

  let sorted = [...map.values()].sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }
  return result;
};
