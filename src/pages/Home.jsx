import React, { Component } from 'react'

class Home extends Component {
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (param) => {
    console.log(param)
  }
  render() {
    return(
      <div className="home">
        <h4>Home Page</h4>
        <button className="btn btn-sm btn-primary" onClick={(event) => this.handleClick('Testing')}>Click Me</button>
      </div>
    )
  }
}

export default Home
