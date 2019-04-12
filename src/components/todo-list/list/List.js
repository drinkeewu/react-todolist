import React, { Component } from "react";
import Item from "../item/Item";

import "./List.scss";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list
    };

    this.itemOnBlur = this.itemOnBlur.bind(this)

  }

  
  itemOnBlur(e, index) {
    const { list } = this.state;
    list[index].editing = false;
    this.setState({
      list
    })
  }

  render() {
    return (
      <div className="todo-list">
      {
        this.state.list.map((item, index) => {
          return (
              <Item 
                key={`item-${index}`}
                data={Object.assign(item, {index})}
                onBlur={this.itemOnBlur}
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
