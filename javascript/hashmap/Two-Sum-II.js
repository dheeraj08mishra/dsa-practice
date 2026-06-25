/*
You're given an array of integers that is already sorted in ascending order, and a target sum. You need to find the indices of two numbers that add up exactly to the target. Unlike the original Two Sum, you can assume exactly one solution exists, and this time the array's sortedness is something you can actually exploit.
Example: nums = [2, 7, 11, 15], target = 9 → [0, 1] (since 2 + 7 = 9)
(Note: depending on the exact version of this problem, indices may be expected as 0-indexed or 1-indexed — we'll just go with 0-indexed for now, consistent with how we did the original Two Sum.)
*/

let twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
