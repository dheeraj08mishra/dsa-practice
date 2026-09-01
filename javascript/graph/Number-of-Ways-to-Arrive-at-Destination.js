/*
You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections.
The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road
between any two intersections.

You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between
intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection
0 to intersection n - 1 in the shortest amount of time.

Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large,
return it modulo 109 + 7.

Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4
Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
*/

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Helper methods to find parent and child indices
  #getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  #getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  #getRightChildIndex(i) {
    return 2 * i + 2;
  }

  #swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0].element;
  }

  enqueue(element, priority) {
    const node = { element, priority };
    this.heap.push(node);
    this.#bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.heap.length === 1) return this.heap.pop().element;

    const root = this.heap[0].element;
    this.heap[0] = this.heap.pop();
    this.#sinkDown(0);
    return root;
  }

  #bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.#getParentIndex(index);
      if (this.heap[index].priority >= this.heap[parentIndex].priority) break;

      this.#swap(index, parentIndex);
      index = parentIndex;
    }
  }

  #sinkDown(index) {
    const length = this.heap.length;
    while (this.#getLeftChildIndex(index) < length) {
      let smallestChildIndex = this.#getLeftChildIndex(index);
      const rightChildIndex = this.#getRightChildIndex(index);

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex].priority <
          this.heap[smallestChildIndex].priority
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (this.heap[index].priority <= this.heap[smallestChildIndex].priority)
        break;

      this.#swap(index, smallestChildIndex);
      index = smallestChildIndex;
    }
  }
}

var countPaths = function (n, roads) {
  // graph

  let graph = Array.from({ length: n }, () => []);
  for (let [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  // PQ, minWeight, pathCount
  let pq = new MinPriorityQueue((x) => x[0]);
  let minW = new Array(n).fill(Infinity);
  let pathCount = new Array(n).fill(0);
  pq.push([0, 0]);
  minW[0] = 0;
  pathCount[0] = 1;

  // Dijkstra's Algorithm
  while (!pq.isEmpty()) {
    let [currW, curr] = pq.pop();
    for (let [neighbor, neighborW] of graph[curr]) {
      let newW = currW + neighborW;
      // new shortest path
      if (newW < minW[neighbor]) {
        minW[neighbor] = newW;
        pq.push([newW, neighbor]);
        pathCount[neighbor] = pathCount[curr];
      }
      // alternative shortest path
      else if (newW === minW[neighbor]) {
        pathCount[neighbor] =
          (pathCount[curr] + pathCount[neighbor]) % (1e9 + 7);
      }
    }
  }
  return pathCount[n - 1];
};

console.log(
  countPaths(7, [
    [0, 6, 7],
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 3],
    [6, 3, 3],
    [3, 5, 1],
    [6, 5, 1],
    [2, 5, 1],
    [0, 4, 5],
    [4, 6, 2],
  ]),
);
