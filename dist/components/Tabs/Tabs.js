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
import "./styles.scss";
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.previousTabIndex = 0;
        _this.goToTab = function (index) {
            _this.setState({
                activeTab: index,
                activeTabContent: _this.props.tabContent[index].content
            }, function () {
                _this.previousTabIndex = _this.state.activeTab;
            });
        };
        var _a = _this.props, activeTab = _a.activeTab, tabContent = _a.tabContent;
        _this.state = {
            activeTab: activeTab | 0,
            activeTabContent: tabContent[activeTab | 0].content
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _this = this;
        var tabContent = this.props.tabContent;
        return (React.createElement("div", { className: "c__tabs" },
            React.createElement("div", { className: "c__tab__headers" }, tabContent.map(function (tab, i) {
                return (React.createElement("div", { className: "c__tab " + (_this.state.activeTab === i ? "active" : "") + " " + (_this.previousTabIndex < _this.state.activeTab
                        ? "right"
                        : "left"), key: "TAB_" + i, onClick: function () { return _this.goToTab(i); } },
                    React.createElement("h4", null, tab.label)));
            })),
            React.createElement("div", { className: "c__tab__content" }, this.state.activeTabContent)));
    };
    return Tabs;
}(React.Component));
export { Tabs };
