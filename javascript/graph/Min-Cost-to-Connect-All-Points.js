/*
You are given an array points representing integer coordinates of some points on a 2D-plane,
where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|,
 where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected 
if there is exactly one simple path between any two points.

Example 1:
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: 
We can connect the points as shown above to get the minimum cost of 20.
Notice that there is a unique path between every pair of points.

Example 2:
Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
*/

var minCostConnectPoints = function (points) {
  let edges = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let [x1, y1] = points[i];
      let [x2, y2] = points[j];
      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      edges.push([i, j, dist]);
    }
  }
  return kruskalsMST(points.length, edges);
};

function kruskalsMST(V, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  let cost = 0,
    count = 0;

  let n = V;
  let parent = new Array(n).fill(0);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  for (let [x, y, w] of edges) {
    if (!union(x, y, parent)) {
      cost += w;
      count++;
      if (count === V - 1) break;
    }
  }

  return cost;
}

let find = function (x, parent) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x], parent));
};
let union = function (u, v, parent) {
  let x = find(u, parent);
  let y = find(v, parent);
  if (x === y) return true;

  parent[x] = y;
  return false;
};

console.log(
  minCostConnectPoints([
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
  ]),
);
