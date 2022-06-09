var isValid = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];

  for (let ch of s) {
    if (hashMap[ch]) {
      // ch is an opening bracket
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      // ch is a closing bracket
      stack.pop();
    } else {
      // ch is a closing bracket and top of the stack doesn't match
      return false;
    }
  }
  return stack.length === 0;
};

// Runtime: 94 ms, faster than 34.23% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.2 MB, less than 66.63% of JavaScript online submissions for Valid Parentheses.
