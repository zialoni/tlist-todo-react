import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    name: "",
    position: "",
    number: " ",
    task: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

    this.props.addTodo(this.state);

    this.setState({
      name: "",
      position: "",
      number: "",
      task: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.id]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={this.state.name}
          onChange={this.onChange}
        />
        <br />

        <input
          type="text"
          id="position"
          placeholder="Enter position"
          value={this.state.position}
          onChange={this.onChange}
        />
        <br />
        <input
          type="number"
          id="number"
          placeholder="Enter number"
          value={this.state.number}
          onChange={this.onChange}
        />
        <br />
        <input
          type="text"
          id="task"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.onChange}
        />
        <br />

        <input type="submit" value="SUBMIT" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
