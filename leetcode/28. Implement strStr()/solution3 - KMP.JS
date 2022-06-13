// KMP Pattern Matching

var strStr = function (haystack, needle) {
  if (haystack === "") return 0;
  const prefixTable = buildPrefixTable(needle);
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i += 1;
      j += 1;
    } else if (j > 0) {
      j = prefixTable[j - 1];
    } else {
      i += 1;
    }
  }
  return j === needle.length ? i - j : -1;
};

function buildPrefixTable(s) {
  const table = [0];
  let i = 1;
  let j = 0; // length of repeating prefix and suffix
  while (i < s.length) {
    if (s[i] === s[j]) {
      j += 1;
      table[i] = j;
      i += 1;
    } else if (j > 0) {
      j = table[j - 1];
    } else {
      table[i] = 0;
      i += 1;
    }
  }
  return table;
}
