/*
Given an adjacency list adj[][] representing an undirected graph,
 determine whether the graph contains a cycle/loop or not.
A cycle is a path that starts and ends at the same vertex without repeating any edge.

Input: adj[][]= [[1, 2], [0, 2], [0, 1, 3], [2]]
Output: true
Explanation: There is a cycle 0 → 2 → 1  → 0

Input: adj[][] = [[1], [0, 2], [1, 3], [2]] 
Output: false
Explanation: There is no cycle in the given graph.
*/

function isCycle(adj) {
  let V = adj.length;
  let visited = new Array(V).fill(false);

  for (let u = 0; u < V; u++) {
    if (!visited[u]) {
      if (dfs(u, visited, adj, -1)) return true;
    }
  }
  return false;
}

let dfs = function (current, visited, graph, parent) {
  visited[current] = true;

  for (let neigbour of graph[current]) {
    if (!visited[neigbour]) {
      if (dfs(neigbour, visited, graph, current)) return true;
    } else if (neigbour !== parent) {
      return true;
    }
  }
  return false;
};

console.log(isCycle([[1, 2], [0, 2], [0, 1, 3], [2]]));
