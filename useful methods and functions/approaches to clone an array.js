// Approaches to clone an array

const clone = (arr) => arr.slice(0); //1

const clone = (arr) => arr.concat([]); //2

const clone = (arr) => Object.values(arr); //3

const clone = (arr) => [...arr]; //4

const clone = (arr) => Array.from(arr); //5

const clone = (arr) => arr.map((x) => x); //6

const clone = (arr) => JSON.parse(JSON.stringify(arr)); //7
