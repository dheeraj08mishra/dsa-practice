/*
Given the root of a binary tree, invert the tree, and return its root.
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 
*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

var invertTree = function (root) {
  if (!root) return root;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  root.left && invertTree(root.left);
  root.right && invertTree(root.right);
  return root;
};

console.log(invertTree(root));
