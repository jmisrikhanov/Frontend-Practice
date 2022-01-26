// Function that trim last slash from the url:

const trimEndSlash = (url) => {
  if (url.endsWith("/")) {
    return url.slice(0, url.length - 1);
  }
  return url;
};

trimEndSlash("/the/dude/");
// Output: /the/dude
