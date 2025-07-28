// pages/employers.js

import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// HR Consulting Features
const FEATURES = [
  {
    title: "Talent Acquisition & Retention",
    desc: "Identify, attract, and retain top talent with proven strategies for effective recruitment, onboarding, and employee engagement."
  },
  {
    title: "Employee Relations Management",
    desc: "Guidance and support for fostering positive communication, conflict resolution, and a supportive workplace culture."
  },
  {
    title: "Policy Development & Implementation",
    desc: "Develop and implement clear, fair, and compliant HR policies that encourage best practices and ensure a safe work environment."
  },
  {
    title: "Organizational Growth & Development",
    desc: "Assess HR needs, identify areas for improvement, and implement strategies for growth, efficiency, and success."
  },
  {
    title: "Workplace Optimization",
    desc: "Create productive, harmonious, and thriving work environments that help your business achieve its objectives and enhance employee satisfaction."
  }
];

export default function Employers() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/images/hero_image2.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Employers
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 720, margin: "0 auto" }}>
            Strategic Human Resources Consulting: Cultivating Productive Work Environments
          </p>
        </Container>
      </div>

      {/* MAIN CONTENT CARD */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                  Optimize Your Workforce with Pathway Humanity
                </h3>
                <p style={{ fontSize: 17 }}>
                  Beyond individual support, Pathway Humanity extends its expertise to businesses through our human resources consulting services. We offer tailored solutions designed to foster productive, harmonious, and thriving work environments.
                </p>
                <ul style={{ fontSize: 16, marginBottom: 18 }}>
                  <li>
                    <b>Talent Acquisition and Retention:</b> We assist businesses in identifying, attracting, and retaining top talent, developing strategies for effective recruitment, onboarding, and employee engagement.
                  </li>
                  <li>
                    <b>Employee Relations Management:</b> We provide guidance and support in managing employee relations, fostering positive communication, conflict resolution, and creating a supportive workplace culture.
                  </li>
                  <li>
                    <b>Policy Development and Implementation:</b> We help organizations develop and implement clear, fair, and compliant HR policies that promote best practices and ensure a safe and respectful work environment.
                  </li>
                  <li>
                    <b>Organizational Growth and Development:</b> We partner with businesses to assess their HR needs, identify areas for improvement, and implement strategies that support organizational growth, efficiency, and overall success.
                  </li>
                </ul>
                <p style={{ fontSize: 17 }}>
                  By optimizing their human capital, businesses can achieve their objectives, enhance employee satisfaction, and cultivate a dynamic and productive workforce.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FEATURES SECTION */}
      <Container className="mb-5">
        <Row className="gy-4 justify-content-center">
          {FEATURES.map((feature, idx) => (
            <Col xs={12} md={6} lg={4} key={idx}>
              <Card className="h-100 shadow-sm border-0 rounded-4">
                <CardBody>
                  <h5 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>{feature.title}</h5>
                  <p style={{ fontSize: 16 }}>{feature.desc}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CALL TO ACTION / CTA */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Ready to grow your team?
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Connect with us to discover how our HR expertise can help your business attract, retain, and empower the talent you need to thrive.
            </p>
            <Button color="success" className="fw-bold px-4 rounded-3">
              CONTACT US
            </Button>
          </Col>
          {/* <Col md={4} className="text-center p-0">
            <img
              src="/about.jpg"
              alt="Teamwork"
              style={{
                maxHeight: 200,
                width: "auto",
                objectFit: "contain"
              }}
            />
          </Col> */}
        </Row>
      </Container>

      <Footer />
    </>
  );
}
