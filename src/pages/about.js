// pages/about.js

import React from "react";
import { Container, Row, Col, Button, Card, CardBody, Input } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// Partner/Client logos
const PARTNER_LOGOS = [
  "/logos/hacsj.png",
  "/logos/airforce.png",
  "/logos/veterans.png",
  "/logos/byblack.png",
  "/logos/cagov.png",
  "/logos/usforest.png",
  "/logos/usadigital.png",
  "/logos/noh2o.png",
  "/logos/hubzone.png",
];

export default function About() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.30),rgba(42,48,56,.25)), url('/about-hero.jpg') center/cover no-repeat`,
          minHeight: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.5rem", textAlign: "center" }}>
            About Us
          </h1>
          <p className="text-white fs-5 mb-0 text-center">
            Pathway Humanity is a one-stop destination for companies looking for human resources solutions that are both effective and efficient.
          </p>
        </Container>
      </div>

      {/* WHO WE ARE */}
      <Container className="my-5">
        <Row className="align-items-center gy-4">
          <Col md={7}>
            <h6 className="fw-bold mb-2" style={{ color: "#8cc63f", letterSpacing: 1 }}>WHO WE ARE</h6>
            <h2 className="fw-bold mb-3" style={{ color: "#26813d", fontSize: "2rem" }}>
              Here’s to growth and happiness in every person’s career journey
            </h2>
            <p style={{ fontSize: 17 }}>
              <b>DeNay Ramsey</b> is the president and founder of Pathway Humanity Personnel, a human resources consulting and staffing firm. DeNay is a veteran of motivating others to perform at their highest level and managing contracts that resolve concerns for government agencies and businesses. His passion is creating opportunities for people who have gone through financial hardship, traumatic experiences and who encountered unfair judgment. DeNay draws on their entrepreneurship from his passion for helping people experience personal growth and believing that everyone is good at something when given the right opportunity. He has been a businesswoman for 15 years and in that timeframe DeNay has helped over 500 people experience life changing opportunities. Having worked with clients of all sizes, DeNay is an expert who helps organizations scale their businesses and organizations. DeNay believes that connecting with the customer is the foundation of any great strategy. He helped the Department of Veterans Affairs grow recruitment initiatives through their development and implementation of a comprehensive, tailored hiring plan. DeNay holds a degree in business administration, a certification in Human Resources Management from California State University, East Bay and is a Certified Associate in Project Management. You can contact DeNay at <a href="mailto:denay@pathwayhumanity.com">denay@pathwayhumanity.com</a>.
            </p>
            <Button color="info" className="rounded-3 px-4 py-2 fw-bold mt-3">
              DISCOVER MORE
            </Button>
          </Col>
          <Col md={3} className="text-center">
            <div className="bg-white p-4 rounded-4 shadow mb-4 d-inline-block">
              <div className="fw-bold" style={{ fontSize: 36, color: "#8cc63f" }}>25+</div>
              <div className="text-secondary" style={{ fontSize: 16 }}>YEARS OF EXPERIENCE</div>
            </div>
            <div style={{
              overflow: "hidden",
              borderRadius: "40px 120px 60px 120px / 60px 120px 60px 120px",
              width: 190,
              margin: "0 auto",
              marginTop: 8
            }}>
              <img
                src="/growth-hero.jpg"
                alt="Growth Journey"
                style={{ width: "100%", minHeight: 120, objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* OUR VALUE */}
      <Container className="mb-5">
        <Row>
          <Col md={6}>
            <h6 className="fw-bold mb-2" style={{ color: "#8cc63f" }}>OUR VALUE</h6>
            <h3 className="fw-bold mb-3" style={{ color: "#32b147" }}>
              Empowering Organizations Through Innovative HR Solutions
            </h3>
            <p>
              At Pathway Humanity, we think that maximizing human potential is the key to organizational success. This is why we are committed to providing innovative, customized HR solutions that enable organizations to achieve their objectives.
            </p>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm mb-3">
              <CardBody className="d-flex flex-wrap gap-3 justify-content-between">
                <div className="flex-fill text-center">
                  <div className="fw-bold text-primary mb-2">Our Vision</div>
                  <p className="text-secondary mb-0" style={{ fontSize: 15 }}>
                    Our vision is to ensure that the hiring process for businesses goes as smoothly as possible.
                  </p>
                </div>
                <div className="flex-fill text-center">
                  <div className="fw-bold text-success mb-2">Our Mission</div>
                  <p className="text-secondary mb-0" style={{ fontSize: 15 }}>
                    Providing innovative HR solutions that enable companies to realize their full potential.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* PARTNER/CLIENT LOGOS GRID SECTION */}
      <div style={{ background: "#f9f9f9", padding: "60px 0" }}>
        <Container>
          <Row>
            <Col md={7}>
              <Row>
                {PARTNER_LOGOS.map((logo, idx) => (
                  <Col xs={6} md={4} className="mb-4 d-flex justify-content-center" key={idx}>
                    <Card className="border-0 shadow-sm d-flex align-items-center justify-content-center"
                          style={{ minHeight: 110, minWidth: 110, background: "#fff", padding: 18 }}>
                      <img
                        src={logo}
                        alt="Partner Logo"
                        style={{ maxWidth: 90, maxHeight: 65, objectFit: "contain" }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={5} className="d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-3" style={{ color: "#3498db", fontSize: "2.1rem" }}>
                Best Staffing Services In Concord
              </h2>
              <p style={{ fontSize: 17, color: "#555" }}>
                Pathway Humanity takes great pleasure in being able to help businesses of all sizes and in all fields with their staffing needs. Our professional staff has extensive experience in filling temporary, temp-to-hire, and permanent positions for a wide variety of businesses. Our dedication to each of our clients and the highest standards in the industry have made us the top choice for staffing services in Concord.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* LET'S CONNECT */}
      <div style={{ background: "#19344a", padding: "60px 0" }}>
        <Container>
          <Row>
            <Col md={7}>
              <h3 className="fw-bold text-white mb-3">
                Let's Connect: Contact Us For Tailored HR Solutions And Exciting Career Opportunities
              </h3>
              <p className="text-white-50 mb-4" style={{ fontSize: 16 }}>
                Whether you are an employer seeking exceptional candidates or a job seeker looking for your ideal position, we are here to assist you. Get in touch with us right away to learn how we can collaborate with you to achieve your HR objectives.
              </p>
              <Button color="info" className="rounded-3 px-4 py-2 fw-bold">
                DISCOVER MORE
              </Button>
            </Col>
            <Col md={5}>
              <Row className="mt-3">
                <Col xs={6} className="text-center mb-3">
                  <div className="fw-bold text-success" style={{ fontSize: 28 }}>107K+</div>
                  <div className="text-white-50">Member Active</div>
                </Col>
                <Col xs={6} className="text-center mb-3">
                  <div className="fw-bold text-success" style={{ fontSize: 28 }}>2K+</div>
                  <div className="text-white-50">Companies</div>
                </Col>
                <Col xs={6} className="text-center mb-3">
                  <div className="fw-bold text-success" style={{ fontSize: 28 }}>53+</div>
                  <div className="text-white-50">Expert Trainers</div>
                </Col>
                <Col xs={6} className="text-center mb-3">
                  <div className="fw-bold text-success" style={{ fontSize: 28 }}>2+</div>
                  <div className="text-white-50">Years of Experience</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CAREER CALL OUT */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={8} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Unlock Your Career Potential: Explore Our Exciting Job Listings Today!
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              If you are interested in a career shift, we urge you to read our extensive job listings to
              discover new and exciting possibilities that may be a perfect match for your talents and expertise.
            </p>
            <Button color="success" className="fw-bold px-4 rounded-3">
              APPLY NOW
            </Button>
          </Col>
          <Col md={4} className="text-center p-0">
            <img
              src="/job-seeker.png"
              alt="Job Seeker"
              style={{
                maxHeight: 200,
                width: "auto",
                objectFit: "contain"
              }}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
