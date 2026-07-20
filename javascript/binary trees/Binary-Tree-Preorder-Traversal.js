/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.
Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [1,2,4,5,6,7,3,8,9]

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]
*/

var preorderTraversal = function (root) {
  let result = [];
  Traverse(root);
  function Traverse(node) {
    if (!node) return;
    result.push(node.val);
    Traverse(node.left);
    Traverse(node.right);
  }
  return result;
};

// iterative

var preorderTraversalIterative = function (root) {
  if (!root) return [];
  let stack = [],
    result = [];

  stack.push(root);
  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);
    current.right && stack.push(current.right);
    current.left && stack.push(current.left);
  }
  return result;
};
