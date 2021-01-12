"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var React = require("react");
function Form() {
    return (React.createElement("div", null,
        React.createElement("h5", null, "Enter your information: "),
        React.createElement("form", null,
            React.createElement("label", null, "Name:"),
            React.createElement("input", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("label", null, "Email:"),
            React.createElement("input", null))));
}
exports.Form = Form;
