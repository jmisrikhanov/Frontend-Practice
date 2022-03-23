// .includes to check for multiple criteria.

// It is often a more readable and concise alternative to using series of  || operators

// Instead of using:
let canEat = false;

if (fruit === "apple" || fruit === "strawberry" || fruit === "orange") {
  canEat = true;
}

// Use:
let canEat = false;
const edibles = ["apple", "strawberry", "orange", "cherry", "banana"];

if (edibles.includes(fruit)) {
  canEat = true;
}
