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
import * as React from "react";
import cx from "classnames";
import styles from "./styles.scss";
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
        return (React.createElement("div", { className: styles.image },
            this.state.isLoading && (React.createElement("div", { className: styles.loadingWrapper }, loadingIcon)),
            React.createElement("img", { src: src, onLoad: this.loadImage, className: cx((_a = {},
                    _a[styles.hide] = this.state.isLoading,
                    _a[styles.show] = !this.state.isLoading,
                    _a)) })));
    };
    return Image;
}(React.Component));
export { Image };
