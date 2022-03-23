// pascal number

const pascalNumber = function total(n) {
  if (n === 1) return 1;
  return n + total(n - 1);
};
console.log(pascalNumber(100));

// immediately invoked function expression

let result = (function triangle(num) {
  if (num === 1) return 1;
  return num + triangle(num - 1);
})(4);

console.log(result);
// output 10
