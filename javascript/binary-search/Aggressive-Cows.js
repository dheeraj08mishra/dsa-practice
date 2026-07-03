/*
You're given n stalls positioned along a straight line (given as an array of positions), 
and c cows to place in those stalls. The cows are aggressive and will fight if placed too close together.
You want to place all c cows in stalls such that the minimum distance between any two cows is as large as possible
— maximizing the "breathing room" between the most closely-placed pair.
Example: stalls = [1,2,4,8,9], c = 3 → 3
(Place cows at positions 1, 4, 9 — distances are 3 and 5, minimum is 3.
No other placement gives a larger minimum distance.)

*/

let aggressiveCows = function (stall, k) {
  let low = 1;
  stall.sort((a, b) => a - b);
  let high = stall[stall.length - 1] - stall[0];
  let ans = high;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canPlaceCows(mid, stall, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
};

let canPlaceCows = function (mid, stall, k) {
  let placed = 1,
    lastplacedValue = stall[0];
  for (let i = 1; i < stall.length; i++) {
    if (stall[i] - lastplacedValue >= mid) {
      placed++;
      lastplacedValue = stall[i];

      if (placed === k) {
        return true;
      }
    }
  }
  return false;
};

console.log(aggressiveCows([1, 2, 4, 8, 9], 3));
