/*
Given a collection of numbers, nums, that might contain duplicates,
 return all possible unique permutations in any order.
Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let used = new Array(nums.length).fill(false);
  let result = [];
  let backTrack = function (path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue;
      used[i] = true;
      path.push(nums[i]);
      backTrack(path);
      path.pop();
      used[i] = false;
    }
  };

  backTrack([]);
  return result;
};

console.log(permuteUnique([1, 1, 2]));

// console.log(permuteUnique([1, 2, 3]));
