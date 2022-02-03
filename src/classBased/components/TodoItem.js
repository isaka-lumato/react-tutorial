import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
   if (e.key === "Enter") {
     this.setState({ editing: false });
   }
  };

  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          {" "}
          <input
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            type="checkbox"
            checked={completed}
            className={styles.checkbox}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
