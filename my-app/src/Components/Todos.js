import React from "react";
import Todo from "./Todo";
import style from './todos.module.css';

const Todos = (props) => {
    
    return (
        <div className={style.todos}>
            {props.todos.map((todo) => <Todo todo={todo.todo} id={todo.id} key={todo.id} onRemoveTodo={props.onRemoveTodo} />)}
        </div>
    )
}

export default Todos;