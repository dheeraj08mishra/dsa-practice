/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
*/

var decodeString = function (s) {
  let stack = [];
  let currentString = "",
    currentNo = 0;
  for (let i = 0; i < s.length; i++) {
    if (["[", "]"].includes(s[i])) {
      if (s[i] == "[") {
        stack.push([currentString, currentNo]);
        currentString = "";
        currentNo = "";
      } else {
        let top = stack.pop();
        let [prevString, num] = top;
        currentString = prevString + currentString.repeat(Number(num));
      }
    } else {
      if ("a" <= s[i] && s[i] <= "z") {
        currentString += s[i];
      }
      if ("0" <= s[i] && s[i] <= "9") {
        currentNo += s[i];
      }
    }
  }
  return currentString;
};
// console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("100[leetcode]"));
