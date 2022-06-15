var maxSubArray = function (nums) {
  let solution = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
};

// Runtime: 92 ms, faster than 80.47% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 49.6 MB, less than 98.63% of JavaScript online submissions for Maximum Subarray.
