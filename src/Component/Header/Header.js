import React from "react";
import { Navbar , Container , Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="md">
        <Container>
          <NavLink className='navbar-brand' to='/'>Product CRUD APP</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavLink to='/' className='nav-link'>Home</NavLink>
              <NavLink to='/create' className='nav-link'>Create</NavLink>
              <NavLink to='/products' className='nav-link'>Products</NavLink>
              <NavLink to='/categories' className='nav-link'>Categories</NavLink>
              <NavLink to='/searchFilterSort' className='nav-link'>SearchFilterSort</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
