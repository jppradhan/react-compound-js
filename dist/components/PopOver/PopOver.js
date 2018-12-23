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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var styles_scss_1 = require("./styles.scss");
var dispatchClosePopup = function () {
    var event = new Event("closePopup");
    document.dispatchEvent(event);
};
var PopOver = /** @class */ (function (_super) {
    __extends(PopOver, _super);
    function PopOver(props) {
        var _this = _super.call(this, props) || this;
        _this.openPopup = function (e) {
            dispatchClosePopup();
            _this.setState({
                isShowing: true
            }, function () {
                document.addEventListener("click", _this.onClickOutside);
                document.addEventListener("closePopup", _this.closePopup);
            });
        };
        _this.closePopup = function () {
            _this.setState({
                isShowing: false
            }, function () {
                document.removeEventListener("click", _this.onClickOutside);
                document.removeEventListener("closePopup", _this.closePopup);
            });
        };
        _this.onClickOutside = function (e) {
            //@ts-ignore
            var paths = e.path;
            for (var i = 0; i < paths.length; i += 1) {
                if (paths[i].classList &&
                    paths[i].classList.contains(styles_scss_1.default.popoverContainer)) {
                    return;
                }
            }
            _this.closePopup();
        };
        _this.state = {
            isShowing: false
        };
        return _this;
    }
    PopOver.prototype.componentWillUnmount = function () {
        document.removeEventListener("click", this.onClickOutside);
        document.removeEventListener("closePopup", this.closePopup);
    };
    PopOver.prototype.render = function () {
        var _a = this.props, children = _a.children, content = _a.content, _b = _a.position, position = _b === void 0 ? "bottom" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c;
        return (React.createElement("div", { className: styles_scss_1.default.popoverContainer, onClick: this.openPopup },
            children,
            this.state.isShowing ? (React.createElement("div", { className: classnames_1.default([
                    styles_scss_1.default.popoverWrapper,
                    styles_scss_1.default[position],
                    styles_scss_1.default[size]
                ]) }, content)) : null));
    };
    return PopOver;
}(React.Component));
exports.PopOver = PopOver;
