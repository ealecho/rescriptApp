

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "./logo.svg";

import './App.css';
;

var logo = LogoSvg;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "src/App.js"), " and save to reload."), React.createElement("button", {
                      className: "App-button",
                      onClick: (function (param) {
                          return Curry._1(setCount, (function (count) {
                                        return count + 1 | 0;
                                      }));
                        })
                    }, "Count: " + String(match[0])), React.createElement("a", {
                      className: "App-link",
                      href: "https://rescript-lang.org/docs/react/latest/introduction",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn ReScript React")));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
