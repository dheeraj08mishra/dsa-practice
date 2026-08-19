/*
In this problem, a tree is an undirected graph that is connected and has no cycles.
You are given a graph that started as a tree with n nodes labeled from 1 to n,
with one additional edge added. The added edge has two different vertices chosen from 1 to n,
and was not an edge that already existed. The graph is represented as an array edges of length
n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes.
If there are multiple answers, return the answer that occurs last in the input.

Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]


Graph Problem
│
├── Need to visit/traverse nodes?
│       │
│       ├── Yes → DFS/BFS
│       │
│       └── No
│
├── Edges are arriving one by one?
│       │
│       ├── Yes → Union-Find
│
├── Need to know if two nodes are already connected?
│       │
│       ├── Yes → Union-Find
│
├── Need to detect the first edge that creates a cycle?
│       │
│       ├── Yes → Union-Find
*/

var findRedundantConnection = function (edges) {
  let n = edges.length;
  let parent = new Array(n + 1).fill(0);

  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  let find = function (x) {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  let union = function (u, v) {
    let x = find(u);
    let y = find(v);
    if (x === y) return true;

    parent[x] = y;
    return false;
  };

  for (let [u, v] of edges) {
    if (union(u, v)) return [u, v];
  }
};

console.log(
  findRedundantConnection([
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);

console.log(
  findRedundantConnection([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ]),
);
