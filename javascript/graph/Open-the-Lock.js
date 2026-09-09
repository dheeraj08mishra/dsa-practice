/*
You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

The lock initially starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

 

Example 1:

Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation: 
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".
Example 2:

Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".
Example 3:

Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: We cannot reach the target without getting stuck.
*/

let findNeighbour = function (combo) {
  let result = [];
  for (let i = 0; i < 4; i++) {
    let digit = parseInt(combo[i]);
    let up = (digit + 1) % 10;
    let down = (digit + 9) % 10;

    let comboup = combo.slice(0, i) + up + combo.slice(i + 1);
    let combodown = combo.slice(0, i) + down + combo.slice(i + 1);
    result.push(comboup, combodown);
  }
  return result;
};

var openLock = function (deadends, target) {
  let q = [];
  q.push("0000");

  let deadendsset = new Set();
  for (let i = 0; i < deadends.length; i++) {
    deadendsset.add(deadends[i]);
  }
  if (deadendsset.has(q[0])) return -1;
  if (target === "0000") return 0;

  let visited = new Set(["0000"]);
  let count = 0;

  while (q.length) {
    let nextArr = [];
    for (let current of q) {
      let neighbors = findNeighbour(current);
      for (let neighbor of neighbors) {
        if (neighbor === target) return count + 1;
        if (!deadendsset.has(neighbor) && !visited.has(neighbor)) {
          nextArr.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
    q = nextArr;
    count++;
  }
  return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
