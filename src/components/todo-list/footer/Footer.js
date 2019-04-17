import React, { Component } from "react";
import "./footer.scss";

import actions from "../../../store/actions";
import { connect } from "react-redux";

const filters = [{
  type: 'all',
  text: 'All'
}, {
  type: 'active',
  text: 'Active'
}, {
  type: 'completed',
  text: 'Completed'
}]

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  this.handleFilter = this.handleFilter.bind(this)

  }

  handleFilter(type) {
    this.props.onTabChange(type)
  }

  render() {
    const { leftCount, todos, activeFilter } = this.props;
    const completedCount = todos.filter(todo => todo.complete).length;
    return (
      <footer className="todo-list-footer">
        <span className="todo-count">
          {leftCount ? leftCount : "No"} item left
        </span>
        <div className="filter-tabs">
        {
          filters.map(filter => (
            <button 
              className={filter.type === activeFilter ? 'filter-tab active': 'filter-tab'}
              onClick={e => this.handleFilter(filter.type)}
              key={`filter-${filter.type}`}
            >
              { filter.text }
            </button>
          ))
        }
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
