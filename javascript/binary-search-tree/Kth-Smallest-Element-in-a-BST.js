/*
Given the root of a binary search tree, and an integer k, 
return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
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
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

var kthSmallest = function (root, k) {
  let sortedArray = [];
  function inorderTraversal(node, k) {
    if (!node) return null;
    inorderTraversal(node.left, k);
    sortedArray.push(node.val);
    inorderTraversal(node.right, k);
  }
  inorderTraversal(root, k);
  return sortedArray[k - 1];
};

/// without external array

var kthSmallest = function (root, k) {
  let result = null,
    count = 0;
  function inorderTraversal(node, k) {
    if (!node || result !== null) return;
    inorderTraversal(node.left, k);
    if (result) return;
    count++;
    if (count === k) result = node.val;
    inorderTraversal(node.right, k);
  }

  inorderTraversal(root, k);

  return result;
};

console.log(kthSmallest(root, 1));
