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
var SvgSpinner = function (props) { return (React.createElement("svg", __assign({ viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "lds-rolling", width: "1em", height: "1em" }, props),
    React.createElement("circle", { cx: 50, cy: 50, fill: "none", stroke: "#00ADEF", strokeWidth: 2, r: 8, strokeDasharray: "37.69911184307752 14.566370614359172", transform: "rotate(221.746 50 50)" },
        React.createElement("animateTransform", { attributeName: "transform", type: "rotate", calcMode: "linear", values: "0 50 50;360 50 50", keyTimes: "0;1", dur: "1s", begin: "0s", repeatCount: "indefinite" })))); };
export default SvgSpinner;
