/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

var inorderTraversal = function (root) {
  let result = [];
  Traverse(root);
  function Traverse(node) {
    if (!node) return;
    Traverse(node.left);
    result.push(node.val);
    Traverse(node.right);
  }
  return result;
};

console.log(inorderTraversal(root));
