import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { id, name, position, number, task } = this.props.todo;

    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-link">
            <span>Name</span> : {name}
          </li>
          <li className="nav-link">
            <span>Position</span> :{position}
          </li>
          <li className="nav-link">
            <span>Contact</span> :{number}
          </li>
          <li className="nav-link">
            <span>Task</span> :{task}
          </li>
          <li>
            <button
              class="btn-delete"
              onClick={this.props.delTodo.bind(this, id)}
            >
              DELETE
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TodoItem;
