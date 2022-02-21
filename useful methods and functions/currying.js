// currying is a function that takes one argument at a time a
// and returns a new function expecting the next argument.

const add = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return () => {
          return a + b + c + d;
        };
      };
    };
  };
};

console.log(add(5)(2)(4)(5)());
