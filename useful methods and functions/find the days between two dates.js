// find the days between two dates

const between = (a, b) => {
  const diff = Math.abs(a.getTime() - b.getTime());
  return Math.floor(diff / (3600 * 24 * 1000));
};

between(new Date("2021/01/04"), new Date("2021/01/28"));
// Result: 24
