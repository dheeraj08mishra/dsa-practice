/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

let distance = function (points) {
  return points[0] * points[0] + points[1] * points[1]; /// formula is  √(x1 - x2)2 + (y1 - y2)2
  // but here we are using sort so instead of calculating we can compare directly
};
let kClosest = function (points, k) {
  points.sort((a, b) => distance(a) - distance(b));

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(points[i]);
  }
  return result;
};

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2,
  ),
);
