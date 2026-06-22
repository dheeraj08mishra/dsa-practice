/*You're given an array of integers. You need to return true if any value appears at least twice in the array, and false if every element is distinct.
Example: nums = [1, 2, 3, 1] → true (1 appears twice)

Example: nums = [1, 2, 3, 4] → false (all unique)
*/

let containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};
