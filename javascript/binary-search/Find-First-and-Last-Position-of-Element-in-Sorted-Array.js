/*
You're given a sorted numsay of integers and a target value. Unlike classic binary search 
(which just finds any matching index), here you need to find both the first (leftmost)
 and last (rightmost) index where the target appears, since the target might occur 
 multiple times in the numsay. Return both indices as [first, last]. 
 If the target doesn't exist at all, return [-1, -1].
Example: nums = [5,7,7,8,8,10], target = 8 → [3,4] 
(8 first appears at index 3, last appears at index 4)
Example: nums = [5,7,7,8,8,10], target = 6 → [-1,-1] (not present)

*/

var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let result = [-1, -1];
  let firstIndex = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      firstIndex = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  let lastIndex = -1;
  ((left = 0), (right = nums.length - 1));
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      lastIndex = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [firstIndex, lastIndex];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
