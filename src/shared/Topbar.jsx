import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar, Nav, NavItem
} from 'reactstrap'

class Topbar extends Component {
  render() {
    return(
      <Navbar className="topBar" color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">About Us</Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link to="/news" className="nav-link">News</Link>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default Topbar
