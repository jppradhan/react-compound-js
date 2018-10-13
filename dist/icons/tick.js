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
var SvgTick = function (props) { return (React.createElement("svg", __assign({ "data-name": "Layer 1", viewBox: "0 0 48 48", width: "1em", height: "1em" }, props),
    React.createElement("path", { fill: "none", stroke: "#231f20", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M1 25l14 14L47 7" }))); };
export default SvgTick;
