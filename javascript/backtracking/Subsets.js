/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
*/

/*
function backtrack(currentState, choices):
    if currentState is a complete/valid solution:
        record it, return
    for each choice in choices:
        make the choice (add to currentState)
        backtrack(updated state, remaining choices)
        undo the choice (remove from currentState)  ← the "backtrack" step
        */

var subsets = function (nums) {
  let result = [];

  let backTrack = function (path, start) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backTrack(path, i + 1);
      path.pop();
    }
  };

  backTrack([], 0);
  return result;
};

console.log(subsets([1, 2, 3]));
