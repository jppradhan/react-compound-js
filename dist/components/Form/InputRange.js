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
import cx from "classnames";
import styles from "./styles.css";
var InputRange = /** @class */ (function (_super) {
    __extends(InputRange, _super);
    function InputRange(props) {
        var _this = _super.call(this, props) || this;
        _this.rangeElem = null;
        _this.startMouseDown = false;
        _this.endMouseDown = false;
        _this.getRangeStyle = function (start, end) {
            return {
                width: end - start + "%",
                marginLeft: start + "%"
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
        _this.onDragButton = function (e, buttonType) {
            if (_this.rangeElem) {
                var rangeWrapperWidth = _this.rangeElem.offsetWidth;
                //@ts-ignore
                var wrapper = _this.rangeElem.getBoundingClientRect();
                //@ts-ignore
                var leftPos = e.clientX - wrapper.left;
                if (leftPos < 0) {
                    return;
                }
                var leftPercentage = Math.round((leftPos / rangeWrapperWidth) * 100);
                if (buttonType === "start" &&
                    leftPercentage < _this.state.end &&
                    leftPercentage >= 0) {
                    _this.setState({
                        start: leftPercentage,
                        inputStart: leftPercentage
                    });
                }
                if (buttonType === "end" &&
                    leftPercentage > _this.state.start &&
                    leftPercentage <= _this.props.max) {
                    _this.setState({
                        end: leftPercentage,
                        inputEnd: leftPercentage
                    });
                }
            }
        };
        _this.onMouseDown = function (e) {
            // @ts-ignore
            if (e.target.getAttribute("id") === "start-button") {
                _this.startMouseDown = true;
            }
            // @ts-ignore
            if (e.target.getAttribute("id") === "end-button") {
                _this.endMouseDown = true;
            }
        };
        _this.onMouseUp = function (e) {
            _this.startMouseDown = false;
            _this.endMouseDown = false;
        };
        _this.onMouseMove = function (e) {
            if (_this.startMouseDown) {
                // @ts-ignore
                _this.onDragButton(e, "start");
            }
            if (_this.endMouseDown) {
                // @ts-ignore
                _this.onDragButton(e, "end");
            }
        };
        _this.state = {
            start: _this.props.start,
            end: _this.props.end,
            inputStart: _this.props.start,
            inputEnd: _this.props.end
        };
        return _this;
    }
    InputRange.prototype.componentDidMount = function () {
        document.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("mouseup", this.onMouseUp);
        document.addEventListener("mousemove", this.onMouseMove);
    };
    InputRange.prototype.componentWillUnmount = function () {
        document.removeEventListener("mousedown", this.onMouseDown);
        document.removeEventListener("mouseup", this.onMouseUp);
        document.removeEventListener("mousemove", this.onMouseMove);
    };
    InputRange.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, _b = _a.startInputName, startInputName = _b === void 0 ? "start" : _b, _c = _a.endInputName, endInputName = _c === void 0 ? "end" : _c;
        var _d = this.state, start = _d.start, end = _d.end;
        return (React.createElement("div", { className: cx([styles.formElems, styles.formRange]) },
            React.createElement("label", { className: styles.inputLabel }, label),
            React.createElement("div", { className: styles.rangeWrapper, ref: function (e) { return (_this.rangeElem = e); } },
                React.createElement("div", { className: styles.range, style: this.getRangeStyle(start, end) },
                    React.createElement("span", { className: cx([styles.rangeButton, styles.left]), id: "start-button", role: "slider" }),
                    React.createElement("span", { className: cx([styles.rangeButton, styles.right]), role: "slider", id: "end-button" }))),
            React.createElement("div", { className: styles.rangeInputs },
                React.createElement("input", { type: "text", name: startInputName, className: cx([styles.formInput, styles.formatDefault]), value: this.state.inputStart, onChange: this.onChangeStart, onKeyDown: this.onKeyDownStart }),
                React.createElement("input", { type: "text", name: endInputName, className: cx([styles.formInput, styles.formatDefault]), value: this.state.inputEnd, onChange: this.onChangeEnd, onKeyDown: this.onKeyDownEnd }))));
    };
    return InputRange;
}(React.Component));
export { InputRange };
