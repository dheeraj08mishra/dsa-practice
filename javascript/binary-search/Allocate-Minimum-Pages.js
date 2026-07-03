/*
Given an array arr[] of integers, where each element arr[i] represents the number of pages in the i-th book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

Each student receives atleast one book.
Each student is assigned a contiguous sequence of books.
No book is assigned to more than one student.
All books must be allocated.
The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum. If it is not possible to allocate books to all students, return -1;

Note: Test cases are generated such that the answer always fits in a 32-bit integer.

Examples:

Input: arr[] = [12, 34, 67, 90], k = 2. ///
Output: 113
Explanation: Allocation can be done in following ways:
=> [12] and [34, 67, 90] Maximum Pages = 191
=> [12, 34] and [67, 90] Maximum Pages = 157
=> [12, 34, 67] and [90] Maximum Pages = 113.
The third combination has the minimum pages assigned to a student which is 113.
Input: arr[] = [15, 17, 20], k = 5
Output: -1
Explanation: Since there are more students than total books, it's impossible to allocate a book to each student.

*/

let findPages = function (arr, k) {
  if (arr.length < k) return -1;
  let low = Math.max(...arr);
  let sum = 0;
  let ans = Infinity;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum += element;
  }
  let high = sum;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (allocationPossible(mid, arr, k)) {
      ans = Math.min(mid, ans);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans === Infinity ? -1 : ans;
};

let allocationPossible = function (mid, arr, k) {
  let count = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) return false;
    currentSum = arr[i] + currentSum;

    if (currentSum > mid) {
      count++;
      currentSum = arr[i];
    }
  }
  count++; // for last chunk;

  return count <= k;
};

console.log(findPages([13, 31, 37, 45, 46, 54, 55, 63, 73, 84, 85, 9], 9));
console.log(findPages([15, 17, 20], 5));
