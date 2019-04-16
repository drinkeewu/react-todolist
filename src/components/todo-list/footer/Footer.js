import React from "react";
import "./footer.scss";

function Footer(props) {
  const { leftCount } = props;
  return (
    <footer className="todo-list-footer">
      <span className="todo-count">
        {leftCount ? leftCount : "No"} item left
      </span>
      <div className="filter-tabs">
        <button className="filter-tab">
          All
        </button>
        <button className="filter-tab">
          Active
        </button>
        <button className="filter-tab">
          Completed
        </button>
      </div>
      <button className="clear-completed">Clear Completed</button>
    </footer>
  );
}

export default Footer;
