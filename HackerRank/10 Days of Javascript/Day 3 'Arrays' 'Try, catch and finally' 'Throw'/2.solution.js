/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  if (typeof s === "string") {
    console.log(s.split("").reverse().join(""));
  } else {
    console.log("s.split is not a function" + "\n" + s);
  }
}

// 2nd solution
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log("s.split is not a function");
  }

  console.log(s);
}
