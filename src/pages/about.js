// pages/about.js

import React from "react";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.30),rgba(42,48,56,.18)), url('/images/hero_image3.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            About Us
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 760, margin: "0 auto" }}>
            Pathway Humanity stands as a truly unique and transformative organization, dedicated to uplifting individuals from anguish to empowered self-sufficiency.
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
                  A Beacon of Hope, A Catalyst for Change
                </h3>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity specializes in comprehensive support for a diverse range of underserved populations, including those battling addictive behaviors, experiencing homelessness, struggling with poverty, belonging to underrepresented groups, and disabled veterans and civilians.
                </p>
                <p style={{ fontSize: 17 }}>
                  Our mission is deeply rooted in the belief that every individual, regardless of their past circumstances, deserves the opportunity for a brighter future. We understand that the journey from rock bottom to self-sufficiency is complex and multifaceted, which is why Pathway Humanity operates as a holistic "one-stop shop." This integrated approach ensures that our clients receive continuous, tailored support throughout their entire rehabilitation and empowerment process.
                </p>
                <p style={{ fontSize: 17 }}>
                  From the moment an individual connects with us, they embark on a journey of growth and transformation. We provide a safe and nurturing environment where clients can address the root causes of their challenges, develop essential life skills, and gain the confidence needed to reintegrate successfully into society. Our comprehensive services encompass a wide array of support, including but not limited to, addiction recovery programs, housing assistance, job training and placement, financial literacy education, mental health counseling, and access to vital community resources.
                </p>
                <p style={{ fontSize: 17 }}>
                  Pathway Humanity is more than just an organization; we are a beacon of hope and a catalyst for profound personal change. We are committed to fostering an environment where individuals can not only overcome their immediate struggles but also build sustainable foundations for long-term well-being and independence. Through our unwavering dedication and the integrated support we offer, we empower our clients to break cycles of adversity and embrace a future filled with dignity, purpose, and self-reliance.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CLOSING CALL TO ACTION */}
      <Container className="my-5">
        <Row className="align-items-center g-0" style={{ background: "#f7fafd", borderRadius: 16, overflow: "hidden" }}>
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Join Us on the Journey
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Whether you need support or want to help others transform their lives, Pathway Humanity is here for you. Reach out to learn more or get involved.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button color="success" className="fw-bold px-4 rounded-3">
                CONTACT US
              </Button>
            </Link>
          </Col>
          {/* <Col md={4} className="text-center p-0">
            <img
              src="/about.jpg"
              alt="About Pathway Humanity"
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
