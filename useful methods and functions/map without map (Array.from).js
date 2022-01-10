// 💡 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝘁𝗶𝗽: Map without map (Array.from)

// Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

// It also accepts a second optional callback, which allows you to execute a map() function on each element of the array being created

const avengers = [
  { name: "Ironman", power: "Armor", id: 1 },
  { name: "Thor", power: "Hammer", id: 2 },
  { name: "Hulk", power: "Strength", id: 3 },
];

Array.from(avengers, ({ name }) => name);
// ["Ironman", "Thor", "Hulk"]
console.log(Array.from(avengers, ({ name }) => name));
