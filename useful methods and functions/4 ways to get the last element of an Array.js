// 4 ways to get the last element of an Array

let arr = [12, 222, 1000, 124, 98, 10];

console.log(arr.slice(-1)[0]);

console.log(arr[arr.length - 1]);

console.log(arr.slice().pop());

console.log(arr.reverse()[0]);
