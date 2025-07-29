import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => (
  <footer className="border-top border-secondary pt-5 pb-3" style={{ backgroundColor: "#fff", color: "#000" }}>
    <Container>
      <Row className="mb-4">
        <Col md={3} className="mb-4 mb-md-0">
          <p>At Pathway Humanity, we team up with people, communities, and groups to help them reach their full potential, no matter where they're starting from. We're all about making change for the better.</p>
        </Col>
        <Col md={3} className="mb-4 mb-md-0">
          <h6 className="fw-bold mb-3" style={{ color: "#000" }}>Company</h6>
          <ul className="list-unstyled small">
            <li><a href="/mission" className="footer-link">Mission</a></li>
            <li><a href="/workforce" className="footer-link">Workforce Development Initiatives</a></li>
            <li><a href="/social-purpose-initiatives" className="footer-link">Social Purpose Initiatives</a></li>
            <li><a href="/applicants" className="footer-link">Applicants</a></li>
            <li><a href="/employers" className="footer-link">Employers</a></li>
          </ul>
        </Col>
        <Col md={3} className="d-flex flex-column align-items-center">
          <div className="text-center small mb-2">
            Privacy and security are the foundation of everything we do.
          </div>
        </Col>
      </Row>
      <hr style={{ borderColor: "#000" }} />
      <Row className="align-items-center text-center text-md-start">
        <Col md={6} className="small">
          © 2025 Pathway Humanity SPC. All rights reserved.
        </Col>
        <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-3 small">
          <a href="#" className="footer-link">Accessibility</a>
          <span>|</span>
          <a href="#" className="footer-link">Privacy</a>
          <span>|</span>
          <a href="#" className="footer-link">Terms of Use</a>
        </Col>
      </Row>
    </Container>

    <style jsx>{`
      .footer-link {
        color: #000;
        text-decoration: none;
      }
      .footer-link:hover {
        color: #1c7acb;
      }
    `}</style>
  </footer>
);

export default Footer;
