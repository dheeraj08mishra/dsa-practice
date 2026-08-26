/*
An alien language uses the lowercase English alphabet, but the order of its letters is unknown.
 You are given an array of strings words[] that is claimed to be sorted
  lexicographically according to the rules of the alien language.

Determine the order of the letters in the alien alphabet. If a valid ordering exists, 
return a string containing all unique letters in lexicographical order according to
the alien language. Otherwise, return an empty string.

If a string s1 is lexicographically smaller than a string s2, and the first position
 at which they differ contains letter a in s1 and letter b in s2, then a must appear before
  b in the alien alphabet.

Note: The driver code prints true if the returned order is valid; otherwise, it prints false

Input: words[] = ["baa", "abcd", "abca", "cab", "cad"]
Output: true
Explanation: A possible correct order of letters in the alien dictionary is "bdac".
The pair "baa" and "abcd" suggests 'b' appears before 'a' in the alien dictionary.
The pair "abcd" and "abca" suggests 'd' appears before 'a' in the alien dictionary.
The pair "abca" and "cab" suggests 'a' appears before 'c' in the alien dictionary.
The pair "cab" and "cad" suggests 'b' appears before 'd' in the alien dictionary.
So, 'b' -> 'd' -> 'a' -> 'c' is a valid ordering.
Input: words[] = ["caa", "aaa", "aab"]
Output: true
Explanation: A possible correct order of letters in the alien dictionary is "cab".
The pair "caa" and "aaa" suggests 'c' appears before 'a'.
The pair "aaa" and "aab" suggests 'a' appear before 'b' in the alien dictionary. 
So, 'c' -> 'a' -> 'b' is a valid ordering.
Input: words[] = ["ab", "cd", "ef", "ad"]
Output: ""
Explanation: No valid ordering of letters is possible.
The pair "ab" and "ef" suggests "a" appears before "e".
The pair "ef" and "ad" suggests "e" appears before "a", which contradicts the ordering rules.
*/

var alienOrder = function (words) {
  // Step 1: collect all unique letters as nodes
  let graph = new Map();
  for (let word of words) {
    for (let char of word) {
      if (!graph.has(char)) graph.set(char, new Set());
    }
  }

  // Step 2: build edges by comparing adjacent words
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i],
      w2 = words[i + 1];

    let minLen = Math.min(w1.length, w2.length);
    let foundDiff = false;

    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        graph.get(w1[j]).add(w2[j]); // edge: w1[j] -> w2[j]
        foundDiff = true;
        break;
      }
    }
    if (!foundDiff && w1.length > w2.length) {
      return "";
    }
  }

  // Step 3: topological sort
  let inDegree = new Map();
  for (let char of graph.keys()) inDegree.set(char, 0);
  for (let [char, neighbors] of graph) {
    for (let neighbor of neighbors) {
      inDegree.set(neighbor, inDegree.get(neighbor) + 1);
    }
  }

  let queue = [];
  for (let [char, degree] of inDegree) {
    if (degree === 0) queue.push(char);
  }
  let result = [];
  while (queue.length) {
    let char = queue.shift();
    result.push(char);
    for (let neighbor of graph.get(char)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }

  // if not all letters were included, there's a cycle -> invalid
  return result.length === graph.size ? result.join("") : "";
};

console.log(alienOrder(["baa", "abcd", "abca", "cab", "cad"]));
