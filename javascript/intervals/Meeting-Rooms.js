/*
Problem: Given an array of meeting time intervals [[start1,end1],[start2,end2],...],
 determine if a person could attend all meetings — meaning no two meetings overlap.
intervals = [[0,30],[5,10],[15,20]] → false (meeting [0,30] overlaps with both [5,10] and [15,20])
intervals = [[7,10],[2,4]] → true (no overlap — [2,4] ends before [7,10] starts)
*/

let possibleAllMeeting = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    let current = intervals[i];
    let next = intervals[i + 1];
    if (current[1] > next[0]) {
      return false;
    }
  }
  return true;
};

console.log(
  possibleAllMeeting([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
console.log(
  possibleAllMeeting([
    [7, 10],
    [2, 4],
  ]),
);
