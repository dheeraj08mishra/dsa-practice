/*
A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, and undirected graph is a spanning tree (no cycles and connects all vertices) that has minimum weight. The weight of a spanning tree is the sum of all edges in the tree.  

Below are the steps for finding MST using Kruskal's algorithm:

Sort all the edges in a non-decreasing order of their weight. 
Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far. If the cycle is not formed, include this edge. Else, discard it.  It uses the Disjoint Sets to detect cycles.
Repeat step 2 until there are (V-1) edges in the spanning tree.
*/

function kruskalsMST(V, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  let cost = 0,
    count = 0;

  let n = V;
  let parent = new Array(n).fill(0);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  for (let [x, y, w] of edges) {
    if (!union(x, y, parent)) {
      cost += w;
      count++;
      if (count === V - 1) break;
    }
  }

  return cost;
}

let find = function (x, parent) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x], parent));
};
let union = function (u, v, parent) {
  let x = find(u, parent);
  let y = find(v, parent);
  if (x === y) return true;

  parent[x] = y;
  return false;
};

console.log(
  kruskalsMST(4, [
    [0, 1, 10],
    [1, 3, 15],
    [2, 3, 4],
    [2, 0, 6],
    [0, 3, 5],
  ]),
);
