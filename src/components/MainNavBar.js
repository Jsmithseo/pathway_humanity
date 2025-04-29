// src/components/MainNavbar.jsx
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import Image from 'next/image';
import logo from '../../src/images/logo.png'; // adjust path as needed

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="py-3 shadow-sm">
      <Container fluid className="px-4">
        <NavbarBrand href="/" className="d-flex align-items-center">
          <Image
            src={logo}
            alt="Logo"
            width={140}
            height={50}
            style={{ height: 'auto', width: 'auto', maxHeight: '150px' }}
            priority
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto d-flex align-items-center" navbar>
            <NavItem>
              <NavLink href="/about" className="px-3">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/programs" className="px-3">
                Programs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="px-3">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
