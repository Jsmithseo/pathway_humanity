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
          background: `linear-gradient(rgba(42,48,56,.80),rgba(30,60,80,.80)), url('/about.jpg') center/cover no-repeat`,
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
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 760, margin: "0 auto" }}>
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

      {/* CALENDAR CONTENT */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100 p-3 p-md-4">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#1c7acb" }}>
                  Upcoming Events & Registration
                </h3>
                <p style={{ fontSize: 17 }}>
                  Our calendar is continuously updated with educational seminars, workshops, outreach programs, and volunteer opportunities. Click on any event for more details and to RSVP.
                </p>
                {/* ---- Embed your calendar below ---- */}
                <div style={{
                  margin: "36px 0",
                  borderRadius: 16,
                  overflow: "hidden",
                  minHeight: 520,
                  background: "#f3f8fc",
                  boxShadow: "0 2px 12px rgba(30,120,180,.08)"
                }}>
                  {/* === Calendly Example Embed === */}
                  <iframe
                    src="https://calendly.com/your-calendly-username" // Replace with your actual link
                    width="100%"
                    height="550"
                    frameBorder="0"
                    style={{ minHeight: 520 }}
                    title="Calendar Embed"
                  ></iframe>
                </div>
                <p style={{ fontSize: 16 }}>
                  Can’t find an event that fits your schedule? <a href="/contact" style={{ color: "#1c7acb", textDecoration: "underline" }}>Contact us</a> for private workshops or one-on-one sessions.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
