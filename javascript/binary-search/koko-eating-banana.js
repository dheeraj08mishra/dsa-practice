/*
Koko the monkey loves bananas. There are n piles of bananas, and she has h hours to eat all of them. Each hour, she picks one pile and eats at most k bananas from it. If the pile has fewer than k bananas, she eats the whole pile and doesn't eat more that hour.
You need to find the minimum eating speed k (bananas per hour) such that she can finish all piles within h hours.
Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23

*/

let minEatingSpeed = function (piles, h) {
  let max = Math.max(...piles);
  let min = 1;
  let ans = max;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let sum = 0;
    for (let i = 0; i < piles.length; i++) {
      sum += Math.ceil(piles[i] / mid);
    }
    if (sum <= h) {
      ans = Math.min(ans, mid);
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return ans;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
