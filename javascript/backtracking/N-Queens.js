/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard
such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.
You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement,
where 'Q' and '.' both indicate a queen and an empty space, respectively.


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

*/

var solveNQueens = function (n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board[i] = [];
    for (let j = 0; j < n; j++) {
      board[i][j] = ".";
    }
  }

  let result = [];

  let transformBoard = function (board) {
    let res = [];
    for (let i = 0; i < board.length; i++) {
      res.push(board[i].join(""));
    }
    result.push(res);
  };

  let backTrack = function (row, colSet, diagSet, antiDiagSet) {
    if (row === n) {
      transformBoard(board);
      return;
    }

    for (let col = 0; col < n; col++) {
      let diag = row - col;
      let antiDiag = row + col;

      if (colSet.has(col) || diagSet.has(diag) || antiDiagSet.has(antiDiag))
        continue;
      board[row][col] = "Q";
      colSet.add(col);
      diagSet.add(diag);
      antiDiagSet.add(antiDiag);

      backTrack(row + 1, colSet, diagSet, antiDiagSet);
      board[row][col] = ".";
      colSet.delete(col);
      diagSet.delete(diag);
      antiDiagSet.delete(antiDiag);
    }
  };

  backTrack(0, new Set(), new Set(), new Set());
  return result;
};
console.log(solveNQueens(4));
