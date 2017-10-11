import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      render() {
        return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/" className="Navbar-brand">ENTER JOSEPH</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                
                <Nav className="ml-auto" navbar>
                    <NavItem className="Nav-item">
                        <NavLink href="https://twitter.com/jsphbtst">Twitter</NavLink>
                    </NavItem>
                    <NavItem className="Nav-item">
                        <NavLink href="https://medium.com/@jsphbtst">Medium</NavLink>
                    </NavItem>
                    <NavItem className="Nav-item">
                        <NavLink href="https://github.com/jsphbtst">GitHub</NavLink>
                    </NavItem>
                    <NavItem className="Nav-item">
                        <NavLink href="/contact-me">Contact Me</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
          </div>
        );
    }
}
export default Header;