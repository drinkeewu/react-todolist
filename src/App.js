import React, { Component } from 'react';
import './App.css';

import TodoList from './components/todo-list'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoList: [{
         name: 'test'
       }]
    };
  };
  
  render() {
    return (
      <div className="App">
        <TodoList list={this.state.todoList}></TodoList>
      </div>
    );
  }
}

export default App;
