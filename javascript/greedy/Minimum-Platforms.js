/*
Given arrival arr[] and departure dep[] times of trains on the same day, 
find the minimum number of platforms needed so that no train waits.
A platform cannot serve two trains at the same time; if a train arrives before another departs, an extra platform is needed.
Note: Time intervals are in the 24-hour format (HHMM) , where the first two characters represent hour (between 00 to 23 ) and the last two characters represent minutes (this will be <= 59 and >= 0). Leading zeros for hours less than 10 are optional (e.g., 0900 is the same as 900).

Examples:
Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
Output: 3
Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.
Input: arr[] = [900, 1235, 1100], dep[] = [1000, 1240, 1200]
Output: 1
Explanation: All train times are mutually exclusive. So we need only one platform.
Input: arr[] = [1000, 935, 1100], dep[] = [1200, 1240, 1130]
Output: 3
Explanation: All 3 trains have to be there from 11:00 to 11:30
*/

let minPlatform = function (arrival, departure) {
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);
  let count = 0,
    startArrival = 0,
    startdept = 0,
    maxCount = 0;

  while (startArrival < arrival.length) {
    if (arrival[startArrival] <= departure[startdept]) {
      count++;
      startArrival++;
    } else {
      count--;
      startdept++;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

console.log(minPlatform([900, 1235, 1100], [1000, 1240, 1200]));
console.log(
  minPlatform(
    [900, 940, 950, 1100, 1500, 1800],
    [910, 1200, 1120, 1130, 1900, 2000],
  ),
);
console.log(minPlatform([1000, 935, 1100], [1200, 1240, 1130]));
