import React, { Component } from 'react';
import './App.scss';

import TodoList from './components/todo-list'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       todoList: [],
      
    };

  };

 
  
  render() {
    return (
      <div className="App">
        <h1 className="todo-list-title">
          Todo List
        </h1>
        <TodoList list={this.state.todoList}></TodoList>
       
      </div>
    );
  }

 }

export default App;
