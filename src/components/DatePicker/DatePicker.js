"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
//@ts-ignore
var right_arrow_svg_1 = require("../../icons/right-arrow.svg");
var utils_1 = require("./utils");
var styles_scss_1 = require("./styles.scss");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.generateDays = function (day, month, year) {
            var days = [];
            var daysInMonth = utils_1.getDaysInMonth(month + 1, year);
            var _loop_1 = function (i) {
                days.push(React.createElement("div", { className: DatePicker.dayStyles({
                        today: _this.state.today,
                        selected: i === day,
                        disabled: i >= daysInMonth
                    }), key: "DAYS_" + i, onClick: function () { return _this.onSelectDate(i, month, year); } }, i + 1));
            };
            for (var i = 0; i < 31; i += 1) {
                _loop_1(i);
            }
            return days;
        };
        _this.generateMonths = function (year) {
            var months = [];
            var _loop_2 = function (i) {
                months.push(React.createElement("div", { className: styles_scss_1["default"].month, key: "MONTH_" + i, onClick: function () {
                        _this.onSelectDate(0, i, year);
                        _this.hideMonthView();
                    } }, utils_1.MONTHS[i].substring(0, 3)));
            };
            for (var i = 0; i < utils_1.MONTHS.length; i += 1) {
                _loop_2(i);
            }
            return months;
        };
        _this.generateYears = function () {
            var years = [];
            var _loop_3 = function (i) {
                years.push(React.createElement("div", { className: styles_scss_1["default"].year, key: "YEAR_" + i, onClick: function () {
                        _this.onSelectDate(0, 0, i);
                        _this.hideYearView();
                    } }, i));
            };
            for (var i = utils_1.YEAR_START; i < utils_1.YEAR_END; i += 1) {
                _loop_3(i);
            }
            return years;
        };
        _this.goToMonth = function (month) {
            if (month < 0 || month >= utils_1.MONTHS.length) {
                return;
            }
            _this.setState({
                currentMonth: month
            });
        };
        _this.onSelectDate = function (day, month, year) {
            _this.setState({
                currentDay: day,
                currentMonth: month,
                currentYear: year,
                selectedDate: utils_1.formatDate(_this.props.format, day + 1, month + 1, year)
            }, function () {
                if (!_this.state.showMonth && !_this.state.showMonth) {
                    _this.props.onSelectDate(_this.state.selectedDate);
                }
            });
        };
        _this.showMonthView = function () {
            _this.setState({
                showMonth: true
            });
        };
        _this.hideMonthView = function () {
            _this.setState({
                showMonth: false
            });
        };
        _this.showYearView = function () {
            _this.setState({
                showYear: true,
                showMonth: false
            });
        };
        _this.hideYearView = function () {
            _this.setState({
                showYear: false,
                showMonth: true
            });
        };
        _this.isToday = function (day, month, year) {
            var today = new Date();
            return (day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear());
        };
        var strToDate = utils_1.stringToDate("dd-mm-yyyy", _this.props.currentDate);
        var curDate = new Date(Date.parse(strToDate));
        _this.state = {
            currentMonth: curDate.getMonth(),
            currentYear: curDate.getFullYear(),
            currentDay: curDate.getDate(),
            selectedDate: strToDate,
            today: _this.isToday(curDate.getDate(), curDate.getMonth(), curDate.getFullYear()),
            showMonth: false,
            showYear: false
        };
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.state, currentDay = _a.currentDay, currentMonth = _a.currentMonth, currentYear = _a.currentYear;
        return (React.createElement("div", { className: styles_scss_1["default"].root },
            React.createElement("div", { className: styles_scss_1["default"].header },
                React.createElement("span", { className: classnames_1["default"]([styles_scss_1["default"].arrow, styles_scss_1["default"].leftArrow]), onClick: function () { return _this.goToMonth(currentMonth - 1); } },
                    React.createElement(right_arrow_svg_1["default"], { width: 15, height: 15 })),
                React.createElement("div", { className: styles_scss_1["default"].monthYear },
                    React.createElement("span", { onClick: this.showMonthView }, utils_1.MONTHS[currentMonth]),
                    React.createElement("span", { onClick: this.showYearView }, currentYear)),
                React.createElement("span", { className: classnames_1["default"]([styles_scss_1["default"].arrow, styles_scss_1["default"].rightArrow]), onClick: function () { return _this.goToMonth(currentMonth + 1); } },
                    React.createElement(right_arrow_svg_1["default"], { width: 15, height: 15 }))),
            React.createElement("div", { className: styles_scss_1["default"].date }, this.generateDays(currentDay, currentMonth, currentYear)),
            this.state.showMonth ? (React.createElement("div", { className: styles_scss_1["default"].monthView }, this.generateMonths(currentYear))) : null,
            this.state.showYear ? (React.createElement("div", { className: styles_scss_1["default"].yearView }, this.generateYears())) : null));
    };
    DatePicker.dayStyles = function (options) {
        var _a;
        return classnames_1["default"]((_a = {},
            _a[styles_scss_1["default"].days] = true,
            _a[styles_scss_1["default"].today] = options.today,
            _a[styles_scss_1["default"].selected] = options.selected,
            _a[styles_scss_1["default"].disabled] = options.disabled,
            _a));
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
