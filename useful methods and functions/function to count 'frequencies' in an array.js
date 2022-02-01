// function "frequencies" to count occurancies of all elements in a given array

const frequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
  }, {});

frequencies(["a", "b", "c", "a", "a", "a", "b"]);
// {a: 4, b: 2, c: 1}

frequencies([..."ball"]);
// {b: 1, a: 1, l: 2}
