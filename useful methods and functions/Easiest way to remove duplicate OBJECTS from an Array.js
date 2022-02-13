// Easiest way to remove duplicate objects from an Array.

const keyValue = (x) => [JSON.stringify(x), x];

const unique = (x) => [...new Map(x.map(keyValue)).values()];

const arr = [{ a: 1 }, { a: 1 }, { b: 2 }];
console.log(unique(arr));
//[{a: 1}, {b: 2}]
