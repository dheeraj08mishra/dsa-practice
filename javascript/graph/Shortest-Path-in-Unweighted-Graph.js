/*
Given an undirected graph with V vertices numbered from 0 to V-1 and E edges, where edges[i] = [u, v] denotes an undirected edge between vertex u and vertex v, given two vertices src and dest, find the length of the shortest path from src to dest. If there is no path between src and dest, return -1.

Note: All edges have a unit weight of 1.

Examples :

Input: V = 9, edges[][] = [[0, 1], [0, 3], [1, 2], [3, 4], [4, 5], [2, 6], [5, 6], [6, 7], [6, 8], [7, 8]], src = 0, dest = 8
Output: 4
Explanation: One of the shortest paths from vertex 0 to vertex 8 is 0 -> 1 -> 2 -> 6 -> 8, which contains 4 edges.
*/

let createGraph = function (V, edges) {
  let graph = Array.from({ length: V }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};
let shortestPath = function (V, edges, src, dest) {
  let graph = createGraph(V, edges);
  let distance = new Array(graph.length).fill(Infinity);
  let q = [src];
  distance[src] = 0;
  while (q.length) {
    let current = q.shift();
    for (let neighour of graph[current]) {
      if (distance[neighour] === Infinity) {
        distance[neighour] = distance[current] + 1;
        q.push(neighour);
      }
    }
  }

  return distance[dest] === Infinity ? -1 : distance[dest] - distance[src];
};

console.log(
  shortestPath(
    9,
    [
      [0, 1],
      [0, 3],
      [1, 2],
      [3, 4],
      [4, 5],
      [2, 6],
      [5, 6],
      [6, 7],
      [6, 8],
      [7, 8],
    ],
    0,
    8,
  ),
);

console.log(
  shortestPath(
    4,
    [
      [0, 3],
      [1, 3],
    ],
    3,
    2,
  ),
);
