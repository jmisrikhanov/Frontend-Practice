// adding leading zero to numbers

const date = new Date();
const day = date.getDate().toString().padStart(2, "0");

console.log(day); // "04" or "13"
