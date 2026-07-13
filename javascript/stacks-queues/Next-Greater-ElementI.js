/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
 
*/

var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let stack = [];
  let n = nums2.length;

  for (let i = n - 1; n >= 0; i--) {
    if (stack.length && stack[stack.length - 1] < nums2[i]) {
      stack.pop();
    }
    if (stack.length) {
      map.set(nums2[i], stack[stack.length - 1]);
    }
    stack.push(nums2[i]);
  }
  let result = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      result[i] = map.get(nums1[i]);
    }
  }
  return result;
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])); // [7,-1,-1,-1,-1]         [7,7,7,7,7]
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
