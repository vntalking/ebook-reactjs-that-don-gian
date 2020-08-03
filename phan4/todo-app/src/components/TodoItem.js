import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item">{this.props.todo.title}</li>
        );
    }
}
export default TodoItem;
