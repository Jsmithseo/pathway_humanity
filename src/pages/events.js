
import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';

const events = [
  {
    title: "Confidence & Coping Skills Workshop",
    date: "June 7, 2025",
    time: "11:00 AM PT",
    description:
      "Join Coach Dennis live on Zoom to explore strategies for building your child's confidence and resilience through practical mental skills training.",
    link: "https://us05web.zoom.us/j/89957106904?pwd=bkHy22EqVmYr1F2J5Z0lMMYebWA2Ho.1",
    rsvp: "https://abcmentaltoughness.com/quiz",
    calendar: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Confidence+%26+Coping+Skills+Workshop&dates=20250607T180000Z/20250607T190000Z&details=Join+us+on+Zoom+for+a+live+event+focused+on+confidence+and+coping+skills+with+ABC+Mental+Toughness&location=https://us05web.zoom.us/j/89957106904?pwd=bkHy22EqVmYr1F2J5Z0lMMYebWA2Ho.1"
  }
];

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>Events | ABC Mental Toughness</title>
        <meta name="description" content="Join upcoming events and workshops hosted by ABC Mental Toughness." />
      </Head>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Upcoming Events</h2>
            <p className="text-muted">
              Stay updated with our latest workshops and live events designed to help young athletes develop mental strength, confidence, and resilience.
            </p>
          </div>
          <Row>
            {events.map((event, index) => (
              <Col md="6" lg="4" className="mb-4" key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <CardBody className="d-flex flex-column justify-content-between">
                    <div>
                      <CardTitle tag="h5" className="fw-bold">{event.title}</CardTitle>
                      <h6 className="text-primary mb-2">{event.date} @ {event.time}</h6>
                      <CardText className="text-muted">{event.description}</CardText>
                    </div>
                    <div className="mt-3">
                      <a href={event.link} target="_blank" rel="noopener noreferrer">
                        <Button color="primary" className="me-2 mb-2">Join Event</Button>
                      </a>
                      <a href={event.rsvp} target="_blank" rel="noopener noreferrer">
                        <Button color="secondary" className="me-2 mb-2">Take the Quiz</Button>
                      </a>
                      <a href={event.calendar} target="_blank" rel="noopener noreferrer">
                        <Button color="success" className="mb-2">Add to Google Calendar</Button>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
      <Footer />
    </>
  );
};

export default EventsPage;
