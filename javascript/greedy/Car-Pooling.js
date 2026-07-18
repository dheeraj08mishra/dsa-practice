/*
There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).
You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.
Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

Example 1:
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false

Example 2:
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
*/

var carPooling = function (trips, capacity) {
  let timeLine = new Array(1001).fill(0);
  for (let i = 0; i < trips.length; i++) {
    let currentTrip = trips[i];
    timeLine[currentTrip[1]] += currentTrip[0];
    timeLine[currentTrip[2]] -= currentTrip[0];
  }
  let currentSeating = 0;
  for (let i = 0; i < timeLine.length; i++) {
    currentSeating += timeLine[i];
    if (currentSeating > capacity) {
      return false;
    }
  }
  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4,
  ),
);
