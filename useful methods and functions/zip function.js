// zip function that creates an Array of grouped elements.
// Each element in the Array contains an item for each Array passed as an argument

const zip = (arr, ...arrs) => {
  return arr.map((val, i) =>
    arrs.reduce((acc, next) => [...acc, next[i]], [val])
  );
};

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

zip(a, b); // [[1, 4], [2, 5], [3, 6]]
zip(a, b, c); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
