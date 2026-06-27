/*
You're given an array of non-negative integers representing the heights of bars in an elevation map (each bar has width 1). After it rains, water gets trapped between the bars. You need to find the total amount of water trapped.
Example: height = [0,1,0,2,1,0,1,3,2,1,2,1] → 6 (water collects in the dips between taller bars)
*/

let trap = function (height) {
  // brute force solution, O(n^2) time complexity

  //   let water = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     let leftmax = 0;
  //     let rightmax = 0;
  //     for (let j = 0; j <= i; j++) {
  //       leftmax = Math.max(leftmax, height[j]);
  //     }

  //     for (let j = i; j < height.length; j++) {
  //       rightmax = Math.max(rightmax, height[j]);
  //     }
  //     water += Math.min(leftmax, rightmax) - height[i];
  //   }
  //   return water;

  // optimized solution, O(n) time complexity
  //   let leftPrfix = new Array(height.length).fill(0);
  //   let rightPrefix = new Array(height.length).fill(0);

  //   leftPrfix[0] = height[0];
  //   for (let i = 1; i < height.length; i++) {
  //     leftPrfix[i] = Math.max(leftPrfix[i - 1], height[i]);
  //   }
  //   rightPrefix[height.length - 1] = height[height.length - 1];
  //   for (let i = height.length - 2; i >= 0; i--) {
  //     rightPrefix[i] = Math.max(rightPrefix[i + 1], height[i]);
  //   }
  //   let water = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     water += Math.min(leftPrfix[i], rightPrefix[i]) - height[i];
  //   }
  //   return water;

  // optimized solution using two pointers, O(n) time complexity and O(1) space complexity
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  return water;
};
