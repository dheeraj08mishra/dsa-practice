/*
You're given a string s. You need to find the length of the longest substring that contains no repeating characters — meaning every character within that substring appears at most once.
Example: s = "abcabcbb" → 3 (the answer is "abc", with length 3 — once you hit the second a, you'd be repeating)

Example: s = "bbbbb" → 1 (the longest substring without repeats is just "b")

Example: s = "pwwkew" → 3 (the answer is "wke", length 3 — note "pwke" is technically a subsequence, not a substring, since it's not contiguous, so it doesn't count)
*/

let lengthOfLongestSubstring = function (s) {
  // brute force solution, O(n^3) time complexity
  //   let maxLength = 0;
  //   for (let i = 0; i < s.length; i++) {
  //     for (let j = i; j < s.length; j++) {
  //       let substring = s.slice(i, j + 1);
  //       let set = new Set(substring);
  //       if (set.size === substring.length) {
  //         maxLength = Math.max(maxLength, substring.length);
  //       }
  //     }
  //   }
  //   return maxLength;

  // optimized solution, O(n) time complexity

  let map = new Map();
  let maxLength = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]) + 1, start);
    }
    map.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
};
