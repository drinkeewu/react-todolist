import React, { Component } from "react";
import "./item.scss";
import actions from '../../../store/actions'
import { connect } from 'react-redux'

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      index: this.props.index
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
  }

  handleDoubleClick() {
    this.setState({
      editing: true
    });
  }

  handleOnBlur(e) {
    this.handleInputChange(e)
    this.setState({
      editing: false
    })
  }

  handleInputChange(event) {
    this.props.updateTodo({
      value: event.target.value,
      id: this.props.data.id
    })
  }

  handleDelete() {
    this.props.onDelete(this.state.data)
  }

  handleToggleComplete() {
    this.props.toggleComplete(this.props.data)
  }


  

  render() {
    const { data, editing } = this.state;
    // 非编辑状态
    if (!editing) {
      return (
        <div className={this.props.data.complete ? 'todo-list-item checked' : 'todo-list-item'}onDoubleClick={this.handleDoubleClick}>
          <label 
            className="item-check-dot"
            onClick={this.handleToggleComplete}
          />
          <div className="item-content">
            {this.props.children}
            { data && data.value }
          </div>
          <span 
            className="todo-delete-btn"
            onClick={this.handleDelete}
          >×
          </span>
        </div>
      );
    }
    // 编辑状态
    return (
      <div className="todo-list-item" onDoubleClick={this.handleDoubleClick}>
        <div className="item-content editing">
          <input 
            ref={input => this.input = input}
            className="item-input" 
            value={ data.value } 
            onChange={this.handleInputChange} 
            autoFocus={true}
            onBlur={this.handleOnBlur}/>
        </div>  
      </div>  
    );
  }
}


//注入 actions 导出注入了redux的组件
export default connect(state => ({
  ...state
}), actions)(Item);

