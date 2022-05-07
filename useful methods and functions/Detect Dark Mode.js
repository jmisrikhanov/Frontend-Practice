// Detect Dark Mode

// Check if a user’s device is in dark mode with the following code.

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
console.log(isDarkMode); // Result: True or False
