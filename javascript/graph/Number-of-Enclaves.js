/*
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally)
 land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off
 the boundary of the grid in any number of moves.

Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed
 because its on the boundary.

 Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.

*/

var numEnclaves = function (grid) {
  let ans = 0;
  let m = grid.length,
    n = grid[0].length;

  let dfs = function (row, col) {
    if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 0)
      return;

    grid[row][col] = 0;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        grid[i][j] === 1 &&
        (i === 0 || j === 0 || i === m - 1 || j === n - 1)
      ) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        ans++;
      }
    }
  }
  return ans;
};

console.log(
  numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]),
);
