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
var Get = /** @class */ (function (_super) {
    __extends(Get, _super);
    function Get(props) {
        var _this = _super.call(this, props) || this;
        _this.fetch = function () {
            var options = _this.props.options;
            var DEFAULT_HEADERS = {
                "content-type": "application/json; charset=utf-8"
            };
            var promises = options.map(function (o) {
                return fetch(o.url, {
                    method: "GET",
                    headers: o.headers || DEFAULT_HEADERS
                }).then(function (res) { return res.json(); });
            });
            return Promise.all(promises)
                .then(function (res) {
                _this.setState({
                    error: null,
                    loading: false,
                    data: res
                });
            })
                .catch(function (err) {
                _this.setState({
                    error: err,
                    loading: false,
                    data: null
                });
            });
        };
        _this.state = {
            error: null,
            data: null,
            loading: true
        };
        return _this;
    }
    Get.prototype.componentDidMount = function () {
        this.fetch();
    };
    Get.prototype.render = function () {
        return this.props.children(this.state);
    };
    return Get;
}(React.Component));
export { Get };
