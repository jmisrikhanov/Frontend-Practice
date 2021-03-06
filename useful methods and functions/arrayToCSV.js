// arrayToCSV
// converts the elements to strings with comma-separated values.

const arrayToCSV = (arr, delimiter = ",") =>
  arr.map((v) => v.map((x) => `"${x}"`).join(delimiter)).join("\n");

arrayToCSV([
  ["a", "b"],
  ["c", "d"],
]); // '"a","b"\n"c","d"'
arrayToCSV(
  [
    ["a", "b"],
    ["c", "d"],
  ],
  ";"
); // '"a";"b"\n"c";"d"'```
