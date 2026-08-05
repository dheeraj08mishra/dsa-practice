/*
Given an m x n grid of characters board and a string word, 
return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
 where adjacent cells are horizontally or vertically neighboring.
  The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
*/

var exist = function (board, word) {
  let rowIndex = -1;
  let colIndex = -1;
  let rows = board.length;
  let cols = board[0].length;
  let found = false;

  let backTrack = function (row, col, index) {
    if (index === word.length) {
      found = true;
      return;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    )
      return;

    let temp = board[row][col];
    board[row][col] = "#";
    backTrack(row + 1, col, index + 1);
    backTrack(row - 1, col, index + 1);
    backTrack(row, col + 1, index + 1);
    backTrack(row, col - 1, index + 1);
    board[row][col] = temp;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        backTrack(i, j, 0);
        if (found) return true;
      }
    }
  }
  return found;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ),
);
