// Find Average of Numbers

const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
