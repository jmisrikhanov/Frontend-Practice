// Use console.assert to make conditional log statements.

// A nice and concise alternative alternative to wrapping console.log in an if-statement.

// instead of:
if (!user.id) {
  console.log("User id is missing");
}

// use this:
console.assert(user.id, "User id is missing");
