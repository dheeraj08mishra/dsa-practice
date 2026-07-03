/*
You have a conveyor belt with packages, each with a weight given in weights array. You need to ship all packages in order (you can't rearrange them) within d days. Each day, you load packages onto a ship — but the ship has a maximum weight capacity, and you can't exceed it in a single day. Packages must be loaded in the order they appear.
Find the minimum ship capacity that allows all packages to be shipped within d days.

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
Example 2:

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6
Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

*/

var shipWithinDays = function (weights, days) {
  let min = Math.max(...weights);
  let max = 0;
  ans = Infinity;

  for (let i = 0; i < weights.length; i++) {
    max += weights[i];
  }
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < weights.length; i++) {
      sum += weights[i];
      if (sum > mid) {
        count++;
        sum = weights[i];
      }
    }
    count = count + 1; /// for last chunk
    if (count <= days) {
      ans = Math.min(ans, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return ans;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
