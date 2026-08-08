let createGraph = function (edges, nodePresnt) {
  let n = nodePresnt;
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
};

let bfs = function (edges, nodePresnt) {
  edges.sort((a, b) => a[0] - b[0]);

  let graph = createGraph(edges, nodePresnt);
  let visited = new Array(graph.length).fill(false);
  let q = [];
  q.push(0);
  visited[0] = true;

  let result = [0];

  while (q.length) {
    let current = q.shift();

    for (let i = 0; i < graph[current].length; i++) {
      let currentData = graph[current][i];
      if (!visited[currentData]) {
        result.push(currentData);
        q.push(currentData);
        visited[currentData] = true;
      }
    }
  }
  return result;
};

console.log(
  bfs(
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ],
    4,
  ),
);
