/*
You're given a sorted array of integers where every element appears exactly twice, except for one element which appears exactly once. Find that single element.
Example: nums = [1,1,2,3,3,4,4,8,8] → 2 (every other number appears twice, but 2 appears only once)
Example: nums = [3,3,7,7,10,11,11] → 10

*/

var singleNonDuplicate = function (nums) {
  // arr.length always odd
  // mid either even or odd.  if odd check with mid -1 and if even - mid +1
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let midEven = mid % 2 === 0;
    if (midEven) {
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid;
      }
    } else {
      if (nums[mid] === nums[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
