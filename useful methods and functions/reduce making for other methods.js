console.log("=======reduce can make all the other array methods=======");

const numbers4 = [1, 2, 3, 4, 5];

// Includes with reduce
const includesReduce = numbers4.reduce((includes, value) => {
  return includes ? includes : value === 3;
}, false);
console.log(includesReduce);

const includesReduce1 = numbers4.reduce((includes, value) => {
  return includes ? includes : value === 10;
}, false);
console.log(includesReduce1);

// Slice with reduce
const sliceReduce = numbers4.reduce(
  (arr, value, index) => (index > 0 && index < 4 ? [...arr, value] : arr),
  []
);
console.log(sliceReduce);

// Map with reduce
const mapReduce = numbers4.reduce((arr, value) => [...arr, value * 100], []);
console.log(mapReduce);
