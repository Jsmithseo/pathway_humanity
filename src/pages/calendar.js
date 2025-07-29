// pages/calendar.js

import React from "react";
import { Container, Row, Col, Card, CardBody, Button, Badge } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

// Example event data (expand this array as needed)
const EVENTS = [
  {
    title: "Opioid Awareness Walk",
    date: "August 12, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Lake Merritt, Oakland",
    description:
      "Join us for a community walk to raise awareness about opioid addiction, reduce stigma, and support recovery. Free shirts for all participants.",
    cta: "Register",
    link: "/events/opioid-walk"
  },
  {
    title: "Family Recovery Workshop",
    date: "September 2, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, Concord",
    description:
      "An interactive workshop for families supporting loved ones struggling with addiction. Learn strategies, share experiences, and build resilience.",
    cta: "Sign Up",
    link: "/events/family-workshop"
  }
];

export default function CalendarPage() {
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
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Events & Interactive Calendar
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 760, margin: "0 auto", fontWeight: "bold"  }}>
            Stay connected—explore our latest events, workshops, and community gatherings.
          </p>
        </Container>
      </div>

      {/* EVENTS CARDS SECTION */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          {EVENTS.map((event, idx) => (
            <Col md={6} lg={5} key={idx}>
              <Card className="shadow-sm border-0 rounded-4 h-100">
                <CardBody>
                  <Badge color="info" pill className="mb-2" style={{ fontSize: 15 }}>
                    {event.date}
                  </Badge>
                  <h4 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>{event.title}</h4>
                  <div className="mb-1" style={{ fontSize: 15, color: "#888" }}>
                    <span role="img" aria-label="time">🕒</span> {event.time} &nbsp; | &nbsp;
                    <span role="img" aria-label="location">📍</span> {event.location}
                  </div>
                  <p className="mb-3" style={{ fontSize: 16 }}>{event.description}</p>
                  <Button
                    color="primary"
                    className="fw-bold px-4 rounded-3"
                    href={event.link}
                  >
                    {event.cta}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>



      <Footer />
    </>
  );
}
