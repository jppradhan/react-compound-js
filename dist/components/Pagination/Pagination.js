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
//@ts-ignore
import Arrow from "../../icons/right-arrow";
import styles from "./styles.css";
var Pagination = /** @class */ (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            currentPage: props.page,
            pageInput: props.page
        };
        _this.setActivePage = _this.setActivePage.bind(_this);
        _this.renderPaginateButtons = _this.renderPaginateButtons.bind(_this);
        _this.onChangeInput = _this.onChangeInput.bind(_this);
        _this.onKeyPressInput = _this.onKeyPressInput.bind(_this);
        return _this;
    }
    Pagination.prototype.render = function () {
        var _this = this;
        var currentPage = this.state.currentPage;
        var total = this.props.total;
        return (React.createElement("div", { className: styles.wrapper },
            React.createElement("button", { onClick: function () { return _this.setActivePage(currentPage - 1); }, className: styles.button, disabled: currentPage <= 0 },
                React.createElement(Arrow, null)),
            React.createElement("input", { type: "number", value: this.state.pageInput, onChange: this.onChangeInput, onKeyPress: this.onKeyPressInput, className: styles.input }),
            React.createElement("button", { onClick: function () { return _this.setActivePage(currentPage + 1); }, className: styles.button, disabled: currentPage >= total },
                React.createElement(Arrow, null)),
            React.createElement("span", { className: styles.remain },
                " of ",
                total)));
    };
    Pagination.prototype.setActivePage = function (page) {
        var _this = this;
        if (page < 0 || page > this.props.total) {
            return;
        }
        this.setState({
            currentPage: page,
            pageInput: page
        }, function () {
            _this.props.onGoToPage(page);
        });
    };
    Pagination.prototype.renderPaginateButtons = function () {
        var buttons = [];
        var _a = this.props, total = _a.total, onGoToPage = _a.onGoToPage;
        var totalCount = total <= 5 ? total : 5;
        var _loop_1 = function (i) {
            buttons.push(React.createElement("button", { className: this_1.state.currentPage === i ? "active" : "", onClick: function () { return onGoToPage(i); } }, i + 1));
        };
        var this_1 = this;
        for (var i = 0; i < totalCount; i += 1) {
            _loop_1(i);
        }
        return buttons;
    };
    Pagination.prototype.onChangeInput = function (e) {
        var val = e.target.value;
        if (val < 0 || val > this.props.total) {
            return;
        }
        this.setState({
            pageInput: val
        });
    };
    Pagination.prototype.onKeyPressInput = function (e) {
        if (e.key === "Enter") {
            this.setActivePage(this.state.pageInput);
        }
    };
    return Pagination;
}(React.Component));
export { Pagination };
