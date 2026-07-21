/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,2,3,4,null,null,null,5]
Output: [1,3,4,5]

Example 3:
Input: root = [1,null,3]
Output: [1,3]

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
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.right = new TreeNode(4);

var rightSideView = function (root) {
  if (!root) return [];

  let q = [];
  q.push(root);
  let result = [];
  while (q.length) {
    let level = q.length;
    for (let i = 0; i < level; i++) {
      let current = q.shift();
      if (i == level - 1) {
        result.push(current.val);
      }
      current.left && q.push(current.left);
      current.right && q.push(current.right);
    }
  }
  return result;
};

console.log(rightSideView(root));
