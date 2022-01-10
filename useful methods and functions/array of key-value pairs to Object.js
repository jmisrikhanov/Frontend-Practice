// 💡 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁 𝘁𝗶𝗽: Array of key-value pairs to Object

// To transform a list of key-value pairs into an object you can use Object.fromEntries().

// It accepts an iterable such as Array or Map and transforms it into an Object.

// The Object.fromEntries() method performs the reverse of Object.entries().

const personArray = [
  ["firstName", "John"],
  ["lastName", "Doe"],
  ["age", "20"],
];

const person = Object.fromEntries(personArray);
// {firstName: "John", lastName: "Doe", age: 20}
