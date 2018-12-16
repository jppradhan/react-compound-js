var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import cx from "classnames";
import { DatePicker } from "../DatePicker/DatePicker";
import styles from "./styles.css";
var InputDate = /** @class */ (function (_super) {
    __extends(InputDate, _super);
    function InputDate(props) {
        var _this = _super.call(this, props) || this;
        _this.setDateValue = function (val) {
            _this.setState({
                showDatePicker: false,
                selectedValue: val
            });
        };
        _this.openDatePicker = function () {
            _this.setState({
                showDatePicker: true
            });
        };
        _this.state = {
            selectedValue: _this.props.value,
            showDatePicker: false
        };
        return _this;
    }
    InputDate.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, label = _a.label, dateFormat = _a.dateFormat, _b = _a.format, format = _b === void 0 ? "default" : _b, rest = __rest(_a, ["value", "label", "dateFormat", "format"]);
        return (React.createElement("div", { className: cx([styles.formElems, styles.formDate]) },
            React.createElement("label", { className: cx(styles.inputLabel) }, label),
            React.createElement("input", __assign({ type: "text", value: this.state.selectedValue }, rest, { onFocus: this.openDatePicker, className: cx([styles.formInput, styles["format-" + format]]) })),
            React.createElement("div", { className: styles.pickerWrapper }, this.state.showDatePicker ? (React.createElement(DatePicker, { format: dateFormat, currentDate: value, onSelectDate: function (val) { return _this.setDateValue(val); } })) : null)));
    };
    return InputDate;
}(React.Component));
export { InputDate };
