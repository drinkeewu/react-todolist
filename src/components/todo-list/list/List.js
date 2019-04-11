import React, { Component } from "react";
import Item from "../item/Item";

import "./List.scss";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list
    };

  }

  handleDoubleClick() {
    console.log('double click')
  }

  render() {
    return (
      <div className="todo-list">
      {
        this.state.list.map((item, index) => {
          return <Item 
            key={`item-${index}`}
            data={item.name}
          >
          </Item>
        })
      }
      </div>
    );
  }
}

export default List;
