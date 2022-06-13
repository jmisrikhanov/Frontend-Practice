var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  let i = 0;
  while (
    haystack.substring(i, needle.length + i) !== needle &&
    i <= haystack.length
  ) {
    i++;
  }
  return i > haystack.length ? -1 : i;
};

// Runtime: 90 ms, faster than 34.19% of JavaScript online submissions for Implement strStr().
// Memory Usage: 42.1 MB, less than 53.58% of JavaScript online submissions for Implement strStr().
