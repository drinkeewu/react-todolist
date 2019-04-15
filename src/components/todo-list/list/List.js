import React, { Component } from "react";
import Item from "../item/Item";
import {store} from '../../../store' //redux

import "./List.scss";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],

      IsInputFocus: false
    };

    this.onItemBlur = this.onItemBlur.bind(this)
    this.onInputBlur = this.onInputBlur.bind(this)
    this.onInputFocus = this.onInputFocus.bind(this)
    this.onInputKeyUp = this.onInputKeyUp.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.updateTodoList = this.updateTodoList.bind(this)
    
  }

  
  onItemBlur(e, index) {
    const { list } = this.state;
    list[index].editing = false;
    this.setState({
      list
    })
  }

  onInputBlur(e) {
    
  }

  onInputFocus(e) {
  }

 
  onInputKeyUp(e) {
    if(e.keyCode !== 13 || !e.target.value){
      return false;
    }
    this.handleAddTodo(e.target.value)
  }

  onDelete(index) {
    console.log(index)
    let {list} = this.state; 
    list.splice(index, 1)
    store.dispatch({
      type: 'DELETE_TODO',
      payload: {
        list
      }
    })
   this.updateTodoList()
  }

  handleAddTodo(value) {
    store.dispatch({
      type: 'ADD_TODO',
      payload: {
        value: value,
        complete: false
      }
    })
    this.updateTodoList()
  }

  updateTodoList() {
    console.log(store.getState())
    this.setState({
      list: store.getState().todoList
    })
  }

  render() {
    return (
      <div className="todo-list">
        <input 
          className="todo-input"
          placeholder="What need to do ?"
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
          onKeyUp={this.onInputKeyUp}
        >
        </input>
        {
          this.state.list.map((item, index) => {
            return (
                <Item 
                  key={`item-${index}`}
                  data={Object.assign(item, {index})}
                  onBlur={this.onItemBlur}
                  index={index}
                  onDelete={this.onDelete}
                >
                </Item>
              )
          })
        }
      </div>
    );
  }
}

export default List;
