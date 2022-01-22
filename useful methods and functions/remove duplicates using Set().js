// You can remove duplicates from an array using Set() collection

const arr = [1, 3, 2, 3, 2, 1, true, false, true, "Kio", 2, 3];

const unique = [...new Set(arr)];

console.log(unique);
// [1, 3, 2, true, false, "Kio"]
