// pages/opioid-awareness.js

import React from "react";
import { Container, Row, Col, Card, CardBody, Button, Input, Form, FormGroup } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function OpioidAwareness() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(30,60,80,.40)), url('/about.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.2rem", textAlign: "center", letterSpacing: ".5px" }}>
            The Opioid Crisis: Raising Awareness
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 680, margin: "0 auto", fontWeight: "bold" }}>
            Shedding light on addiction, fostering hope, and building a community of redemption.
          </p>
        </Container>
      </div>

      {/* MAIN CONTENT CARD */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#d11d47" }}>
                  Standing Together Against Opioid Addiction
                </h3>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity is at the forefront of opioid addiction awareness and redemption. We host, co-host, and sponsor multiple events that bring awareness to the stranglehold of opioid addiction. Our calendar is updated regularly to keep you informed of events and happenings.
                </p>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity stands as a radiant hope and a powerful force in the ongoing battle against opioid addiction. Our core mission is deeply rooted in fostering widespread awareness, offering avenues for redemption, and ultimately, contributing to the healing of individuals and communities ravaged by this crisis.
                </p>
                <hr />
                <h5 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>Our Ongoing Commitment:</h5>
                <ul style={{ fontSize: 16, marginBottom: 20 }}>
                  <li>
                    <b>Dynamic Event Calendar:</b> Stay up-to-date with our regularly updated schedule of awareness events, educational seminars, workshops, and outreach programs.
                  </li>
                  <li>
                    <b>Community Engagement:</b> Participate in collaborative fundraising, volunteer opportunities, and action-oriented events designed to break the stigma and provide help.
                  </li>
                  <li>
                    <b>Education & Empowerment:</b> Our seminars and programs foster understanding and offer resources for prevention, recovery, and support.
                  </li>
                </ul>
                <p style={{ fontSize: 17 }}>
                  We invite you to regularly visit our website and subscribe to our newsletter to stay abreast of opportunities to participate, learn, and contribute to this critical fight. By working together, we can empower individuals, dismantle the stigma surrounding addiction, and pave the way for a future where hope triumphs over profound hopelessness.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* EVENTS & NEWSLETTER SIGNUP */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={7} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#d11d47" }}>
              Upcoming Events & Community Action
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Don’t miss our next awareness walk, seminar, or support group!  
              <br />
              <span style={{ color: "#1c7acb" }}>See our <a href="/events" style={{ color: "#1c7acb", textDecoration: "underline" }}>full event calendar</a> for details.</span>
            </p>
            <ul style={{ fontSize: 15, color: "#3498db", marginBottom: 18 }}>
              <li>Educational Workshops</li>
              <li>Community Outreach Days</li>
              <li>Family Support Groups</li>
              <li>Fundraising & Volunteer Opportunities</li>
            </ul>
            <Form className="d-flex flex-column flex-sm-row gap-2 mt-3">
              <FormGroup className="mb-0" style={{ flex: 1 }}>
                <Input
                  type="email"
                  name="email"
                  id="newsletterEmail"
                  placeholder="Your email address"
                  style={{ height: 44, borderRadius: 8 }}
                />
              </FormGroup>
              <Button color="danger" className="px-4 fw-bold" style={{ borderRadius: 8, minHeight: 44 }}>
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col md={5} className="text-center p-0">
            <img
              src="/about.jpg"
              alt="Opioid Crisis Awareness"
              style={{
                maxHeight: 220,
                width: "auto",
                objectFit: "contain"
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* CALL TO ACTION */}
      <Container className="my-5">
        <Row>
          <Col md={10} className="mx-auto text-center">
            <Card className="shadow-sm border-0 rounded-4 p-4" style={{ background: "#fff5f8" }}>
              <h3 className="fw-bold mb-3" style={{ color: "#d11d47" }}>
                Together, We Can Make a Difference
              </h3>
              <p style={{ fontSize: 17 }}>
                Join Pathway Humanity and our partners as we continue to fight the opioid crisis with hope, action, and unwavering community support.
              </p>
              <Button color="danger" className="fw-bold px-4 rounded-3">
                GET INVOLVED
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
