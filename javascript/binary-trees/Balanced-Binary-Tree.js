/*
Given a binary tree, determine if it is height-balanced.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:
Input: root = []
Output: true
 
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// let root = new TreeNode(3);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(4);
root.right = new TreeNode(2);

var isBalanced = function (root) {
  let height = calculateheight(root);
  return height !== -1;
  function calculateheight(node) {
    if (!node) return 0;

    let leftheight = calculateheight(node.left);
    if (leftheight === -1) return -1;

    let rightHeight = calculateheight(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftheight - rightHeight) > 1) return -1;

    return 1 + Math.max(leftheight, rightHeight);
  }
};

console.log(isBalanced(root));
