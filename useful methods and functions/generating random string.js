// generating random string

// if you will ever need a temporary unique id for something. that will generate a random string for you.

const randomString = Math.random().toString(36).slice(2);
console.log(randomString);
