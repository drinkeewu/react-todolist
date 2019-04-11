import React, { Component } from "react";
import "./Main.scss";

import Header from "../header/Header";
import List from "../list/List";
import AddButton from "../add-button/AddButton";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: this.props.list
    };
  }

  handleAddItem() {
    this.setState(state => ({
      todoList: state.todoList.push({
        name: ''
      })
    }))
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <Header />
        <List list={this.state.todoList}/>
        <AddButton />
      </div>
    );
  }
}

export default TodoList;
