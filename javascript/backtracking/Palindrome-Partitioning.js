/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.


*/

let isPalinDrome = function (string) {
  let start = 0,
    end = string.length - 1;

  while (start < end) {
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

var partition = function (s) {
  let result = [];

  let backTrack = function (path, remainString) {
    if (!remainString.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < remainString.length; i++) {
      let rem = remainString.slice(0, i + 1);
      path.push(rem);
      if (isPalinDrome(rem)) {
        backTrack(path, remainString.slice(i + 1));
      }
      path.pop();
    }
  };
  backTrack([], s);
  return result;
};

console.log(partition("aab"));
