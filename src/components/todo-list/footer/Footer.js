import React, { Component } from "react";
import "./footer.scss";

import actions from "../../../store/actions";
import { connect } from "react-redux";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { leftCount, todos } = this.props;
    const completedCount = todos.filter(todo => todo.complete).length;
    return (
      <footer className="todo-list-footer">
        <span className="todo-count">
          {leftCount ? leftCount : "No"} item left
        </span>
        <div className="filter-tabs">
          <button className="filter-tab">All</button>
          <button className="filter-tab">Active</button>
          <button className="filter-tab">Completed</button>
        </div>
        {
          completedCount > 0 &&
          <button
           className="clear-completed"
           onClick={this.props.clearCompleted}
          >
            Clear Completed
          </button>
        }
      </footer>
    );
  }
}

//注入 actions 导出注入了redux的组件
export default connect(
  state => ({
    ...state
  }),
  actions
)(Footer);
