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
import cx from "classnames";
//@ts-ignore
import Arrow from "../../icons/right-arrow";
import styles from "./styles.css";
var ICON_DIMENSIONS = 20;
var Carousel = /** @class */ (function (_super) {
    __extends(Carousel, _super);
    function Carousel(props) {
        var _this = _super.call(this, props) || this;
        _this.wrapperRef = null;
        _this.wrapperWidth = 0;
        _this.itemWidth = 0;
        _this.viewPortRef = null;
        _this.viewPortWidth = 0;
        _this.maxTranslate = 0;
        _this.minTranslate = 0;
        _this.offsetItem = 0;
        _this.dragStartPoint = 0;
        _this.dragEndPoint = 0;
        _this.onClickPrev = function () {
            _this.setTranslate(_this.itemWidth, "prev");
        };
        _this.onClickNext = function () {
            _this.setTranslate(_this.itemWidth, "next");
        };
        _this.getTransform = function () {
            return {
                transform: "translateX(" + _this.state.translateY + "px)",
                transition: "transform 0.3s linear",
                WebkitTransform: "translateX(" + _this.state.translateY + "px)",
                //@ts-ignore
                MozTransform: "translateX(" + _this.state.translateY + "px)",
                WebkitTransition: "transform 0.3s linear",
                MozTransition: "transform 0.3s linear"
                //@ts-check
            };
        };
        _this.setTranslate = function (distance, direction) {
            if (_this.props.loop) {
                _this.setState(function (prevState) { return (__assign({}, prevState, { children: _this.shiftChildren(prevState, direction) })); });
            }
            else {
                var previousTranslate_1 = direction === "prev"
                    ? _this.state.translateY + distance
                    : _this.state.translateY - distance;
                if (previousTranslate_1 < _this.maxTranslate ||
                    previousTranslate_1 > _this.minTranslate) {
                    return;
                }
                _this.setState(function (prevState) { return (__assign({}, prevState, { translateY: previousTranslate_1 })); });
            }
        };
        _this.shiftChildren = function (prevState, direction) {
            var children = React.Children.toArray(prevState.children);
            if (direction === "next") {
                var firstChild = children.shift();
                // @ts-ignore
                children.push(firstChild);
            }
            if (direction === "prev") {
                var lastChild = children.pop();
                // @ts-ignore
                children.unshift(lastChild);
            }
            return children;
        };
        _this.onDragStart = function (e) {
            e.persist();
            _this.dragStartPoint = e.clientX;
        };
        _this.onDragEnd = function (e) {
            e.persist();
            _this.dragEndPoint = e.clientX;
            _this.onSlide();
        };
        _this.onTouchStart = function (e) {
            e.persist();
            _this.dragStartPoint = e.targetTouches[0].clientX;
        };
        _this.onTouchEnd = function (e) {
            e.persist();
            _this.dragEndPoint = e.changedTouches[0].clientX;
            _this.onSlide();
        };
        _this.onSlide = function () {
            if (_this.dragEndPoint < _this.dragStartPoint) {
                _this.setTranslate(_this.itemWidth, "next");
            }
            if (_this.dragEndPoint > _this.dragStartPoint) {
                _this.setTranslate(_this.itemWidth, "prev");
            }
        };
        var _a = _this.props, loop = _a.loop, children = _a.children;
        _this.state = {
            translateY: 0,
            children: loop ? children : null
        };
        return _this;
    }
    Carousel.prototype.componentDidMount = function () {
        if (this.wrapperRef) {
            this.wrapperWidth = this.wrapperRef.offsetWidth;
            var count = React.Children.count(this.props.children);
            this.itemWidth = count > 0 ? this.wrapperWidth / count : 0;
        }
        if (this.viewPortRef) {
            this.viewPortWidth = this.viewPortRef.offsetWidth;
            this.offsetItem =
                this.itemWidth > 0
                    ? Math.floor(this.viewPortWidth / this.itemWidth)
                    : 0;
            this.maxTranslate = this.itemWidth * this.offsetItem - this.wrapperWidth;
        }
    };
    Carousel.prototype.render = function () {
        var _this = this;
        var _a = this.props, loop = _a.loop, children = _a.children, iconDimension = _a.iconDimension;
        return (React.createElement("div", { className: styles.carousel },
            React.createElement("div", { className: styles.viewport, ref: function (e) { return (_this.viewPortRef = e); } },
                React.createElement("div", { className: styles.wrapper, ref: function (e) { return (_this.wrapperRef = e); }, style: this.getTransform(), onDragStart: this.onDragStart, onDragEnd: this.onDragEnd, onTouchStart: this.onTouchStart, onTouchEnd: this.onTouchEnd, draggable: true }, loop ? this.state.children : children)),
            React.createElement("div", { className: styles.controls },
                React.createElement("button", { onClick: this.onClickPrev, className: cx([styles.btn, styles.prevBtn]) },
                    React.createElement(Arrow, { width: iconDimension || ICON_DIMENSIONS, height: iconDimension || ICON_DIMENSIONS })),
                React.createElement("button", { onClick: this.onClickNext, className: cx([styles.btn, styles.nextBtn]) },
                    React.createElement(Arrow, { width: iconDimension || ICON_DIMENSIONS, height: iconDimension || ICON_DIMENSIONS })))));
    };
    return Carousel;
}(React.Component));
export { Carousel };
