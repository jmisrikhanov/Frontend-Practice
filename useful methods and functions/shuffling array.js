// Shuffling the order of elements in an Array

const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);

console.log(shuffle([1, 2, 3, 4]));
