/*
Given an integer array nums where the elements are sorted in ascending order,
 convert it to a height-balanced binary search tree.

Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var sortedArrayToBST = function (nums) {
  return constructTree(nums, 0, nums.length - 1);
  function constructTree(nums, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = constructTree(nums, start, mid - 1);
    root.right = constructTree(nums, mid + 1, end);
    return root;
  }
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
