type todo = {
    id: int,
    content: string,
    completed: bool,
}


type action =
    | AddTodo(string)
    | RemoveTodo(int)
    | ToggleTodo(int)

type state = {
    todos: array<todo>,
    nextId: int,
}

let reducer = (state, action) =>
    switch action {
        | AddTodo(content) => {
            let todos = state.todos->Belt.Array.concat(
                [
                    {
                        id: state.nextId,
                        content,
                        completed: false, 
                    }
                ]
            );
            {todos: todos, nextId: state.nextId + 1 }
        };
        | RemoveTodo(id) => {
            let todos = state.todos->Belt.Array.keep(todo => todo.id !== id );
            {...state, todos: todos};
        }
        | ToggleTodo(id) => {
            let todos = state.todos->Belt.Array.map( todo => todo.id === id? {...todo, completed: !todo.completed} : todo)
            {...state, todos:todos};
        }
    }

    let initialTodos = [{
        id:1,
        content: "Try Rescript & React",
        completed:false
        }]
    @react.component
    let make = () => {
        let (text, setText) = React.useState(_ => "")
        let (state, dispatch) = React.useReducer(
            reducer,
            {todos: initialTodos, nextId: 2},
        )
        let todos = state.todos->Belt.Array.map(todo =>{
            <li>
                {React.string(todo.content)}
                <button onClick={_ => dispatch(RemoveTodo(todo.id))}>
                    {React.string("Remove")}
                </button>
                <input 
                    type_="checkbox"
                    checked=todo.completed 
                    onChange={_ => dispatch(ToggleTodo(todo.id))}
                />
            </li>
        });
        <>
            <h1>
                {React.string("Todo List:")}
            </h1>
            <input 
            value=text
            onChange={
                event => {
                    event->ReactEvent.Form.preventDefault;
                    let value = ReactEvent.Form.target(event)["value"];
                    setText(_ => value)
                };
            } 

            onKeyDown={
                e => {
                    if ReactEvent.Keyboard.key(e) == "Enter" {
                        dispatch(AddTodo(text))
                        setText(_ => "")
                        
                    }
                }
            }
            
            />
            <ul>
                {React.array(todos)}
            </ul>
        </>
    };