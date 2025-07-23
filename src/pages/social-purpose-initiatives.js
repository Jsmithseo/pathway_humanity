// pages/applicants.js

import React from "react";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, Badge, Input } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// Mock data (replace with real data or fetch from your backend)
const positions = [
  {
    type: "Open Positions",
    location: "Oakland, California",
    title: "Substance Abuse Disorder Treatment Therapist",
    badge: "Open Positions",
    jobType: "Full Time",
    heading: "Licensed Substance Disorder Treatment Therapist",
    description:
      "Pathway Humanity is seeking a compassionate and dedicated Substance Abuse Treatment Therapist to join our team in providing high-quality care to individuals struggling with substance abuse and addiction. The successful candidate will provide individual, group, and family therapy, conduct assessments, develop treatment plans, and collaborate with a multidisciplinary team to support clients in their recovery journey.",
  },
  {
    type: "Full Time",
    location: "Oakland, California",
    title: "Case Manager",
    badge: "Full Time",
    jobType: "Full Time",
    heading: "Case Manager",
    description:
      "Pathway Humanity’s Therapeutic Housing Program is actively seeking a compassionate and dedicated Case Manager to join our team in providing essential housing and mental health services to homeless and low-income individuals struggling with substance abuse and mental health disorders.",
  },
];

export default function Applicants() {
  return (
    <>
      <MainNavBar />

      {/* Hero Section */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.30),rgba(42,48,56,.25)), url('images/hero_image4.jpg') center/cover no-repeat`,
          minHeight: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.5rem", textAlign: "center" }}>
            Applicants
          </h1>
          <p className="text-white fs-5 mb-0 text-center">
            Discover your dream job with ease - browse our vast range of career opportunities
            and discover how we can assist you in taking the next step in your professional journey.
          </p>
        </Container>
      </div>

      {/* Job Cards */}
      <Container className="my-5">
        <Row className="gy-4">
          {positions.map((pos, idx) => (
            <Col md={6} key={idx}>
              <Card className="shadow-sm border-0 rounded-4 h-100">
                <CardBody>
                  <div className="d-flex align-items-center mb-2">
                    <Badge color="success" pill className="me-2" style={{ fontWeight: 500, fontSize: 14, background: "#e8f7ea", color: "#4cb050" }}>
                      {pos.badge}
                    </Badge>
                    <span className="text-muted" style={{ fontSize: 13 }}>{pos.location}</span>
                  </div>
                  <CardTitle tag="h5" className="fw-bold mb-2" style={{ color: "#228d6e" }}>
                    {pos.title}
                  </CardTitle>
                  <CardText>
                    <strong style={{ color: "#34977b", fontSize: 17 }}>{pos.heading}</strong>
                    <br />
                    <span style={{ fontSize: 15 }}>{pos.description}</span>
                  </CardText>
                  <Button color="info" className="px-4 rounded-3 fw-bold">
                    MORE DETAIL
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Career Callout */}
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
              src="/hero_image1.jpg" // Put your own job seeker image in /public
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

      <Footer/>
    </>
  );
}
