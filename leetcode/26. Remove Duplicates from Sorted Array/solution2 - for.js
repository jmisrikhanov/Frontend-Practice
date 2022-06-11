var removeDuplicates = function (nums) {
  let indexCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[indexCounter] = nums[i];
      indexCounter++;
    }
  }
  return indexCounter;
};

// Runtime: 71 ms, faster than 95.58% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 44.3 MB, less than 87.21% of JavaScript online submissions for Remove Duplicates from Sorted Array.
