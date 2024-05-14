import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

const MyNavbar = () => {
  const NavLink = ({ text, target }) => {
    return (
      <Nav.Link>
        <Link to={target} spy={true} smooth={true} offset={-70} duration={500} className="nlink">{text}</Link>
      </Nav.Link>
    );
  };

  return (
    <Navbar expand="lg" className="head" fixed='top' style={{ background: "#002244", color: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", width: "100%" }}>
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <div className="logo-circle"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink text="Home" target="home" />
            <NavLink text="Services" target="services" />
            <NavLink text="About" target="about" />
            
            <NavLink text="Product" target="product" />
            <NavLink text="ContactUs" target="contactus" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
