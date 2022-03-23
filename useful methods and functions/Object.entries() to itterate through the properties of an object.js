// You can use Object.entries() to iterate through the properties of an object and access both key and value
// No need to do an object lookup for each iteration.

// instead of this:
Object.keys(someObj).forEach((key) => {
  const value = someObj[key];

  // Log out "key" and "value"
  console.log(key, value);
});

// use this:
Object.entries(someObj).forEach(([key, value]) => {
  // Log out "key" and "value"
  console.log(key, value);
});
