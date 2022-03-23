// getting rid of nesting in arrays with flat method
console.log("=======flat=======");

const numbers2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log(numbers2.flat());

const deepNumbers = [[[[10, 20, 30]]], [[[40, 50, 60]]], [[[70, 80, 90]]]];
console.log(deepNumbers.flat());
console.log(deepNumbers.flat(2));
console.log(deepNumbers.flat(Infinity));
