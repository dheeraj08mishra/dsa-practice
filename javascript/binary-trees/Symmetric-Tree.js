/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
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
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

[1, 2, 2, 3, 4, 4, 3];

var isSymmetric = function (root) {
  if (!root) return false;

  return isMirror(root.left, root.right);

  function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    if (left.val !== right.val) return false;
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
};

console.log(isSymmetric(root));
