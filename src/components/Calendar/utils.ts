export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const YEAR_START = 1970;
export const YEAR_END = 2037;

export const formatDate = (
  format: string,
  day: number,
  month: number,
  year: number
) => {
  return format
    .replace(/(dd|DD)/, day < 10 ? `0${day}` : day.toString())
    .replace(/(mm|MM)/, month < 10 ? `0${month}` : month.toString())
    .replace(/(yyyy|YYYY)/, year.toString());
};
