// converting an array [] to an object {}.
const arrList = ["Tom", "Jerry", "Cat", "Mouse"];

const myObj = Object.assign({}, arrList);
console.log(myObj);

// or
// the same output
const myObj1 = { ...arrList };
