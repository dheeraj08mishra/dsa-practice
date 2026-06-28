/*
You're given an array of integers and an integer k. You need to find the maximum sum of any contiguous subarray of exactly size k.
Example: arr = [2, 1, 5, 1, 3, 2], k = 3 → 9 (the subarray [5,1,3] sums to 9, which is the highest among all size-3 windows)
This is the simplest form of sliding window: the window size is fixed — it never grows or shrinks, it just slides one step at a time across the array.
*/

let maxSumSubarray = function (arr, k) {
  let sum = 0,
    max = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;
  let start = k,
    end = arr.length;

  while (start < end) {
    sum = sum - arr[start - k] + arr[start];
    max = Math.max(max, sum);
    start++;
  }

  return max;
};
