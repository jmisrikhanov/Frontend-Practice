/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  const unique = Array.from(new Set(nums));
  const reverseSorted = unique.sort(function (a, b) {
    return b - a;
  });
  const second = reverseSorted[1];
  return second;
}
