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
exports.__esModule = true;
var React = require("react");
var classnames_1 = require("classnames");
var styles_scss_1 = require("./styles.scss");
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    // private img: any = null;
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this.loadImage = function (e) {
            _this.setState({
                isLoading: false
            });
        };
        _this.state = {
            isLoading: true
        };
        return _this;
    }
    Image.prototype.render = function () {
        var _a;
        var _b = this.props, src = _b.src, loadingIcon = _b.loadingIcon;
        return (React.createElement("div", { className: styles_scss_1["default"].image },
            this.state.isLoading && (React.createElement("div", { className: styles_scss_1["default"].loadingWrapper }, loadingIcon)),
            React.createElement("img", { src: src, onLoad: this.loadImage, className: classnames_1["default"]((_a = {},
                    _a[styles_scss_1["default"].hide] = this.state.isLoading,
                    _a[styles_scss_1["default"].show] = !this.state.isLoading,
                    _a)) })));
    };
    return Image;
}(React.Component));
exports.Image = Image;
