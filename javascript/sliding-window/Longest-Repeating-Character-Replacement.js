/*
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

let characterReplacement = function (s, k) {
  // brute force solution, O(n^3) time complexity

  //   let maxLength = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     for (j = i; j < s.length; j++) {
  //       let substring = s.slice(i, j + 1);
  //       let map = new Map();
  //       for (let i = 0; i < substring.length; i++) {
  //         map.set(substring[i], (map.get(substring[i]) || 0) + 1);
  //       }
  //       let maxFrequency = Math.max(...map.values());

  //       if (substring.length - maxFrequency <= k) {
  //         maxLength = Math.max(maxLength, substring.length);
  //       }
  //     }
  //   }

  //   return maxLength;

  // optimized solution, O(n) time complexity
  let map = new Map();
  let start = 0,
    max = 0,
    maxFrequency = 0;

  for (let end = 0; end < s.length; end++) {
    map.set(s[end], (map.get(s[end]) || 0) + 1);
    maxFrequency = Math.max(map.get(s[end]), maxFrequency);
    let currentSubStringLength = end - start + 1;
    while (currentSubStringLength - maxFrequency > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
      currentSubStringLength = end - start + 1;
    }

    max = Math.max(max, currentSubStringLength);
  }

  return max;
};

console.log(characterReplacement("ABBB", 0)); // → 3
// console.log(characterReplacement("ABABABAB", 1)); // → 3
