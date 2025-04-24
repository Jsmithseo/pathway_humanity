// src/components/Footer.jsx

import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f9f9f7' }} className="py-4 border-top">
      <Container>
        <Row className="align-items-center">
          <Col md="6" className="text-center text-md-start mb-3 mb-md-0">
            <strong>ABC Mental Toughness</strong> © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            <Nav className="justify-content-center justify-content-md-end">
              <NavItem>
                <NavLink href="/about" className="text-dark fw-semibold">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/programs" className="text-dark fw-semibold">Programs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" className="text-dark fw-semibold">Contact</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
