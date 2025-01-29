import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBar() {
  const styles = {
    navHead: {
      backgroundColor: 'BE564A !important',
      color: 'white',
      
    },
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb">
      <Container>
        {/* Brand Name */}
        <Navbar.Brand href="#home" style={styles.navHead}>
          izuChi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Hash-based scrolling links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
