// src/pages/Programs.jsx

import React from "react";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";

const programs = [
  {
    title: "Youth Training Programs",
    focus: "Confidence, Focus, Discipline",
    description:
      "Our youth training programs are designed to instill confidence and mental toughness in young athletes through engaging activities, guided practice, and proven mindset techniques.",
    action: "Start Training"
  },
  {
    title: "1-on-1 Coaching",
    focus: "Customized Mental Performance Coaching",
    description:
      "Work one-on-one with our certified coaches to build a personalized mental training regimen that enhances resilience, concentration, and emotional control under pressure.",
    action: "Book a Session"
  },
  {
    title: "Team Workshops",
    focus: "Group Mindset Training & Team Cohesion",
    description:
      "Our interactive team workshops help foster trust, improve communication, and build mental strategies that athletes can apply in real-time competition.",
    action: "Schedule a Workshop"
  },
  {
    title: "Speaking Engagements",
    focus: "Motivational & Educational Talks",
    description:
      "Bring us to your school, team, or event to inspire athletes and coaches with real-world stories and mental techniques for peak performance and mindset development.",
    action: "Request a Speaker"
  }
];

const Programs = () => {
  return (
    <>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Programs</h2>
            <p className="text-muted">
              Mental toughness is the secret weapon of elite performers—and it can be trained. At ABC Mental Toughness, we help athletes unlock their full potential with practical, proven mindset training. Whether you're a youth athlete, part of a team, or seeking individual development, our programs give you the tools to thrive under pressure and perform with confidence.
            </p>
          </div>
          <Row>
            {programs.map((program, index) => (
              <Col md="6" lg="3" className="mb-4" key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <CardBody className="d-flex flex-column justify-content-between">
                    <div>
                      <CardTitle tag="h5" className="fw-bold">{program.title}</CardTitle>
                      <h6 className="text-primary mb-2">{program.focus}</h6>
                      <CardText className="text-muted">{program.description}</CardText>
                    </div>
                    <Link href="/contact" passHref legacyBehavior>
                      <Button color="primary" className="mt-3 fw-bold w-100">
                        {program.action}
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <Footer />
    </>
  );
};

export default Programs;
