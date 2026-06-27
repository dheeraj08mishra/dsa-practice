/*
You're given a sorted array of integers, an integer k, and a target value x. You need to find the k closest elements to x in the array, and return them sorted in ascending order.
"Closest" is measured by absolute difference from x. If two elements are equally close (tied), the smaller value should be preferred.
Example: arr = [1,2,3,4,5], k = 4, x = 3 → [1,2,3,4]
*/

let findClosestElements = function (arr, k, x) {
  // brute force approach
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push([Math.abs(arr[i] - x), arr[i]]);
  }
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let final = [];
  for (let i = 0; i < k; i++) {
    final.push(result[i][1]);
  }
  return final;
};
