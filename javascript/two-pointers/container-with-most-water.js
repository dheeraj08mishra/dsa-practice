/*
You're given an array of non-negative integers, where each number represents the height of a vertical line at that index. You need to find two lines that, together with the x-axis, form a container holding the maximum amount of water.
The water held between two lines is determined by:

The width (distance between the two indices)
The height (limited by the shorter of the two lines — water spills over the shorter side)
*/

let maxArea = function (height) {
  // brute force solution, O(n^2) time complexity

  //   let max = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     for (let j = i + 1; j < height.length; j++) {
  //       let area = Math.min(height[i], height[j]) * (j - i);
  //       max = Math.max(max, area);
  //     }
  //   }
  //   return max;

  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
