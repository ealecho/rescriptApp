

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

function reducer(state, action) {
  switch (action.TAG | 0) {
    case /* AddTodo */0 :
        var todos = Belt_Array.concat(state.todos, [{
                id: state.nextId,
                content: action._0,
                completed: false
              }]);
        return {
                todos: todos,
                nextId: state.nextId + 1 | 0
              };
    case /* RemoveTodo */1 :
        var id = action._0;
        var todos$1 = Belt_Array.keep(state.todos, (function (todo) {
                return todo.id !== id;
              }));
        return {
                todos: todos$1,
                nextId: state.nextId
              };
    case /* ToggleTodo */2 :
        var id$1 = action._0;
        var todos$2 = Belt_Array.map(state.todos, (function (todo) {
                if (todo.id === id$1) {
                  return {
                          id: todo.id,
                          content: todo.content,
                          completed: !todo.completed
                        };
                } else {
                  return todo;
                }
              }));
        return {
                todos: todos$2,
                nextId: state.nextId
              };
    
  }
}

var initialTodos = [{
    id: 1,
    content: "Try Rescript & React",
    completed: false
  }];

function TodoApp(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setText = match[1];
  var text = match[0];
  var match$1 = React.useReducer(reducer, {
        todos: initialTodos,
        nextId: 2
      });
  var dispatch = match$1[1];
  var todos = Belt_Array.map(match$1[0].todos, (function (todo) {
          return React.createElement("li", undefined, todo.content, React.createElement("button", {
                          onClick: (function (param) {
                              return Curry._1(dispatch, {
                                          TAG: /* RemoveTodo */1,
                                          _0: todo.id
                                        });
                            })
                        }, "Remove"), React.createElement("input", {
                          checked: todo.completed,
                          type: "checkbox",
                          onChange: (function (param) {
                              return Curry._1(dispatch, {
                                          TAG: /* ToggleTodo */2,
                                          _0: todo.id
                                        });
                            })
                        }));
        }));
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Todo List:"), React.createElement("input", {
                  value: text,
                  onKeyDown: (function (e) {
                      if (e.key === "Enter") {
                        Curry._1(dispatch, {
                              TAG: /* AddTodo */0,
                              _0: text
                            });
                        return Curry._1(setText, (function (param) {
                                      return "";
                                    }));
                      }
                      
                    }),
                  onChange: (function ($$event) {
                      $$event.preventDefault();
                      var value = $$event.target.value;
                      return Curry._1(setText, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("ul", undefined, todos));
}

var make = TodoApp;

export {
  reducer ,
  initialTodos ,
  make ,
  
}
/* react Not a pure module */
