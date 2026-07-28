/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  let rootIndexInInorder = 0;

  for (let i = 0; i < inorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      rootIndexInInorder = i;
      break;
    }
  }

  let rootVal = preorder[0];
  let root = new TreeNode(rootVal);

  let leftTreeInorder = inorder.slice(0, rootIndexInInorder);
  let rightTreeInorder = inorder.slice(rootIndexInInorder + 1);

  let leftTreePreorder = preorder.slice(1, rootIndexInInorder + 1);
  let rightTreePreorder = preorder.slice(rootIndexInInorder + 1);

  root.left = buildTree(leftTreePreorder, leftTreeInorder);
  root.right = buildTree(rightTreePreorder, rightTreeInorder);
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
