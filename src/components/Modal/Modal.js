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
//@ts-ignore
var cross_svg_1 = require("../../icons/cross.svg");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.modalElem = null;
        _this.onCloseModal = function () {
            _this.setState({
                innerClass: styles_scss_1["default"].close
            });
            setTimeout(function () {
                _this.setState({
                    isShowing: false
                }, function () {
                    _this.props.onDismiss();
                });
            }, 300);
        };
        _this.onClickOutSide = function (e) {
            //@ts-ignore
            if (e.target.classList.contains(styles_scss_1["default"].modal)) {
                return _this.onCloseModal();
            }
            return false;
        };
        _this.onKeyPress = function (e) {
            //@ts-ignore
            if (e.keyCode === 27) {
                return _this.onCloseModal();
            }
            return false;
        };
        _this.state = {
            isShowing: _this.props.isShowing,
            innerClass: _this.props.isShowing ? styles_scss_1["default"].open : styles_scss_1["default"].close
        };
        return _this;
    }
    Modal.prototype.componentDidUpdate = function () {
        if (this.modalElem) {
            this.modalElem.focus();
        }
    };
    Modal.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.isShowing !== this.props.isShowing) {
            this.setState({
                isShowing: nextProps.isShowing,
                innerClass: nextProps.isShowing ? styles_scss_1["default"].open : styles_scss_1["default"].close
            });
        }
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, children = _a.children;
        if (this.state.isShowing) {
            return (React.createElement("div", { className: styles_scss_1["default"].modal, onClick: this.onClickOutSide, onKeyUp: this.onKeyPress, tabIndex: 0, ref: function (e) { return (_this.modalElem = e); } },
                React.createElement("div", { className: classnames_1["default"]([styles_scss_1["default"].modalInner, this.state.innerClass]) },
                    React.createElement("div", { className: styles_scss_1["default"].modalTitle },
                        React.createElement("h2", null, title),
                        React.createElement("span", { className: styles_scss_1["default"].closeDialog, onClick: this.onCloseModal },
                            React.createElement(cross_svg_1["default"], null))),
                    React.createElement("div", { className: styles_scss_1["default"].modalBody }, children))));
        }
        return null;
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;
