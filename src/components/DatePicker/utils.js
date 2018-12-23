"use strict";
exports.__esModule = true;
exports.MONTHS = [
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
exports.getDaysInMonth = function (month, year) {
    return new Date(year, month, 0).getDate();
};
exports.YEAR_START = 1970;
exports.YEAR_END = 2037;
exports.formatDate = function (format, day, month, year) {
    return format
        .replace(/(dd|DD)/, day < 10 ? "0" + day : day.toString())
        .replace(/(mm|MM)/, month < 10 ? "0" + month : month.toString())
        .replace(/(yyyy|YYYY)/, year.toString());
};
exports.stringToDate = function (format, dateStr) {
    var formatArr = format.split(/[-\/]/);
    var dateStrArr = dateStr.split(/[-\/]/);
    var day = 0;
    var month = 0;
    var year = 0;
    for (var i = 0; i < formatArr.length; i++) {
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
    return exports.formatDate("mm-dd-yyyy", day, month, year);
};
