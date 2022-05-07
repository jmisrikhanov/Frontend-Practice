// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//************************Solution*************************************
var twoSum = function (nums, target) {
  // Array to store the result
  result = [];
  // Map to store the difference and its index
  index_map = new Map();
  // Loop for each element in the array
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (index_map.has(difference)) {
      result[0] = i;
      result[1] = index_map.get(difference);
      break;
    } else {
      index_map.set(nums[i], i);
    }
  }
  return result;
};

//***********************Other solutions */

var twoSum1 = function (nums, target) {
  //1 Brute force
  //     for (let i = 0; i < nums.length; i++){
  //         for (let j = i + 1; j < nums.length; j++){
  //             if (nums[i] + nums[j] == target){
  //                 return [i, j]
  //             }
  //         }
  //     }
  //2 Nice one
  //     let storage = {};
  //     for (let [index, num] of nums.entries()){
  //         if (storage[num]  !== undefined) return [storage[num], index]
  //         storage[target - num] = index;
  //     }

  //Two-Pass Hash

  //     const hashMap = {};

  //     for (let i = 0; i < nums.length; i++){
  //         hashMap[nums[i]] = i;
  //     }

  //     for(let i = 0; i < nums.length; i++){
  //         let complement = target - nums[i]
  //         if (hashMap[complement] && hashMap[complement] !== i){
  //             return [i, hashMap[complement]]
  //         }
  //     }

  //One-Pass Hash --> The best solution

  // const hashMap = {};

  // for (let i = 0; i < nums.length; i++) {
  //   let complement = target - nums[i];
  //   if (complement in hashMap) {
  //     return [hashMap[complement], i];
  //   }
  //   hashMap[nums[i]] = i;
  // }

  // The fastest among solutions:

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;

    if (map.has(num2)) {
      return [i, map.get(num2)];
    }

    map.set(num1, i);
  }
};
