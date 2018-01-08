import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './header.css';

  import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div id='header-div'>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">David Kruse</NavbarBrand>
          <Link to='/resume'/>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}