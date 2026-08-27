/*
Problem: N cities, connections=[[city1,city2,cost]] (the given possible connections,
 unlike Min Cost to Connect All Points where you had to generate a complete graph yourself).
  Find the minimum total cost to connect all cities, or -1 if it's impossible.

N=3, connections=[[1,2,5],[1,3,6],[2,3,1]] → 6
*/

let minimumCost = function (n, connections) {
  connections.sort((a, b) => a[2] - b[2]);
  let cost = 0,
    count = 0;

  let parent = new Array(n + 1).fill(0);

  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  for (let [x, y, w] of connections) {
    if (!union(x, y, parent)) {
      cost += w;
      count++;
      if (count === n - 1) break;
    }
  }
  return count === n - 1 ? cost : -1;
};

let find = function (x, parent) {
  if (x === parent[x]) return x;
  return (parent[x] = find(parent[x], parent));
};

let union = function (x, y, parent) {
  let Fx = find(x, parent);
  let Fy = find(y, parent);
  if (Fx === Fy) return true;
  parent[Fx] = Fy;
  return false;
};

console.log(
  minimumCost(3, [
    [1, 2, 5],
    [1, 3, 6],
    [2, 3, 1],
  ]),
);
