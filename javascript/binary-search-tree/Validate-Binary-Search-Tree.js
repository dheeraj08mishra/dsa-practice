/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);

var isValidBST = function (root) {
  function isBST(node, min, max) {
    if (!node) return true;
    if (min >= node.val || max <= node.val) return false;

    let leftside = isBST(node.left, min, node.val);
    let rightside = isBST(node.right, node.val, max);

    return leftside && rightside;
  }
  return isBST(root, -Infinity, Infinity);
};

console.log(isValidBST(root));
