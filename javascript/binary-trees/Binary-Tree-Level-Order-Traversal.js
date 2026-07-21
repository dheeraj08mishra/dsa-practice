/*
Given the root of a binary tree, return the level order traversal of its nodes' values.
 (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []*/

var levelOrder = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let current = [];
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let currentNode = queue.shift();
      current.push(currentNode.val);
      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
    result.push(current);
  }
  return result;
};
