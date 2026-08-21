/*
Given an n x n binary matrix grid,
 return the length of the shortest clear path in the matrix.
  If there is no clear path, return -1.

A clear path in a binary matrix is a path from the 
top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path.

Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
*/
var shortestPathBinaryMatrix = function (grid) {
  let n = grid.length;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return -1;
  }

  let q = [[0, 0, 1]];
  grid[0][0] = 1;
  let direction = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
  ];

  while (q.length) {
    let [row, col, dist] = q.shift();
    if (row === n - 1 && col === n - 1) return dist;
    for (let [drow, dcol] of direction) {
      let newRow = drow + row,
        newCol = col + dcol;
      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        grid[newRow][newCol] = 1;
        q.push([newRow, newCol, dist + 1]);
      }
    }
  }
  return -1;
};

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
);
