const pascalNumber = function total(n) {
  if (n === 1) return 1;
  return n + total(n - 1);
};
console.log(pascalNumber(100));
