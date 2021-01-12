"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
//function Header(props){
var Header = function (props) {
    return (React.createElement("h1", { style: { color: '#666699', textAlign: 'center', fontFamily: 'Helvetica' } }, props.text));
};
exports.default = Header;
