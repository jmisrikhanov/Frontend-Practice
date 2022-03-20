// find the number of days between two given days

const dayDif = (date1, date2) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dateDif(new Date("2020-10-21"), new Date("2021-10-22"));
