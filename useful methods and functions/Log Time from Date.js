// Log Time from Date

// We can log time, in the format hour::minutes::seconds from a given date.

const timeFromDate = (date) => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
