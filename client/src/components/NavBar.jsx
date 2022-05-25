import React from "react";

import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem("USER"));
  return (
    <>
      <Navbar bg='light' expand='sm' className='mb-3'>
        <Container fluid>
          <Navbar.Brand href='/'>Tri-Ratna Secondary School</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/add'>Courses</Nav.Link>
                {user ? (
                  <Nav.Link href='/login' onClick={() => localStorage.clear()}>
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link href='/login'>Login</Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
