/*
A transformation sequence from word beginWord to word endWord
using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList,
return the number of words in the shortest transformation sequence from beginWord to endWord,
or 0 if no such sequence exists.

Example 1:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

Example 2:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

*/

var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }
  if (!wordSet.has(endWord)) return 0;

  let q = [beginWord];
  let step = 1;

  while (q.length) {
    let nextArr = [];
    for (let current of q) {
      if (current === endWord) return step;
      for (let j = 0; j < current.length; j++) {
        for (let i = 0; i < 26; i++) {
          const character = String.fromCharCode(97 + i);
          let prev = current.slice(0, j);
          let next = current.slice(j + 1);
          let newword = prev + character + next;

          if (wordSet.has(newword)) {
            nextArr.push(newword);
            wordSet.delete(newword);
          }
        }
      }
    }
    q = nextArr;
    step++;
  }

  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
);
