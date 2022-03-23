// 'date' is Date object

function isWeekDay(date) {
  return date.getDay() % 6 !== 0;
}

isWeekDay(new Date("1-15-2022")); //false - Saturday
isWeekDay(new Date("1-16-2022")); //false - Sunday
isWeekDay(new Date("1-17-2022")); //true - Monday
