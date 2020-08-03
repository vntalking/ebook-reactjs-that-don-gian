import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item">
                <input type="checkbox" />{this.props.todo.title}
            </li>
        );
    }
}
export default TodoItem;
