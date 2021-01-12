"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//function Header(props){
var RadioButton = function (props) {
    return (React.createElement("label", null,
        React.createElement("input", { type: "radio", id: "genderRadio" }),
        props.text));
};
exports.default = RadioButton;
