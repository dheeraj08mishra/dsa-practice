/*
You're given an array that was originally sorted in ascending order,
 but then rotated at some unknown pivot point. For example, [0,1,2,4,5,6,7]
  rotated at index 3 becomes [4,5,6,7,0,1,2]. You're given this rotated array 
  and a target value — find its index, or return -1 if not present.

0,1,2,4,5,6,7
7,0,1,2,4,5,6
6,7,0,1,2,4,5
5,6,7,0,1,2,4
                4,5,6,7,0,1,2
2,4,5,6,7,0,1
1,2,4,5,6,7,0
*/

var search = function (arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) return mid;
    if (arr[left] <= arr[mid]) {
      // left half is sorted
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right half is sorted
      if (target <= arr[right] && target > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
