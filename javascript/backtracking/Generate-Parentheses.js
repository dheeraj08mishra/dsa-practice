/*
Given n pairs of parentheses, write a function to generate all combinations
of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

var generateParenthesis = function (n) {
  let result = [];

  let backTrack = function (path, open, close) {
    if (path.length === 2 * n) {
      result.push(path.join(""));
      return;
    }
    if (open < n) {
      path.push("(");
      backTrack(path, open + 1, close);
      path.pop();
    }
    if (close < open) {
      path.push(")");
      backTrack(path, open, close + 1);
      path.pop();
    }
  };

  backTrack([], 0, 0);
  return result;
};

console.log(generateParenthesis(3));
