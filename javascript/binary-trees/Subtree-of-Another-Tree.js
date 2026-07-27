/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right = new TreeNode(5);

let subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);

var isSubtree = function (root, subRoot) {
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(node, subRoot) {
    if (!node && !subRoot) return true;
    if (!node || !subRoot) return false;

    if (node.val !== subRoot.val) return false;

    return (
      isSameTree(node.left, subRoot.left) &&
      isSameTree(node.right, subRoot.right)
    );
  }
};

console.log(isSubtree(root, subRoot));
