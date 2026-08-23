/*
You are a hiker preparing for an upcoming hike. You are given heights,
 a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col).
  You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1)
   (i.e., 0-indexed). You can move up, down, left, or right,
    and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.


Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5]
*/

var minimumEffortPath = function (heights) {
  let row = heights.length,
    col = heights[0].length;

  let effort = Array.from({ length: row }, () => new Array(col).fill(Infinity));
  effort[0][0] = 0;
  let pq = [[0, 0, 0]]; // [effort, row,col]

  let direction = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  while (pq.length) {
    pq.sort((a, b) => b[0] - a[0]);
    let [currentEffort, currentRow, currentCol] = pq.pop();
    if (currentRow === row - 1 && currentCol === col - 1) return currentEffort;
    if (currentEffort > effort[currentRow][currentCol]) continue;
    for (let [dr, dc] of direction) {
      let newRow = dr + currentRow,
        newCol = dc + currentCol;

      if (newRow < 0 || newCol < 0 || newRow >= row || newCol >= col) continue;

      let edgeWeight = Math.abs(
        heights[currentRow][currentCol] - heights[newRow][newCol],
      );
      let newEffort = Math.max(currentEffort, edgeWeight); // MAX, not sum

      if (newEffort < effort[newRow][newCol]) {
        effort[newRow][newCol] = newEffort;
        pq.push([newEffort, newRow, newCol]);
      }
    }
  }
  return effort[row - 1][col - 1];
};

console.log(
  minimumEffortPath([
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
  ]),
);

console.log(minimumEffortPath([[1, 10, 6, 7, 9, 10, 4, 9]]));
