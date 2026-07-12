/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

*/

let dailyTempratures = function (temperatures) {
  let stack = [];
  let result = new Array(temperatures.length).fill(0);
  let n = temperatures.length;
  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return result;
};

console.log(dailyTempratures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])); // [8,1,5,4,3,2,1,1,0,0]
