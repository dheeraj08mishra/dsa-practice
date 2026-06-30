/*
You're given a sorted array of integers and a target value. You need to find the index of the target in the array, or return -1 if it doesn't exist.
Example: nums = [-1,0,3,5,9,12], target = 9 → 4 (index of value 9)

Example: nums = [-1,0,3,5,9,12], target = 2 → -1 (not present)
This is the foundational version everything else in this pattern builds from — no rotation, no duplicates handling, no "search on answer" complexity yet. Just the core mechanic.

*/

let findElement = function (arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

console.log(findElement([-1, 0, 3, 5, 9, 12], 9));
