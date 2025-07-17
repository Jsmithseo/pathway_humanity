import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" light color="white" className="px-3 shadow-sm sticky-top">
      <NavbarBrand href="/" className="d-flex align-items-center gap-2">
        <img
          src="../images/pathway_logo.jpg"
          alt="Logo Placeholder"
          style={{ width: 75, height: 75, borderRadius: 8 }}
        />
        <span style={{ fontWeight: 'bold', color: '#0078A8' }}>Pathway Humanity</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <Link href="/" passHref legacyBehavior>
              <a className="nav-link">Home</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#about" passHref legacyBehavior>
              <a className="nav-link">About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#services" passHref legacyBehavior>
              <a className="nav-link">Services</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#stories" passHref legacyBehavior>
              <a className="nav-link">Stories</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contact" passHref legacyBehavior>
              <a className="nav-link">Contact</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#contact" passHref legacyBehavior>
              <Button color="success" className="ms-3 fw-bold">Get Help</Button>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavBar;
