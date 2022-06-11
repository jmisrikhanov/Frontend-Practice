var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if (nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] = nums[pointer2];
    }
  }
  return pointer1 + 1;
};

// Runtime: 110 ms, faster than 53.84% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.1 MB, less than 97.46% of JavaScript online submissions for Remove Duplicates from Sorted Array.
