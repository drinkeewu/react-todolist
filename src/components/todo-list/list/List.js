import React, { Component } from "react";
import Item from "../item/Item";
import {store} from '../../../store' //redux

import "./List.scss";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      inputValue: '',

      IsInputFocus: false
    };

    this.onItemBlur = this.onItemBlur.bind(this)
    this.onInputBlur = this.onInputBlur.bind(this)
    this.onInputFocus = this.onInputFocus.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onInputKeyUp = this.onInputKeyUp.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.updateTodoList = this.updateTodoList.bind(this)
    this.onItemChange = this.onItemChange.bind(this)
    
  }

  
  onItemBlur(e, index) {
    const { list } = this.state;
    this.setState({
      list
    })
  }
  onItemChange(val, index) {
    const { list } = this.state;
    list[index].value = val;
    store.dispatch({
      type: 'UPDATE_TODO',
      payload: {
        list: list
      }
    })
    this.updateTodoList()
  }

  

  onInputBlur(e) {
    
  }

  onInputFocus(e) {
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

 
  onInputKeyUp(e) {
    if(e.keyCode !== 13 || !e.target.value){
      return false;
    }
    this.handleAddTodo(e.target.value.trim())
    
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
    this.setState({
      inputValue : ''
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
          onChange={this.onInputChange}
          value={this.state.inputValue}
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
                  onChange={this.onItemChange}
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
