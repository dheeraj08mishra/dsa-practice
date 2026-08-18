/*
What problem does this solve that Dijkstra's can't? Dijkstra's Algorithm
 has one critical limitation: it breaks when the graph has negative edge weights.
  Bellman-Ford handles negative weights correctly, and can even detect when a negative
   cycle exists (a cycle where the total weight is negative, meaning you could loop forever,
    decreasing "distance" infinitely — a nonsensical scenario Dijkstra's has no way to catch).


    [0,1,4], [0,2,5], [1,2,-3], [2,3,4]. Source = 0. n=4;

     [0, 4, 1, 5]
*/

let BellmanFord = function (n, edges, Source) {
  let dist = new Array(n).fill(Infinity);
  dist[Source] = 0;

  for (let i = 0; i < n - 1; i++) {
    let updated = false;
    for (let [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        updated = true;
      }
    }
    if (!updated) break;
  }

  for (let [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      return -1; // or true/some signal — negative cycle detected
    }
  }

  return dist;
};

console.log(
  BellmanFord(
    4,
    [
      [0, 1, 4],
      [0, 2, 5],
      [1, 2, -3],
      [2, 3, 4],
    ],
    0,
  ),
);
