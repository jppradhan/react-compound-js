"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var styles_scss_1 = require("./styles.scss");
exports.InputText = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.format, format = _c === void 0 ? "default" : _c, label = _a.label, errorMessage = _a.errorMessage, isValid = _a.isValid, rest = __rest(_a, ["type", "format", "label", "errorMessage", "isValid"]);
    return (React.createElement("div", { className: styles_scss_1.default.formElems },
        React.createElement("label", { className: styles_scss_1.default.inputLabel }, label),
        React.createElement("input", __assign({ type: type }, rest, { className: classnames_1.default([styles_scss_1.default.formInput, styles_scss_1.default["format-" + format]]) })),
        format === "error" && errorMessage ? (React.createElement("p", { className: styles_scss_1.default.inputErrorMessage }, errorMessage)) : null));
};
