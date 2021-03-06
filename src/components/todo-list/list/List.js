import React, { Component } from "react";
import Item from "../item/Item";
import Footer from '../footer/Footer'

import actions from '../../../store/actions'
import { connect } from 'react-redux'

import "./List.scss";

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.complete),
  completed: todos => todos.filter(todo => todo.complete),
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',

      activeFilter: 'all',
      IsInputFocus: false,
      isCheckAll: false,
    };

    this.onInputChange = this.onInputChange.bind(this)
    this.onInputKeyUp = this.onInputKeyUp.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.filteredTodos = this.filteredTodos.bind(this)
    this.handleToggleTab = this.handleToggleTab.bind(this)
    this.toggleAllTodos = this.toggleAllTodos.bind(this)
    this.toggleCheckAll = this.toggleCheckAll.bind(this)
    this.onClearComplete = this.onClearComplete.bind(this)
    
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

  filteredTodos() {
    const { todos } = this.props
    const { activeFilter } = this.state
    return filters[activeFilter](todos) || []
  }

  toggleAllTodos() {
    this.props.toggleAllTodos({
      isCheckAll: this.state.isCheckAll
    })
    this.toggleCheckAll()
  }

  toggleCheckAll() {
    if(this.props.todos.length === 0){
      return;
    }
    this.setState(state => ({
      isCheckAll: !state.isCheckAll
    }))
  }
 

  handleToggleTab(type) {
    this.setState({
      activeFilter: type
    })
    this.filteredTodos()
  }

  onClearComplete() {
    this.setState({
      isCheckAll: false
    })
  }

  
  

  render() {
    const filteredTodos = this.filteredTodos() || [];
    const { todos } = this.props;
    const leftCount = filters.active(todos).length
    return (
      <div className="todo-list">
        <i
          onClick={this.toggleAllTodos}
          className={`iconfont icon-quanxuan ${
            this.state.isCheckAll 
             ? 'active'
             : ''
          }`}
        />
        <input
          className="todo-input"
          placeholder="What need to do ?"
          onKeyUp={this.onInputKeyUp}
          onChange={this.onInputChange}
          value={this.state.inputValue}
        >
        </input>
        {
          filteredTodos.map((item, index) => {
            return (
                <Item 
                  key={`item-${index}`}
                  data={Object.assign(item, {index})}
                  index={index}
                >
                </Item>
              )
          })
        }
        {
          this.props.todos.length > 0 &&
          <Footer 
            activeFilter={this.state.activeFilter}
            leftCount={leftCount}
            onTabChange={this.handleToggleTab}
            onClearComplete={this.onClearComplete}
          />
        }
      </div>
    );
  }
}

//注入 actions 导出注入了redux的组件
export default connect(state => ({
  ...state
}), actions)(List);
