

import * as ReactDom from "react-dom";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function createRootWithId(id) {
  var element = document.getElementById(id);
  if (!(element == null)) {
    return Caml_option.some(ReactDom.createRoot(element));
  }
  
}

export {
  createRootWithId ,
  
}
/* react-dom Not a pure module */
