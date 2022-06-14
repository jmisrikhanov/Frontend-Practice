var maxSubArray = function (nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
};

// Runtime: 85 ms, faster than 91.69% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.4 MB, less than 42.63% of JavaScript online submissions for Maximum Subarray.
