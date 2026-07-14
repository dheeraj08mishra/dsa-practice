/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
*/

var orangesRotting = function (grid) {
  let queue = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }
  let minute = 0;
  while (queue.length) {
    let size = queue.length;
    let anyRotten = false;
    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift();
      if (row > 0 && grid[row - 1][col] === 1) {
        grid[row - 1][col] = 2;
        queue.push([row - 1, col]);
        anyRotten = true;
      }
      if (row < grid.length - 1 && grid[row + 1][col] === 1) {
        grid[row + 1][col] = 2;
        queue.push([row + 1, col]);
        anyRotten = true;
      }
      if (col > 0 && grid[row][col - 1] === 1) {
        grid[row][col - 1] = 2;
        queue.push([row, col - 1]);
        anyRotten = true;
      }
      if (col < grid[row].length - 1 && grid[row][col + 1] === 1) {
        grid[row][col + 1] = 2;
        queue.push([row, col + 1]);
        anyRotten = true;
      }
    }
    if (anyRotten) minute++;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return minute;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  console.log(
    orangesRotting([
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ]),
  ),
);
