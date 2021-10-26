import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {" "}
        <input
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          type="checkbox"
          checked={this.props.todo.completed}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
