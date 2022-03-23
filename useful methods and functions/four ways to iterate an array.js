// four ways to iterate an array

const names = ["Kio", "Rio", "Apple"];

// for statement
for (let i = 0, len = names.length; i < len; i++) {
  console.log(names[i]);
}

// while statement
let i = (len = names.length);
while (i--) console.log(names[len - 1]);

// for of
for (let name of names) console.log(name);

// for in (note: includes properties)
for (let i in names) console.log(names[i]);

// Array.forEach()
names.forEach((name) => console.log(name));
