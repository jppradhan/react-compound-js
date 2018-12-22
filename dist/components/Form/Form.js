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
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.formElem = null;
        _this.onSubmit = function (e) {
            e.preventDefault();
            var newValues = {};
            var fields = _this.state.fields;
            for (var key in fields) {
                newValues[fields[key].name] = fields[key].value;
            }
            _this.props.onSubmit(newValues);
        };
        _this.onReset = function (e) {
            e.preventDefault();
            _this.setState({
                fields: _this.setFormFields(),
                isChanged: false,
                isValid: _this.getFormValidity()
            });
            _this.props.onReset();
        };
        _this.bindEvents = function () {
            if (_this.formElem) {
                _this.formElem.addEventListener("submit", _this.onSubmit);
                _this.formElem.addEventListener("reset", _this.onReset);
            }
        };
        _this.unBindEvents = function () {
            if (_this.formElem) {
                _this.formElem.removeEventListener("submit", _this.onSubmit);
                _this.formElem.removeEventListener("reset", _this.onReset);
            }
        };
        _this.setFormFields = function () {
            var _a = _this.props, formValues = _a.formValues, validate = _a.validate;
            var newFormState = {};
            var _loop_1 = function (key) {
                newFormState[key] = {
                    name: key,
                    value: formValues[key],
                    onChange: function (e) {
                        _this.onFieldChange(key, e.target.value);
                    },
                    format: validate && _this.isValidField(validate[key], formValues[key])
                        ? "default"
                        : "error",
                    isValid: validate
                        ? _this.isValidField(validate[key], formValues[key])
                        : true
                };
            };
            for (var key in formValues) {
                _loop_1(key);
            }
            return newFormState;
        };
        _this.onFieldChange = function (key, newValue) {
            var validate = _this.props.validate;
            _this.setState(function (prevState) {
                var _a;
                return (__assign({}, prevState, { fields: __assign({}, prevState.fields, (_a = {}, _a[key] = __assign({}, prevState.fields[key], { value: newValue, format: validate && _this.isValidField(validate[key], newValue)
                            ? "success"
                            : "error", isValid: validate
                            ? _this.isValidField(validate[key], newValue)
                            : true }), _a)), isChanged: true }));
            }, function () {
                _this.setState({
                    isValid: _this.getFormValidity()
                });
            });
        };
        _this.isValidField = function (rule, newValue) {
            return new RegExp(rule).test(newValue);
        };
        _this.getFormValidity = function () {
            var valid = true;
            for (var key in _this.state.fields) {
                if (!_this.state.fields[key].isValid) {
                    valid = false;
                    break;
                }
            }
            return valid;
        };
        _this.state = {
            fields: _this.setFormFields(),
            isChanged: false,
            isValid: false
        };
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        this.bindEvents();
    };
    Form.prototype.componentWillUnmount = function () {
        this.unBindEvents();
    };
    Form.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return React.createElement("form", { ref: function (e) { return (_this.formElem = e); } }, children(this.state));
    };
    return Form;
}(React.Component));
export { Form };
