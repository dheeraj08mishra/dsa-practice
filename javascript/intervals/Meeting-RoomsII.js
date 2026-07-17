/*
Problem: Given an array of meeting time intervals, find the minimum number of conference rooms required to hold all meetings (since overlapping meetings need separate rooms).
intervals = [[0,30],[5,10],[15,20]] → 2
(Reasoning: [0,30] is happening the entire time. [5,10] and [15,20] both overlap with [0,30], but not with each other — so you need at most 2 rooms simultaneously: one for [0,30], and one shared between [5,10] and [15,20] since they don't overlap each other.)
intervals = [[7,10],[2,4]] → 1 (no overlap at all, one room suffices)
*/

let meetingRoomsII = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let startTime = [],
    endTime = [];

  for (let i = 0; i < intervals.length; i++) {
    startTime.push(intervals[i][0]);
  }
  intervals.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < intervals.length; i++) {
    endTime.push(intervals[i][1]);
  }

  let start = 0,
    end = 0,
    count = 0,
    maxCount = 1;

  while (start < startTime.length) {
    if (startTime[start] < endTime[end]) {
      count++;
      start++;
    } else {
      count--;
      end++;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

console.log(
  meetingRoomsII([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);

console.log(
  meetingRoomsII([
    [7, 10],
    [2, 4],
  ]),
);
