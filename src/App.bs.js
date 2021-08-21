

import * as React from "react";
import * as TodoApp from "./TodoApp.bs.js";
import LogoSvg from "./logo.svg";

import './App.css';
;

var logo = LogoSvg;

function App(Props) {
  return React.createElement("div", {
              className: "App"
            }, React.createElement(TodoApp.make, {}));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
