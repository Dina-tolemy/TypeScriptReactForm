"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var header_1 = require("./components/Header/header");
var form_1 = require("./components/Form/form");
ReactDom.render(React.createElement("div", null,
    React.createElement(header_1.Header, null),
    React.createElement(form_1.Form, null)), document.querySelector('#root'));
