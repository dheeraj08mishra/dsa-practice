/*
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  calculateHeight(root);

  function calculateHeight(node) {
    if (!node) return 0;

    let left = calculateHeight(node.left);
    let right = calculateHeight(node.right);

    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }

  return diameter;
};

console.log(diameterOfBinaryTree(root));
