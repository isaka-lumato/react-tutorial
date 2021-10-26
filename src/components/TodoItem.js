import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        {" "}
        <input
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
          type="checkbox"
          checked={completed}
          className={styles.checkbox}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={this.props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
