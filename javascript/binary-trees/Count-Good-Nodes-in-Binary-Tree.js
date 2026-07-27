/*
Given a binary tree root, a node X in the tree is named good if in the path from
 root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.


Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes in blue are good.
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.

Example 2: 
Input: root = [3,3,null,4,2]
Output: 3
Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
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
root.left.left = new TreeNode(3);
root.right = new TreeNode(4);
root.right.right = new TreeNode(5);
root.right.left = new TreeNode(1);

var goodNodes = function (root) {
  if (!root) return 0;

  let count = 0;
  let current = -Infinity;

  function goodNodesCount(node, current) {
    if (!node) return count;

    if (current <= node.val) {
      current = node.val;
      count++;
    }

    goodNodesCount(node.left, current);
    goodNodesCount(node.right, current);
  }

  goodNodesCount(root, current);

  return count;
};

console.log(goodNodes(root));
