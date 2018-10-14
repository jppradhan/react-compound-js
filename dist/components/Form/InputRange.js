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
import * as React from "react";
import "./styles.css";
var InputRange = /** @class */ (function (_super) {
    __extends(InputRange, _super);
    function InputRange(props) {
        var _this = _super.call(this, props) || this;
        _this.rangeElem = null;
        _this.getRangeStyle = function (start, end) {
            return {
                width: end - start + "%",
                marginLeft: start + "%"
            };
        };
        _this.getLeftStyle = function (start, end) {
            return {
                left: start + "%"
            };
        };
        _this.getRightStyle = function (start, end) {
            return {
                left: end + "%"
            };
        };
        _this.onKeyDownStart = function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            //@ts-ignore
            var val = parseInt(e.target.value);
            if (val < 0 || val > _this.state.end) {
                return;
            }
            _this.setState({
                start: val
            });
        };
        _this.onKeyDownEnd = function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            //@ts-ignore
            var val = parseInt(e.target.value);
            if (val < 0 || val < _this.state.start) {
                return;
            }
            _this.setState({
                end: val
            });
        };
        _this.onChangeStart = function (e) {
            //@ts-ignore
            var val = e.target.value;
            _this.setState({
                inputStart: val
            });
        };
        _this.onChangeEnd = function (e) {
            //@ts-ignore
            var val = e.target.value;
            _this.setState({
                inputEnd: val
            });
        };
        _this.state = {
            start: _this.props.start,
            end: _this.props.end,
            inputStart: _this.props.start,
            inputEnd: _this.props.end
        };
        return _this;
    }
    InputRange.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, _b = _a.startInputName, startInputName = _b === void 0 ? "start" : _b, _c = _a.endInputName, endInputName = _c === void 0 ? "end" : _c;
        var _d = this.state, start = _d.start, end = _d.end;
        return (React.createElement("div", { className: "form-elems form-range" },
            React.createElement("label", { className: "input-label" }, label),
            React.createElement("div", { className: "range-wrapper" },
                React.createElement("div", { className: "range", ref: function (e) { return (_this.rangeElem = e); }, style: this.getRangeStyle(start, end) }),
                React.createElement("span", { className: "range-button left", style: this.getLeftStyle(start, end) }),
                React.createElement("span", { className: "range-button right", style: this.getRightStyle(start, end) })),
            React.createElement("div", { className: "range-inputs" },
                React.createElement("input", { type: "text", name: startInputName, className: "form-input format-default", value: this.state.inputStart, onChange: this.onChangeStart, onKeyDown: this.onKeyDownStart }),
                React.createElement("input", { type: "text", name: endInputName, className: "form-input format-default", value: this.state.inputEnd, onChange: this.onChangeEnd, onKeyDown: this.onKeyDownEnd }))));
    };
    return InputRange;
}(React.Component));
export { InputRange };
