/*
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive).
 The edges in the graph are represented as a 2D integer array edges,
  where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
  Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
You want to determine if there is a valid path that exists from vertex source to vertex destination.
Given edges and the integers n, source, and destination, return true
 if there is a valid path from source to destination, or false otherwise.

 Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
*/

let createGraph = function (n, edges) {
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

var validPath = function (n, edges, source, destination) {
  let graph = createGraph(n, edges);
  let result = [];

  let visited = new Array(graph.length).fill(false);

  let dfsTraversal = function (node, graph, visited, result) {
    visited[node] = true;
    result.push(node);
    for (let neighbours of graph[node]) {
      if (!visited[neighbours]) {
        dfsTraversal(neighbours, graph, visited, result);
      }
    }
  };

  dfsTraversal(source, graph, visited, result);
  return visited[destination] === true;
};

// for early exit

var validPath = function (n, edges, source, destination) {
  let graph = createGraph(n, edges);
  let result = [];

  let visited = new Array(graph.length).fill(false);

  let dfsTraversal = function (node, graph, visited, destination) {
    visited[node] = true;

    if (node === destination) {
      return true; // found it! signal success immediately
    }

    for (let neighbour of graph[node]) {
      if (!visited[neighbour]) {
        if (dfsTraversal(neighbour, graph, visited, destination)) {
          return true; // a deeper call found it — propagate the success upward
        }
      }
    }

    return false; // exhausted all neighbors from here, destination not found via this path
  };
  return dfsTraversal(source, graph, visited, destination);
  // return false
};
console.log(
  validPath(
    10,
    [
      [2, 9],
      [7, 8],
      [5, 9],
      [7, 2],
      [3, 8],
      [2, 8],
      [1, 6],
      [3, 0],
      [7, 0],
      [8, 5],
    ],
    1,
    0,
  ),
);
