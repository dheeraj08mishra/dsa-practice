/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left = new TreeNode(1);

var maxPathSum = function (root) {
  let maxsum = -Infinity;
  calculateSum(root);

  function calculateSum(node) {
    if (!node) return 0;

    let left = Math.max(0, calculateSum(node.left));
    let right = Math.max(0, calculateSum(node.right));
    maxsum = Math.max(maxsum, left + right + node.val);
    return node.val + Math.max(left, right);
  }

  return maxsum;
};

console.log(maxPathSum(root));
