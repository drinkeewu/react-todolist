import React, { Component } from "react";
import "./item.scss";

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
  }

  handleDoubleClick() {
    this.setState({
      editing: true
    });
  }

  handleOnBlur(e) {
    this.props.onBlur(e, this.props.data.index)
    this.setState({
      editing: false
    })
  }

  handleInputChange(event) {
    this.props.onChange(event.target.value, this.state.index)
  }

  handleDelete() {
    this.props.onDelete(this.state.index)
  }


  

  render() {
    const { data, editing } = this.state;
    // 非编辑状态
    if (!editing) {
      return (
        <div className="todo-list-item" onDoubleClick={this.handleDoubleClick}>
          <label className="item-check-dot" />
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

export default Item;
