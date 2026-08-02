/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]

function backtrack(currentState, choices):
    if currentState is a complete/valid solution:
        record it, return
    for each choice in choices:
        make the choice (add to currentState)
        backtrack(updated state, remaining choices)
        undo the choice (remove from currentState)  ← the "backtrack" step
        

*/

var permute = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);

  let backTrack = function (path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      //   if (path.includes(nums[i])) continue;
      if (used[i]) continue;
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

console.log(permute([1, 2, 3]));
