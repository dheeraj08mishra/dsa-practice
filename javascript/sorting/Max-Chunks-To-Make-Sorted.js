/*
You are given an integer array arr of length n that represents a permutation of the integers in the range [0, n - 1].

We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After concatenating them, the result should equal the sorted array.

Return the largest number of chunks we can make to sort the array.

 

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.
Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.
 

Constraints:

n == arr.length
1 <= n <= 10
0 <= arr[i] < n
All the elements of arr are unique.
*/

var maxChunksToSorted = function (arr) {
  // Max Chunks To Make Sorted
  // Key insight: arr contains values [0, n-1]
  // A cut is valid at index i if max(arr[0..i]) === i
  // Reason: all elements "belong" within indices 0..i, nothing escaped right
  // Approach: track running max, increment count whenever maxSoFar === i
  // Time: O(n), Space: O(1)

  // brute force
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Math.max(...arr.slice(0, i + 1)) === i) {
      count++;
    }
  }
  return count;

  // optimize
  let count = 0,
    maxSoFar = 0;

  for (let i = 0; i < arr.length; i++) {
    maxSoFar = Math.max(maxSoFar, arr[i]);
    if (maxSoFar === i) {
      count++;
    }
  }
  return count;
};

console.log([1, 0, 2, 3, 4]);
