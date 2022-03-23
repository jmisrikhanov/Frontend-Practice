// Useful usage of the third argument from filter method - array (the array on which filter() was called).
// It will return only unique integers from the given array:

[1, 2, 2, 3, 1, 4, 1, 4, 2, 3].filter((el, i, arr) => i === arr.indexOf(el));
// [1,2,3,4]
