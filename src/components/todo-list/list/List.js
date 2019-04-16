import React, { Component } from "react";
import Item from "../item/Item";
import actions from '../../../store/actions'

import { connect } from 'react-redux'

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
    this.onItemChange = this.onItemChange.bind(this)
    
  }

  
  onItemBlur(e, index) {
    
  }
  onItemChange(val, index) {
  
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

  onDelete(todo) {
    console.log(todo)
    
  }

  handleAddTodo(value) {
    this.props.addTodo({
      value: value,
      complete: false,
      id: new Date().getTime()
    })
    this.setState({
      inputValue : ''
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
          this.props.todos.map((item, index) => {
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

//注入 actions 导出注入了redux的组件
export default connect(state => ({
  ...state
}), actions)(List);
