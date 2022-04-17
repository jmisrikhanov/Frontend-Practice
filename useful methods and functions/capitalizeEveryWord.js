// capitalizeEveryWord;

// This snippet capitalizes the first letter of every word in a given string.

const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

capitalizeEveryWord("hello world!"); // 'Hello World!'
