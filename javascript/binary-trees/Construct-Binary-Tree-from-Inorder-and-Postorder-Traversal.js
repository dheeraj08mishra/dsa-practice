/*
Given two integer arrays inorder and postorder where inorder is the
inorder traversal of a binary tree and postorder is the postorder
traversal of the same tree, construct and return the binary tree.

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: inorder = [-1], postorder = [-1]
Output: [-1]

  */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  let rootElement = postorder[postorder.length - 1];
  let rootIndexInInorder = 0;
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootElement) {
      rootIndexInInorder = i;
      break;
    }
  }

  let root = new TreeNode(rootElement);

  let leftTreeInorder = inorder.slice(0, rootIndexInInorder);
  let rightTreeInorder = inorder.slice(rootIndexInInorder + 1);

  let leftTreePostorder = postorder.slice(0, rootIndexInInorder);
  let rightTreePostorder = postorder.slice(
    rootIndexInInorder,
    postorder.length - 1,
  );

  root.left = buildTree(leftTreeInorder, leftTreePostorder);
  root.right = buildTree(rightTreeInorder, rightTreePostorder);

  return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
