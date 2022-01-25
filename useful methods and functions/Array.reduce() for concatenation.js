// example of how Array.reduce() ServiceWorkerRegistration. The "acc"
// accumulator variable starts with "a" and concats with
// "next" on each iteration

let array = ["b", "c", "d"];

let x = array.reduce((acc, next) => {
  return acc + next;
}, "a");
console.log(x);
// abcd

let acc = "a";
for (let next of array) {
  acc = acc + next;
}

console.log(acc);
// abcd
