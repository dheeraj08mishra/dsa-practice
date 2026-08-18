/*
Prim's Algorithm — The Priority-Queue-Based MST Alternative
Core idea — fundamentally different approach than Kruskal's: instead of processing edges sorted by weight globally,
Prim's grows a single tree outward, one node at a time, always choosing the cheapest edge that connects a new node to the current tree.

Think of it like this: start with any single node as your "tree so far"
(just that one node, no edges yet). Look at all edges leaving your current tree that connect to a node not yet included
— pick the cheapest one, add that edge and the new node to your tree. Repeat: now look at all edges leaving your (slightly bigger)
tree to still-unincluded nodes, again pick the cheapest, and so on — until every node is included.

This is structurally very similar to Dijkstra's — you use a priority queue to always pick the cheapest available option next,
and you track which nodes are already "settled" (in the tree) versus not.

Key difference from Dijkstra's: Dijkstra's priority queue tracks "distance from the source" (cumulative).
Prim's priority queue tracks "cheapest single edge that would connect this node to the current tree" —
not cumulative distance, just the immediate connecting edge's weight.

The algorithm:
Start at any node (say, node 0). Mark it visited. Push all its edges (weight, neighbor) into a priority queue.
Pop the cheapest edge from the queue. If the neighbor is already visited, skip it (would create a cycle,
we already have a way in). Otherwise: mark it visited, add this edge's weight to your total MST cost,
and push all of this new node's edges into the queue too.
Repeat until all nodes are visited (or the queue is empty).


Given a weighted, undirected, and connected graph with V vertices and a 2D array edges[][], where each element edges[i] = [u, v, w] represents an edge between vertices u and v with weight w, return the sum of the weights of all edges in the graph's Minimum Spanning Tree (MST).
Input: V = 3, E = 3, Edges = [[0, 1, 5], [1, 2, 3], [0, 2, 1]]
Output: 4

Input: V = 2, E = 1, Edges = [[0 1 5]]
Output: 5 
*/

let spanningTree = function (V, edges) {
  let graph = Array.from({ length: V }, () => []);

  for (let [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  let visited = new Array(V).fill(false);
  let pq = [[0, 0]];
  let cost = 0;
  visitCount = 0;

  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);
    let [currentNode, currentWt] = pq.shift();
    if (visited[currentNode]) continue;
    cost += currentWt;
    visitCount++;
    visited[currentNode] = true;
    if (visitCount === visited.length) return cost;
    for (let [neigbour, neigbourWt] of graph[currentNode]) {
      if (!visited[neigbour]) {
        pq.push([neigbour, neigbourWt]);
      }
    }
  }

  return cost;
};

console.log(
  spanningTree(4, [
    [0, 1, 1],
    [0, 2, 4],
    [1, 2, 2],
    [1, 3, 5],
    [2, 3, 3],
  ]),
);
