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

export const stringToDate = (format: string, dateStr: string) => {
  const formatArr = format.split(/[-\/]/);
  const dateStrArr = dateStr.split(/[-\/]/);
  let day = 0;
  let month = 0;
  let year = 0;
  for (let i = 0; i < formatArr.length; i++) {
    if (formatArr[i].match(/(dd|DD)/)) {
      day = parseInt(dateStrArr[i]);
    }
    if (formatArr[i].match(/(mm|MM)/)) {
      month = parseInt(dateStrArr[i]);
    }
    if (formatArr[i].match(/(yy|YYYY)/)) {
      year = parseInt(dateStrArr[i]);
    }
  }
  return formatDate("mm-dd-yyyy", day, month, year);
};
