import React, { Component } from 'react'
import './footer.scss'
class Footer extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }
  
 handleTabChange(e) {
   console.log(e.target)
 }
  
  render(){
    const { leftCount } = this.props
    return (
      <footer className="todo-list-footer">
        <span className="todo-count">
          {leftCount ? leftCount : 'No'} item left
        </span>
        <div className="filter-tabs">
          <button onClick={this.handleTabChange} className="filter-tab">All</button>
          <button onClick={this.handleTabChange} className="filter-tab">Active</button>
          <button onClick={this.handleTabChange} className="filter-tab">Completed</button>
        </div>
        <button className="clear-completed">
          Clear Completed
        </button>
      </footer>
      )
    }
}

export default Footer;