// Array.from() has a callback argument that lets you Array.map() the new Array values.

let dogs = [
  { name: "Rio", age: 2 },
  { name: "Mac", age: 3 },
  { name: "Bruno", age: 5 },
  { name: "Jucas", age: 10 },
  { name: "Furr", age: 8 },
  { name: "Blu", age: 7 },
];

let names = Array.from(dogs, ({ name }) => name);
console.log(names);
// ["Rio", "Mac", "Bruno", "Jucas", "Furr", "Blu"]
