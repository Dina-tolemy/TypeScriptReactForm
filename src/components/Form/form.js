"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var radioButton_1 = require("../RadioButton/radioButton");
var submitButton_1 = require("../SubmitButton/submitButton");
//ask about using the ... 
var Form = function () {
    return (React.createElement("div", null,
        React.createElement("form", null,
            React.createElement("div", { className: "form-group" },
                React.createElement("label", null, "Name: "),
                React.createElement("br", null),
                React.createElement("input", { type: "name", className: "form-control", id: "name" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("label", null, "Email: "),
                React.createElement("br", null),
                React.createElement("input", { type: "email", className: "form-control", id: "email" }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("label", { style: { textAlign: 'left' } }, "Gender: "),
                React.createElement("br", null),
                React.createElement(radioButton_1.default, __assign({}, { choice: false, text: "Male" })),
                React.createElement(radioButton_1.default, __assign({}, { choice: false, text: "Female" })),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(submitButton_1.default, null)))));
};
exports.default = Form;
