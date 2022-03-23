// If we have multiple if-else conditions and behavior of each condition is different, we can use Object

// instead of:

if (hero === "Robin") {
  callRobin();
} else if (hero === "Batman") {
  callBatman();
} else if (hero === "Superman") {
  callSuperman();
} else if (hero === "Thor") {
  callThor();
} else {
  throw new Error("No such hero available ...");
}

// use:

let heroCall = {
  Robin: callRobin,
  Batman: callBatman,
  Superman: callSuperman,
  Thor: callThor,
};
