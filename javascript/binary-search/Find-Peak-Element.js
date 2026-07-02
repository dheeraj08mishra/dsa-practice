/*

You're given an array of integers where nums[-1] and nums[n] are conceptually treated as negative infinity (the array is "bounded" by -∞ on both sides).
 A peak element is any element that is strictly greater than its neighbors.
  You need to find the index of any peak element — you don't need to find all of them, just one.
Example: nums = [1,2,3,1] → 2 (index of value 3, which is greater than both 2 and 1)
Example: nums = [1,2,1,3,5,6,4] → 5 (index of value 6 — but index 1, value 2, is also a valid peak since 2>1 and 2>1)
Key detail: the problem guarantees nums[i] !== nums[i+1] — no adjacent duplicates. This guarantee is what makes binary search work here.
*/

let findPeakElement = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
