/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 (i.e., from left to right, then right to left for the next level and alternate between).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
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

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [];
  queue.push(root);
  let count = 0;
  let ans = [];

  while (queue.length) {
    let result = [];
    let level = queue.length;
    count++;
    for (let i = 0; i < level; i++) {
      let current = queue.shift();
      result.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }

    if (count % 2 === 0) {
      result.reverse();
    }

    ans.push(result);
  }
  return ans;
};

console.log(zigzagLevelOrder(root));
