/*
Given a Directed Graph with V vertices (Numbered from 0 to V-1) and E edges, check whether it contains any cycle or not.
The graph is represented as a 2D vector edges[][], where each entry edges[i] = [u, v] denotes an edge from vertex u to v.

Examples:

Input: V = 4, edges[][] = [[0, 1], [1, 2], [2, 0], [2, 3]]



Output: true
Explanation: The diagram clearly shows a cycle 0 → 1 → 2 → 0
Input: V = 4, edges[][] = [[0, 1], [0, 2], [1, 2], [2, 3]]


Output: false
Explanation: no cycle in the graph
*/

let createGraph = function (V, edges) {
  let graph = Array.from({ length: V }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    // graph[v].push(u);
  }
  return graph;
};

let isCyclic = function (V, edges) {
  let graph = createGraph(V, edges);
  let visited = new Array(graph.length).fill(false);
  let set = new Set();
  let dfs = function (node, set) {
    visited[node] = true;
    set.add(node);

    for (let neigbour of graph[node]) {
      if (!visited[neigbour]) {
        if (dfs(neigbour, set)) return true;
      } else if (set.has(neigbour)) {
        return true;
      }
    }
    set.delete(node);
    return false;
  };

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      if (dfs(i, set)) return true;
    }
  }
  return false;
};

console.log(
  isCyclic(4, [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 3],
  ]),
);

console.log(
  isCyclic(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
  ]),
);
