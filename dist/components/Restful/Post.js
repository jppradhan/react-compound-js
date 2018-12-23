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
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(props) {
        var _this = _super.call(this, props) || this;
        _this.post = function (options) {
            var DEFAULT_HEADERS = {
                "content-type": "application/json; charset=utf-8"
            };
            var promises = options.map(function (o) {
                return fetch(o.url, {
                    method: _this.props.method || "POST",
                    headers: o.headers || DEFAULT_HEADERS,
                    body: o.body || ""
                }).then(function (res) { return res.json(); });
            });
            _this.setState({
                loading: true
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
            loading: false,
            data: null
        };
        return _this;
    }
    Post.prototype.render = function () {
        return this.props.children({
            post: this.post,
            loading: this.state.loading,
            error: this.state.error,
            data: this.state.data
        });
    };
    return Post;
}(React.Component));
export { Post };
