/*
Plain-English explanation:
You're given an m x n matrix where:

Each row is sorted in ascending order left to right
The first integer of each row is greater than the last integer of the previous row

This means the entire matrix is essentially a sorted array laid out in 2D form. You're given a target value — return true if it exists in the matrix, false otherwise.
*/

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
