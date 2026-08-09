/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
*/

// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

let cloneGraph = function (node) {
  if (!node) return null;
  let map = new Map();
  let q = [node];
  map.set(node, new _Node(node.val));

  while (q.length) {
    let current = q.shift();
    for (let curentVal of current.neighbors) {
      if (!map.has(curentVal)) {
        map.set(curentVal, new _Node(curentVal.val));
        q.push(curentVal);
      }

      map.get(current).neighbors.push(map.get(curentVal));
    }
  }
  return map.get(node);
};
// console.log(
//   cloneGraph([
//     [2, 4],
//     [1, 3],
//     [2, 4],
//     [1, 3],
//   ]),
// );
