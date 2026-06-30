/*Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string

Example: s = "ADOBECODEBANC", t = "ABC" → "BANC" (this is the shortest substring of s containing at least one A, one B, and one C)

*/

let minWindow = function (s, t) {
  // brute force
  //   let minSubstring = "";
  //   let mapt = new Map();

  //   for (let j = 0; j < t.length; j++) {
  //     mapt.set(t[j], (mapt.get(t[j]) || 0) + 1);
  //   }
  //   for (let i = 0; i < s.length; i++) {
  //     let substringmap = new Map();

  //     for (let j = i; j < s.length; j++) {
  //       substringmap.set(s[j], (substringmap.get(s[j]) || 0) + 1);
  //       let allpresent = true;
  //       if (j - i + 1 >= t.length) {
  //         for (let [char, count] of mapt) {
  //           if ((substringmap.get(char) || 0) < count) {
  //             allpresent = false;
  //             break;
  //           }
  //         }

  //         if (allpresent) {
  //           if (minSubstring === "" || j - i + 1 < minSubstring.length) {
  //             minSubstring = s.slice(i, j + 1);
  //           }
  //           if (j - i + 1 >= minSubstring.length) break;
  //         }
  //       }
  //     }
  //   }
  //   return minSubstring;

  let minSubstring = "";
  let mapt = new Map();

  for (let j = 0; j < t.length; j++) {
    mapt.set(t[j], (mapt.get(t[j]) || 0) + 1);
  }

  let left = 0,
    matched = 0;
  let window_map = new Map();

  for (let right = 0; right < s.length; right++) {
    window_map.set(s[right], (window_map.get(s[right]) || 0) + 1);

    if (mapt.has(s[right]) && window_map.get(s[right]) === mapt.get(s[right])) {
      matched++;
    }

    while (matched === mapt.size) {
      if (minSubstring === "" || right - left + 1 < minSubstring.length) {
        minSubstring = s.slice(left, right + 1);
      }
      window_map.set(s[left], window_map.get(s[left]) - 1);
      if (mapt.has(s[left]) && window_map.get(s[left]) < mapt.get(s[left])) {
        matched--;
      }
      left++;
    }
  }
  return minSubstring;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
//console.log(minWindow("a", "a"));
