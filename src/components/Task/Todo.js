import React from "react";

const Todo = ({ text, isCompleted, deleted, completed }) => {

    return (
        <>
            <div
                className={`todo-indicator ${
                    isCompleted ? "bg-success" : "bg-warning"
                }`}
            ></div>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-right flex-1">
                        <div className="widget-heading">
                            {isCompleted ? <del>{text}</del> : text}
                        </div>
                    </div>
                    <div className="widget-content-flex">
                        {" "}
                        <button
                            className="border-0 btn-transition btn btn-outline-success"
                            onClick={completed}
                        >
                            {" "}
                            <i className="fa fa-check"></i>
                        </button>{" "}
                        <button
                            className="border-0 btn-transition btn btn-outline-danger"
                            onClick={deleted}
                        >
                            {" "}
                            <i className="fa fa-trash"></i>{" "}
                        </button>{" "}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
