/*
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.

Input: heights = [2,4]
Output: 4
*/

var largestRectangleArea = function (heights) {
  let leftStack = [];
  let rightStack = [];
  let n = heights.length;
  // for left stack
  let leftminArray = new Array(heights.length).fill(-1);
  for (let i = 0; i < heights.length; i++) {
    while (
      leftStack.length &&
      heights[leftStack[leftStack.length - 1]] >= heights[i]
    ) {
      leftStack.pop();
    }
    if (leftStack.length) {
      leftminArray[i] = leftStack[leftStack.length - 1];
    }
    leftStack.push(i);
  }

  // for right stack
  let rightminArray = new Array(heights.length).fill(n);
  for (let i = n - 1; i >= 0; i--) {
    while (
      rightStack.length &&
      heights[rightStack[rightStack.length - 1]] >= heights[i]
    ) {
      rightStack.pop();
    }
    if (rightStack.length) {
      rightminArray[i] = rightStack[rightStack.length - 1];
    }
    rightStack.push(i);
  }

  let MaxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let width = rightminArray[i] - leftminArray[i] - 1;
    let height = heights[i];
    MaxArea = Math.max(MaxArea, width * height);
  }
  return MaxArea;
};

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); /// left =[-1,-1,1,2,1,4] right = [2, 2, 3, -1, 5, -1]
// console.log(largestRectangleArea([2, 4]));
console.log(largestRectangleArea([4, 2]));
