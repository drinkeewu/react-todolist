import React, { Component } from "react";
import "./item.scss";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleDoubleClick() {
    this.setState(state => ({
      editing: !state.editing
    }));
  }

  handleOnBlur(e) {
    this.props.onBlur(e, this.props.data.index)
  }

  handleInputChange(event) {
    this.setState({ data: event.target.value })
  }

  handleOnKeyUp(e) {
    
  }

  render() {
    const { data, editing } = this.state;
    // 非编辑状态
    if (!editing) {
      return (
        <div className="todo-list-item" onDoubleClick={this.handleDoubleClick}>
          <div className="item-check-dot" />
          <div className="item-content">
            {this.props.children}
            { data && data.name }
          </div>
        </div>
      );
    }
    // 编辑状态
    return (
      <div className="todo-list-item" onDoubleClick={this.handleDoubleClick}>
        <div className="item-content editing">
          <input 
            ref={input => this.input = input}
            className="item-input" value={ data.name } 
            onChange={this.handleInputChange} 
            onBlur={this.handleOnBlur}
            onKeyUp={this.handleOnKeyUp}/>
        </div>  
      </div>  
    );
  }
}

export default Item;
