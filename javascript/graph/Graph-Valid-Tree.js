/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
 write a function to check whether these edges make up a valid tree.

 Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
*/

let createGraph = function (n, edges) {
  let graph = Array.from({ length: n }, () => []);
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

let validTree = function (n, edges) {
  if (edges.length !== n - 1) return false;
  let graph = createGraph(n, edges);
  let visited = new Array(graph.length).fill(false);

  let dfs = function (current) {
    visited[current] = true;

    for (let neigbour of graph[current]) {
      if (!visited[neigbour]) {
        dfs(neigbour);
      }
    }
  };

  dfs(0);

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === false) {
      return false;
    }
  }
  return true;
};

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ]),
);

console.log(
  validTree(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ]),
);
