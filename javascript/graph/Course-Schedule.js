/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

let createGraph = function (V, edges) {
  let graph = Array.from({ length: V }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
  }
  return graph;
};

var canFinish = function (numCourses, prerequisites) {
  let graph = createGraph(numCourses, prerequisites);

  let visited = new Array(graph.length).fill(false);
  let set = new Set();

  let cyclic = isCyclic(visited, set, graph);

  return !cyclic;
};
let isCyclic = function (visited, set, graph) {
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
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
);

console.log(canFinish(2, [[1, 0]]));
