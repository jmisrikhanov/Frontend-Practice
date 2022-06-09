var isValid = function (s) {
  const obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] !== obj[stack.pop()]) {
      return false;
    }
  }
  // stack.length === 0 is true
  return stack.length === 0;
};

// Runtime: 87 ms, faster than 44.38% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.3 MB, less than 56.49% of JavaScript online submissions for Valid Parentheses.
