
import React, { Component } from 'react';
import './AddButton.scss'

class AddButton extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e)
  }

  render() {
    return (
      <div className="todo-list-addbtn" onClick={this.handleClick}>
        + 
      </div>
    )
  }
}

export default AddButton