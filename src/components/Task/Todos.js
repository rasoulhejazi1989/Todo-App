import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../contexts/TodoContext";

const Todos = () => {
    const context = useContext(TodoContext);
    const { todos, handleDeleteTodo, handleCompletedTodo } = context;

    
    return (
        <ul className="list-group list-group-flush">
            {todos.length > 0 ? (
                todos.map(todo => (
                    <li key={todo.id} className="list-group-item">
                        <Todo
                            text={todo.text}
                            isCompleted={todo.completed}
                            deleted={() => handleDeleteTodo(todo.id)}
                            completed={() => handleCompletedTodo(todo.id)}
                        />
                    </li>
                ))
            ) : (
                <div className="alert alert-light mt-3 w-75 mx-auto">
                    <p className="text-center">There's no task for today</p>
                </div>
            )}
        </ul>
    );
};

export default Todos;
