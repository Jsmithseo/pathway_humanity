// pages/applicants.js

import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// Features to support the copy
const FEATURES = [
  {
    title: "Simplifies Job Search",
    desc: "A comprehensive and intuitive way to explore career opportunities with just a few clicks."
  },
  {
    title: "Skill-Matching",
    desc: "Align your skills and passions with roles that foster personal and professional growth."
  },
  {
    title: "Diverse Opportunities",
    desc: "Our continuously updated database caters to professionals, recent graduates, and career changers."
  },
  {
    title: "Informed Decisions",
    desc: "Access detailed job descriptions, company profiles, and industry insights to make smart choices."
  },
  {
    title: "Trusted Partner",
    desc: "We’re your guide and ally, supporting you in seizing your dream job and advancing your career."
  }
];

export default function Applicants() {
  const router = useRouter();

  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.40),rgba(42,48,56,.40)), url('/images/hero_image6.jpg') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1
            className="text-white fw-bold mb-2"
            style={{ fontSize: "2.3rem", textAlign: "center" }}
          >
            Applicants
          </h1>
          <p
            className="text-white fs-5 mb-0 text-center"
            style={{
              maxWidth: 720,
              margin: "0 auto",
              fontWeight: "bold",
            }}
          >
            Explore a wide range of career opportunities and find your ideal
            professional path with ease.
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
                  Find Your Future with Pathway Humanity
                </h3>
                <p style={{ fontSize: 17 }}>
                  Our platform simplifies job discovery, aligning your skills and
                  aspirations with roles that foster growth. Whether you’re a
                  seasoned professional or a recent graduate, our extensive
                  database is continuously updated with fresh opportunities.
                </p>
                <p style={{ fontSize: 17 }}>
                  Beyond browsing, we offer detailed job descriptions, company
                  profiles, and industry insights. Let us be your trusted
                  partner, providing the guidance and support to confidently
                  take the next step in your career. Your dream job awaits, and
                  we’re here to help you seize it.
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
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#1c7acb" }}
                  >
                    {feature.title}
                  </h5>
                  <p style={{ fontSize: 16 }}>{feature.desc}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CALL TO ACTION / CTA */}
      <Container className="my-5">
        <Row
          className="align-items-center g-0"
          style={{
            background: "#f7fafd",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <Col md={12} className="p-4">
            <h4 className="fw-bold mb-2" style={{ color: "#2e9701" }}>
              Ready to start your journey?
            </h4>
            <p className="mb-3" style={{ fontSize: 16 }}>
              Browse our live job listings or reach out to our team for
              personalized career guidance. Your dream job is just a click away!
            </p>
            <Button
              color="success"
              className="fw-bold px-4 rounded-3"
              onClick={() => router.push("/jobs")}
            >
              EXPLORE JOBS
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
