/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

var backspaceCompare = function (s, t) {
  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < s.length; i++) {
    if (stack1.length === 0 && s[i] === "#") {
      continue;
    }
    if (s[i] !== "#") {
      stack1.push(s[i]);
    } else {
      stack1.pop();
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (stack2.length === 0 && t[i] === "#") {
      continue;
    }
    if (t[i] !== "#") {
      stack2.push(t[i]);
    } else {
      stack2.pop();
    }
  }

  if (stack1.length !== stack2.length) return false;

  let p1 = 0,
    p2 = 0;
  while (p1 < stack1.length) {
    if (stack1[p1] !== stack2[p2]) {
      return false;
    }
    p1++;
    p2++;
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
