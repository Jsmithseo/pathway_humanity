import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navLinkStyle = {
    fontSize: '1.1rem', // Increased font size
    fontWeight: '500',  // Slightly bolder for better readability
  };

  return (
    <Navbar expand="md" light color="white" className="px-3 shadow-sm sticky-top">
      <NavbarBrand href="/" className="d-flex align-items-center gap-2">
        <img
          src="../images/pathway_logo.jpg"
          alt="Logo Placeholder"
          style={{ width: 75, height: 75, borderRadius: 8 }}
        />
        <span style={{ fontWeight: 'bold', color: '#0078A8', fontSize: '1.25rem' }}>
          Pathway Humanity
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <Link href="/mission" className="nav-link" style={navLinkStyle}>
              Mission
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/clinicians" className="nav-link" style={navLinkStyle}>
              Schedule with Our Clinicians
            </Link>
          </NavItem>

                    {/* Events Dropdown */}
                    <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={navLinkStyle}>
              Programs
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link href="/workforce" className="dropdown-item">
                  Workforce Development Initiatives
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/social-purpose-initiatives" className="dropdown-item">
                  Social Purpose Initiatives
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/mentorship-program" className="dropdown-item">
                  Mentorship Program
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link href="/applicants" className="nav-link" style={navLinkStyle}>
              Applicants
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/employers" className="nav-link" style={navLinkStyle}>
              Employers
            </Link>
          </NavItem>

          {/* Events Dropdown */}
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={navLinkStyle}>
              Events
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <Link href="/calendar" className="dropdown-item">
                  Calendar Page
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavItem>
            <Link href="/about" className="nav-link" style={navLinkStyle}>
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/blog" className="nav-link" style={navLinkStyle}>
              Blog
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" className="nav-link" style={navLinkStyle}>
              Contact
              
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MainNavBar;
