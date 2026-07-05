/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/
var maxSlidingWindow = function (nums, k) {
  //   let max = -Infinity;
  //   for (let i = 0; i < k; i++) {
  //     max = Math.max(max, nums[i]);
  //   }
  //   let result = [];
  //   result.push(max);
  //   let start = 0,
  //     end = k;
  //   while (end < nums.length) {
  //     if (max === nums[start]) {
  //       max = findMax(nums, start + 1, end);
  //     }

  //     max = Math.max(max, nums[end]);
  //     result.push(max);
  //     end++;
  //     start++;
  //   }

  //   return result;
  // };
  // let findMax = function (arr, start, end) {
  //   let max = -Infinity;
  //   for (let i = start; i < end; i++) {
  //     max = Math.max(max, arr[i]);
  //   }
  //   return max;

  let res = [];
  let dq = [];

  for (let i = 0; i < nums.length; i++) {
    while (dq.length && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }
    dq.push(i);
    if (i - k === dq[0]) {
      dq.shift();
    }
    if (i >= k - 1) {
      res.push(nums[dq[0]]);
    }
  }
  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
