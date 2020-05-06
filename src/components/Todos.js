import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
export class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <div key={todo.id} className="appList">
        <TodoItem
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      </div>
    ));
  }
}

export default Todos;
