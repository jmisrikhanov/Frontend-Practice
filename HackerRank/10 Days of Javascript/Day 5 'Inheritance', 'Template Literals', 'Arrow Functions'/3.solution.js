/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i] * 2);
    } else {
      newArr.push(nums[i] * 3);
    }
  }
  return newArr;
}

// method 2:
function modifyArray(nums) {
  return (nums || []).map((num) => num * (num % 2 === 0 ? 2 : 3));
}
