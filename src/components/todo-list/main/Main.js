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

    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem() {
    const {todoList} = this.state;
    todoList.push({
      name: '',
      editing: false
    })    
    this.setState({
      todoList: todoList
    })
  }

  render() {
    return (
      <div className="todo-list-wrapper">
        <Header />
        <List list={this.state.todoList}/>
        <AddButton onClick={this.handleAddItem} />
      </div>
    );
  }
}

export default TodoList;
