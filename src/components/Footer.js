import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <footer className="bg-white border-top border-secondary pt-5 pb-3">
    <Container>
      <Row className="mb-4">
        <Col md={3} className="mb-4 mb-md-0">
        <p>At Pathway Humanity, we team up with people, communities, and groups to help them reach their full potential, no matter where they're starting from. We're all about making change for the better.</p>
        </Col>
        {/* <Col md={3} className="mb-4 mb-md-0">
          <h6 className="fw-bold text-success mb-3">Solutions</h6>
          <ul className="list-unstyled small">
            <li><a href="#">Measurement-Based Care</a></li>
            <li><a href="#">Client Intake</a></li>
            <li><a href="#">Pop Health</a></li>
          </ul>
        </Col> */}
        <Col md={3} className="mb-4 mb-md-0">
          <h6 className="fw-bold text-success mb-3">Company</h6>
          <ul className="list-unstyled small">
            <li><a href="/mission">Mission</a></li>
            <li><a href="/workforce">Workforce Development Initiatives</a></li>
            <li><a href="/social-purpose-initiatives">Social Purpose Initiatives</a></li>
            <li><a href="/applicants">Applicants</a></li>
            <li><a href="/employers">Employers</a></li>
          </ul>
        </Col>
        <Col md={3} className="d-flex flex-column align-items-center">
          <div className="text-center small mb-2">
            Privacy and security are the foundation of everything we do.
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="align-items-center text-center text-md-start">
        <Col md={6} className="small text-muted">
          Copyright 2025 Pathway Humanity SPC. All rights reserved.
        </Col>
        <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-3 small">
          <a href="#" className="text-decoration-none text-secondary">Accessibility</a>
          <span className="text-success">|</span>
          <a href="#" className="text-decoration-none text-secondary">Privacy</a>
          <span className="text-success">|</span>
          <a href="#" className="text-decoration-none text-secondary">Terms of Use</a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
