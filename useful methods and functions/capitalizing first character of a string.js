//function that capitalizes the first character of a string

const capitalize = ([first, ...str]) => {
  return [first?.toUpperCase(), ...str].join("");
};

console.log(capitalize("hello"));
//Hello
