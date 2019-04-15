import React, { Component } from 'react';
import './App.scss';
import {store, actions} from './store'

import TodoList from './components/todo-list'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       todoList: [],
      
       counter: store.getState().counter
    };

    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  };

  handleIncrement() {
    store.dispatch({ type: 'INCREMENT' })
    this.setCounter()
  }

  handleDecrement() {
    store.dispatch({ type: 'DECREMENT' })
    this.setCounter()

  }

  setCounter() {
    this.setState({
      counter: store.getState().counter
    })
  }

  
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

  componentDidMount() {
    console.log(actions)
  }
 }

export default App;
