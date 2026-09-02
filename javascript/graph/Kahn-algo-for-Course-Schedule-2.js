let createGraph = function (n, edges) {
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[v].push(u);
  }
  return graph;
};

var findOrder = function (numCourses, prerequisites) {
  let graph = createGraph(numCourses, prerequisites);
  let inDegree = new Array(graph.length).fill(0);
  for (let i = 0; i < graph.length; i++) {
    let current = graph[i];
    for (let j = 0; j < current.length; j++) {
      inDegree[current[j]]++;
    }
  }

  let q = [],
    result = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] == 0) {
      q.push(i);
    }
  }
  while (q.length) {
    let current = q.shift();
    result.push(current);
    for (let neigbour of graph[current]) {
      inDegree[neigbour]--;
      if (inDegree[neigbour] === 0) {
        q.push(neigbour);
      }
    }
  }
  return result.length < numCourses ? [] : result;
};

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
