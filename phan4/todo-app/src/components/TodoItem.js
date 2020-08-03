import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item">
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={() => this.props.handleChange(this.props.todo.id)}
                />

                {this.props.todo.title}
            </li>
        );
    }
}
export default TodoItem;
