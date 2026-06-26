/*
You're given a string. You need to determine if it's a palindrome, considering only alphanumeric characters (letters and digits) and ignoring case. That means spaces, punctuation, and symbols should be skipped entirely when checking.
Example: s = "A man, a plan, a canal: Panama" → true (ignoring punctuation/case, it reads the same forwards and backwards: "amanaplanacanalpanama")

Example: s = "race a car" → false
*/

let isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  const isAlphaNumeric = (c) => {
    return (
      (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
    );
  };
  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};
