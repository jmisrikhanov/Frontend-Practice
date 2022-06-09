var isValid = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  let heap = [];
  for (let char of s) {
    if (hashMap[char]) {
      heap.push(hashMap[char]);
    } else {
      // pop returns the last element
      if (heap.pop() !== char) return false;
    }
  }

  return !heap.length;
};

// Runtime: 73 ms, faster than 69.41% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.2 MB, less than 66.63% of JavaScript online submissions for Valid Parentheses.
