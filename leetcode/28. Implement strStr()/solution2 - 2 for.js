var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // check if match
    let j = 0;
    for (j; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) break;
    }
    // if match return i
    if (j === needle.length) return i;
  }
  return -1;
};
// Runtime: 90 ms, faster than 34.19% of JavaScript online submissions for Implement strStr().
// Memory Usage: 41.3 MB, less than 98.53% of JavaScript online submissions for Implement strStr().
