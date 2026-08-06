/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below.
 Note that 1 does not map to any letters.

 Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

*/

var letterCombinations = function (digits) {
  let digitMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  let backtrack = function (path, digits, index) {
    if (digits.length === path.length) {
      result.push([...path].join(""));
      return;
    }

    let letter = digitMap[digits[index]];

    for (let j = 0; j < letter.length; j++) {
      path.push(letter[j]);
      backtrack(path, digits, index + 1);
      path.pop();
    }
  };
  backtrack([], digits, 0);
  return result;
};

console.log(letterCombinations("23"));
