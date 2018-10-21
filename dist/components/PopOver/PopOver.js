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
var PopOver = /** @class */ (function (_super) {
    __extends(PopOver, _super);
    function PopOver(props) {
        var _this = _super.call(this, props) || this;
        _this.openPopup = function () {
            _this.setState({
                isShowing: true
            }, function () {
                document.addEventListener("click", _this.onClickOutside);
            });
        };
        _this.closePopup = function () {
            _this.setState({
                isShowing: false
            }, function () {
                document.removeEventListener("click", _this.onClickOutside);
            });
        };
        _this.onClickOutside = function (e) {
            //@ts-ignore
            var paths = e.path;
            for (var i = 0; i < paths.length; i += 1) {
                if (paths[i].classList &&
                    paths[i].classList.contains("popover__container")) {
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
    };
    PopOver.prototype.render = function () {
        var _a = this.props, children = _a.children, content = _a.content, _b = _a.position, position = _b === void 0 ? "bottom" : _b, _c = _a.size, size = _c === void 0 ? "md" : _c;
        return (React.createElement("div", { className: "popover__container", onClick: this.openPopup },
            children,
            this.state.isShowing ? (React.createElement("div", { className: "popover__wrapper " + position + " " + size }, content)) : null));
    };
    return PopOver;
}(React.Component));
export { PopOver };
