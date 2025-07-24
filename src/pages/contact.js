// pages/contact.js

import React from "react";
import { Container, Row, Col, Button, Form, FormGroup, Input, Label, Card, CardBody } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// HERO IMAGE URL (change as needed)
const HERO_IMAGE = "contact-image.jpg"; // Add your own image in /public

export default function Contact() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.3),rgba(42,48,56,.4)), url('/contact-image.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container>
          <Row>
            <Col md={8} lg={6} className="bg-dark bg-opacity-50 p-4 shadow-lg">
              <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.5rem" }}>
                Contact Us
              </h1>
              <p className="text-white fs-5 mb-0">
                Contact us easily and have access to a world of customized HR solutions,
                individualized assistance, and industry expertise.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      {/* FORM SECTION */}
      <Container style={{ marginTop: "-80px", marginBottom: "60px" }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-lg rounded-4 border-0" style={{ padding: "36px 18px" }}>
              <CardBody>
                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Input type="select" defaultValue="">
                          <option value="">Please Select</option>
                          <option>General Inquiry</option>
                          <option>Client Support</option>
                          <option>Job Application</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Position Title" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Input type="select" defaultValue="">
                          <option value="">Position Type</option>
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Contract</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Location" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="mb-3">
                    <Input type="textarea" rows={2} placeholder="Note" />
                  </FormGroup>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="First Name" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Company" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Phone" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input placeholder="Subject" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className="mb-3">
                    <Input type="textarea" rows={2} placeholder="Message" />
                  </FormGroup>
                  <FormGroup className="mb-4">
                    {/* reCAPTCHA placeholder (replace with react-google-recaptcha if integrating) */}
                    <div style={{ background: "#fafbfc", padding: "10px 16px", borderRadius: 8, display: "flex", alignItems: "center", width: 220 }}>
                      <input type="checkbox" style={{ width: 20, height: 20, marginRight: 12 }} />
                      <span style={{ color: "#555", fontSize: 16 }}>I'm not a robot</span>
                    </div>
                  </FormGroup>
                  <Button color="info" className="px-4 py-2 rounded-3" style={{ fontWeight: 600 }}>
                    SEND MESSAGE
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FEATURE / HERO MISSION SECTION */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h6 className="text-success fw-bold mb-2" style={{ letterSpacing: 1 }}>OUR TEAM</h6>
            <h2 className="fw-bold mb-3" style={{ color: "#32b147", fontSize: "2.2rem", lineHeight: 1.2 }}>
              Partner with Us to Access Top Talent and Achieve Your Business Goals
            </h2>
            <p style={{ fontSize: 18, color: "#3569b2" }}>
              Discover the value of strategic HR alliances and have access to the elite
              talent that drives the success of your firm. Trust our knowledge to
              confidently accomplish your business objectives.
            </p>
            <Button color="info" className="rounded-3 px-4 py-2 fw-bold">
              DISCOVER MORE
            </Button>
          </Col>
          <Col md={6} className="text-center">
            {/* Curved image effect (clip-path) */}
            <div style={{
              width: "92%",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "40px 120px 60px 120px / 60px 120px 60px 120px"
            }}>
              <img
                src="/team-partner.jpg" // Add your image to /public
                alt="Partner Team"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
