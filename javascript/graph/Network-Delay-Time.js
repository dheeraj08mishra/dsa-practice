/*
You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

 

Example 1:


Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
 
*/
var networkDelayTime = function (times, n, k) {
  let adjList = Array.from({ length: n + 1 }, () => []);
  let dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  let minHeap = [[0, k]];
  for (let [u, v, w] of times) {
    adjList[u].push([v, w]);
  }

  while (minHeap.length) {
    minHeap.sort((a, b) => b[0] - a[0]);
    let [d, node] = minHeap.pop();

    if (d > dist[node]) continue;
    for (let [neighour, w] of adjList[node]) {
      if (dist[node] + w < dist[neighour]) {
        dist[neighour] = dist[node] + w;
        minHeap.push([dist[neighour], neighour]);
      }
    }
  }

  let res = Math.max(...dist.slice(1));

  return res === Infinity ? -1 : res;
};

console.log(
  networkDelayTime(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ),
);
