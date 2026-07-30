/*
You are given the root of a binary search tree (BST) and an integer val.
Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
 If such a node does not exist, return null.

 Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
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
root.right = new TreeNode(7);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(3);

var searchBST = function (root, val) {
  function nodePresent(node, val) {
    if (!node) return null;
    if (node.val === val) return node;
    if (node.val > val) {
      return nodePresent(node.left, val);
    } else {
      return nodePresent(node.right, val);
    }
  }

  return nodePresent(root, val);
};

console.log(searchBST(root));
