// check if Date is Valid

const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

isDateValid("July 11, 2022 12:00:00");
