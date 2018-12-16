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
var Sortable = /** @class */ (function (_super) {
    __extends(Sortable, _super);
    function Sortable(props) {
        var _this = _super.call(this, props) || this;
        _this.dragElementIndex = 0;
        _this.onDrop = function (e) {
            //@ts-ignore
            var idStr = e.target.getAttribute("id");
            if (!idStr) {
                e.preventDefault();
                return;
            }
            var ids = idStr.split("_");
            var dropElementIndex = parseInt(ids[ids.length - 1], 10);
            _this.moveElement(_this.dragElementIndex, dropElementIndex);
        };
        _this.onDragStart = function (e, index) {
            _this.dragElementIndex = index;
            _this.setState({
                dragClassIndex: index
            });
        };
        _this.moveElement = function (startIndex, endIndex) {
            var children = _this.state.children.slice();
            var dragElem = children[startIndex];
            children.splice(startIndex, 1);
            children.splice(endIndex, 0, dragElem);
            _this.setState({
                children: children
            });
        };
        _this.onDragOver = function (e) {
            e.preventDefault();
        };
        _this.onDragEnd = function (e) {
            _this.setState({
                dragClassIndex: null
            });
        };
        _this.state = {
            children: React.Children.toArray(_this.props.children),
            dragClassIndex: null
        };
        return _this;
    }
    Sortable.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { onDrop: this.onDrop, onDragOver: this.onDragOver, className: styles.sortable }, this.state.children.map(function (child, i) { return (React.createElement("div", { className: Sortable.styleDragelem(_this.state.dragClassIndex, i), draggable: true, onDragStart: function (e) { return _this.onDragStart(e, i); }, onDragEnd: _this.onDragEnd, key: "DRAGGABLE__" + i, id: "draggable_" + i }, React.cloneElement(child, { id: "draggable_inner_" + i }))); })));
    };
    Sortable.styleDragelem = function (dragIndex, index) {
        var _a;
        return cx((_a = {},
            _a[styles.draggable] = true,
            _a[styles.dragging] = dragIndex === index,
            _a));
    };
    return Sortable;
}(React.Component));
export { Sortable };
