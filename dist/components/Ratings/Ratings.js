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
import styles from "./styles.css";
var COUNT = 5;
var MARGIN = 5;
var Ratings = /** @class */ (function (_super) {
    __extends(Ratings, _super);
    function Ratings(props) {
        var _this = _super.call(this, props) || this;
        _this.containerWidth = 0;
        _this.getRatingStyle = function () {
            var rate = _this.state.rate;
            return {
                width: (100 / COUNT) * rate + "%"
            };
        };
        _this.getIconStyle = function () {
            var _a = _this.props, width = _a.width, height = _a.height;
            return {
                width: width + "px",
                height: height + "px"
            };
        };
        _this.getContainerStyle = function () {
            var _a = _this.props, width = _a.width, height = _a.height, margin = _a.margin;
            _this.containerWidth = (width + (margin || MARGIN)) * COUNT;
            return {
                width: _this.containerWidth + "px",
                height: height + "px"
            };
        };
        _this.setRatings = function (e) {
            if (_this.props.readonly) {
                return;
            }
            //@ts-ignore
            var diffWidth = e.clientX - e.currentTarget.offsetLeft;
            var rate = parseFloat(((diffWidth / _this.containerWidth) * 5).toFixed(1));
            _this.setState({
                rate: rate
            }, function () {
                if (_this.props.onSetRating) {
                    _this.props.onSetRating(rate);
                }
            });
        };
        _this.state = {
            rate: _this.props.rate
        };
        return _this;
    }
    Ratings.prototype.render = function () {
        var _this = this;
        var blankStar = [];
        for (var i = 0; i < COUNT; i += 1) {
            blankStar.push(i);
        }
        var icon = this.props.icon;
        return (React.createElement("div", { className: styles.ratings, style: this.getContainerStyle(), onClick: this.setRatings },
            React.createElement("div", { className: styles.topLayer, style: this.getRatingStyle() }, blankStar.map(function (b, i) { return (React.createElement("span", { className: styles.ratingsIcon, key: "RATINGS_ICON_" + i, style: _this.getIconStyle() }, icon)); })),
            React.createElement("div", { className: styles.bottomLayer }, blankStar.map(function (b, i) { return (React.createElement("span", { className: styles.ratingsIcon, key: "RATINGS_ICON_" + i, style: _this.getIconStyle() }, icon)); }))));
    };
    return Ratings;
}(React.Component));
export { Ratings };
