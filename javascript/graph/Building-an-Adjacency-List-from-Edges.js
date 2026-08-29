let createGraph = function (numnodes, edges) {
  let n = numnodes;
  const graph = Array.from({ length: n }, () => []);

  // unidirected graph
  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u); // for directed graph this is not needed
  }
  return graph;
};

console.log(
  createGraph(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ]),
);
