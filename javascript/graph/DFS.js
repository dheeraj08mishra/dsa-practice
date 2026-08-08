let createGraph = function (nodePresent, edges) {
  let n = nodePresent;
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

let dfsTraversal = function (adjList) {
  //   let graph = createGraph(nodePresent, edges);
  let visited = new Array(adjList.length).fill(false);
  let result = [];

  let dfs = function (node, graph, visited, result) {
    visited[node] = true;
    result.push(node);

    for (let neighour of graph[node]) {
      if (!visited[neighour]) {
        dfs(neighour, graph, visited, result);
      }
    }
  };

  dfs(0, adjList, visited, result);
  return result;
};

console.log(
  dfsTraversal([
    [1, 2],
    [0, 3],
    [0, 3],
    [1, 2],
  ]),
);
