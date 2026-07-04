/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let freqS1 = new Array(26).fill(0);
  let freqS2 = new Array(26).fill(0);
  let base = "a".charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    freqS1[s1.charCodeAt(i) - base]++;
    freqS2[s2.charCodeAt(i) - base]++;
  }
  if (freqS1.toString() === freqS2.toString()) return true;
  let start = 0,
    end = s1.length;

  while (end < s2.length) {
    freqS2[s2.charCodeAt(end) - base]++;
    freqS2[s2.charCodeAt(start) - base]--;
    if (freqS1.toString() === freqS2.toString()) return true;
    end++;
    start++;
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
