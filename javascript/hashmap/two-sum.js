//Two Sum (JavaScript)
/* Plain-English explanation:
You're given an array of numbers and a target sum. You need to find the indices of two numbers in the array 
that add up exactly to the target. You can assume exactly one valid answer exists, and you can't use the same element twice.
Example: nums = [2, 7, 11, 15], target = 9 → answer: [0, 1] (because 2 + 7 = 9)
Hint 1 (toward brute-force):
Think about the most direct way to check every possible pair of numbers in the array. What if, for each number, you simply looked at every other number after it and checked if the two together hit the target?
*/

let twoSum = function (arr, target) {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }

  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3], 6)); // []
