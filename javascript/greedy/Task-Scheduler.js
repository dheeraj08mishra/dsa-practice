/*
You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Example 2:
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:
Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
*/

var leastInterval = function (tasks, n) {
  let maxFreqMap = new Map();
  for (let i = 0; i < tasks.length; i++) {
    maxFreqMap.set(tasks[i], (maxFreqMap.get(tasks[i]) || 0) + 1);
  }
  let maxFreq = 0;
  for (let i = 0; i < tasks.length; i++) {
    maxFreq = Math.max(maxFreq, maxFreqMap.get(tasks[i]));
  }
  let maxFreqCount = 0;
  for (const [key, value] of maxFreqMap) {
    if (value === maxFreq) maxFreqCount++;
  }

  let maxCycle = (n + 1) * (maxFreq - 1) + maxFreqCount;
  return Math.max(maxCycle, tasks.length);
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3));
