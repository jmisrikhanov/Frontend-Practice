// easy way to destructuring into existing variables

const user = {
  handle: "Name",
  profile: "Platform",
};

let handle;
let profile;

({ handle, profile } = user);
