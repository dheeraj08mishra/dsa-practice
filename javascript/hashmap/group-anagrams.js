/*
You're given an array of strings. You need to group all the strings that are anagrams of each other into separate lists, and return all those groups together.
Example: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]

(order of groups, and order within groups, doesn't matter)
*/

let groupAnagrams = function (strs) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(strs[i]);
    } else {
      map.set(sorted, [strs[i]]);
    }
  }
  return Array.from(map.values());
};
