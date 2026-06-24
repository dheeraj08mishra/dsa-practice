/*
You're given an unsorted array of integers. You need to find the length of the longest run of consecutive integers that exist in the array — meaning numbers like n, n+1, n+2, ... all present somewhere in the array, regardless of their original order or position.
Example: nums = [100, 4, 200, 1, 3, 2] → 4 (because 1, 2, 3, 4 are all present and consecutive — that's the longest run)
*/

let longestConsecutive = function (nums) {
  // sorting the array and then checking for consecutive numbers
  //   nums.sort((a, b) => a - b);
  //   let count = 1,
  //     maxCount = 0;

  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] === nums[i - 1]) continue; // skip duplicates
  //     if (nums[i] === nums[i - 1] + 1) {
  //       count++;
  //     } else {
  //       maxCount = Math.max(maxCount, count);
  //       count = 1;
  //     }
  //   }
  //   return Math.max(maxCount, count);

  let set = new Set(nums);
  let maxCount = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        count++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};
