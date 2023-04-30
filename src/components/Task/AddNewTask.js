import React, { useContext } from "react";

import TodoContext from "../contexts/TodoContext";

const AddNewTask = () => {
    
    const context = useContext(TodoContext);

    return (
        <>
            <div className="w-50 mx-auto fixed-bottom nb-5 p-3 wrapper">
                <form
                    className="form-inline justify-content-center"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="input-group w-100">
                        <input
                            type="text"
                            className="form-control rounded"
                            placeholder="Add new task"
                            value={context.todo}
                            onChange={context.handleTodoInput}
                        />
                        <div className="input-group-prepend">
                            <button
                                onClick={context.handleCreateNewTodo}
                                className="btn btn-sm bg-transparent fa fa-plus-square"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewTask;
