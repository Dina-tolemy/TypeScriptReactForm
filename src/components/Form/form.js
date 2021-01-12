"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var radioButton_1 = require("../RadioButton/radioButton");
var Form = function () {
    return (React.createElement("div", null,
        React.createElement("form", { style: { color: 'darkgrey', textAlign: 'center' } },
            React.createElement("label", null, "Name: "),
            React.createElement("br", null),
            React.createElement("input", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("label", null, "Email: "),
            React.createElement("br", null),
            React.createElement("input", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("label", { style: { textAlign: 'left' } }, "Gender: "),
            React.createElement("br", null),
            React.createElement("label", null, "Male: "),
            React.createElement(radioButton_1.default, { choice: false }),
            React.createElement("label", null, "Female: "),
            React.createElement(radioButton_1.default, { choice: false }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("button", null, "Submit data"))));
};
exports.default = Form;
