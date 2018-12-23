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
var Label = function (props) { return React.createElement("label", __assign({}, props)); };
exports.InputRadio = function (_a) {
    var label = _a.label, id = _a.id, rest = __rest(_a, ["label", "id"]);
    return (React.createElement("div", { className: classnames_1.default(styles_scss_1.default.formElems, styles_scss_1.default.formRadio) },
        React.createElement("input", __assign({ type: "radio" }, rest, { id: id })),
        React.createElement(Label, { className: styles_scss_1.default.radioLabel, for: id }, label)));
};
