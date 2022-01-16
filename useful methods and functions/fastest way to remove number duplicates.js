// Fastest way to remove duplicate numbers in javascript. Also works with an Array of strings.

const arr = Array.from(new Set([2, 3, 4, 2, 3, 5]));

console.log(arr);
// outputs [2, 3, 4, 5]
