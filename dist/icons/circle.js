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
import * as React from "react";
var SvgCircle = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 32 32", width: "1em", height: "1em" }, props),
    React.createElement("circle", { cx: 16, cy: 16, r: 16 }))); };
export default SvgCircle;
