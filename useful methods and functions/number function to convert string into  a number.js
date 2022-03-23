// Use the "Number" function to convert a string to a Number, instead of using parseInt.
// The latter is only useful if you need to convert a string representing a number from a different base, e.g. hexadecimal

const n = parseInt("a3", 16);
// 163
// unless you need to convert from another 'base' than 10

// use the Number function instead of parseInt to convert a string to a number.
const n = Number("42");
// 42
