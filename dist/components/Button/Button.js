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
import styles from "./styles.scss";
var classStyles = function (props) {
    var _a;
    return cx((_a = {},
        _a[styles.default] = true,
        _a[styles[props.format]] = true,
        _a[styles.disabled] = props.disabled,
        _a));
};
export var Button = function (_a) {
    var children = _a.children, _b = _a.format, format = _b === void 0 ? "default" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, rest = __rest(_a, ["children", "format", "disabled"]);
    return (React.createElement("button", __assign({ className: classStyles(__assign({ format: format, disabled: disabled }, rest)) }, rest), children));
};
