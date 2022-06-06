// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
//  * @param {string} s
//  * @return {number}
 */

const isUnique = (s) => {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return false;
    }
    set.add(s[i]);
  }
  return true;
};

var lengthOfLongestSubstring = function (s) {
  // brute force
  let max = 0;
  for (let begin = 0; begin < s.length; begin++) {
    for (let end = begin; end < s.length; end++) {
      const substring = s.substring(begin, end + 1);
      if (isUnique(substring)) {
        // the following code will update max only if substring.length is greater than our current max value
        max = Math.max(max, substring.length); // is the same as above 3 lines of code
        // if(substring.length > max){
        //     max = substring.length
        // }
      }
    }
  }
  return max;
};
