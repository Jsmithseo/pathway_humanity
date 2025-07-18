// pages/social-purpose.js

import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import {
  FaHandsHelping,
  FaUserMd,
  FaUtensils,
  FaRegClipboard,
  FaCouch,
  FaUserLock,
  FaSoap,
} from "react-icons/fa";

const SERVICES = [
  {
    title: "Supportive Services",
    desc: "Housing and supportive services to homeless individuals and veterans in community-based Contracted Emergency Residential Services (CERS) facilities.",
    icon: <FaHandsHelping size={36} color="#32b147" />,
  },
  {
    title: "Low-Barrier Therapeutic",
    desc: "Low-barrier therapeutic and rehabilitative milieu and attendant services that target the underlying factors contributing to homelessness.",
    icon: <FaUserMd size={36} color="#14C9D6" />,
  },
  {
    title: "Meal",
    desc: "Three meals a day with abundant supply of food for in-between snacks and drinks at the recipient's disposal.",
    icon: <FaUtensils size={36} color="#65B32E" />,
  },
  {
    title: "Case Management",
    desc: "Provide Case Management and Therapeutic support services.",
    icon: <FaRegClipboard size={36} color="#1C7ACB" />,
  },
  {
    title: "Furniture",
    desc: "Supply fully furnished housing: bed with linen (blanket and sheets), pillows, and toiletries (towels and soap).",
    icon: <FaCouch size={36} color="#8cc63f" />,
  },
  {
    title: "Personal Space",
    desc: "Personal space with a secured storage locker for safekeeping personal belongings.",
    icon: <FaUserLock size={36} color="#21324A" />,
  },
  {
    title: "Laundry",
    desc: "Onsite laundry facility with detergent for use free of charge.",
    icon: <FaSoap size={36} color="#14C9D6" />,
  },
];

const SocialPurpose = () => (
  <>
    <MainNavBar />
    <section>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "280px",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Row>
            <Col md={8}>
              <div className="bg-dark bg-opacity-50 rounded p-4 shadow-lg">
                <h1 className="fw-bold mb-2" style={{ fontSize: "2.4rem" }}>
                  Social Purpose Initiatives
                </h1>
                <p className="lead mb-0">
                  Empowering the homeless, disabled, and veterans through access to housing, mental health support, and skills training—building pathways to hope and independence.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Program Details */}
      <Container className="mt-5">
        <Row>
          <Col md={6} className="mb-4">
            <Card className="shadow border-0">
              <CardBody>
                <CardTitle tag="h4" className="fw-bold text-success">
                  Social Purpose Housing Program
                </CardTitle>
                <p>
                  We partner with community advocates and employment opportunity leaders to help homeless individuals and veterans receive transitional housing, job skills training, and access to mental health services. Our initiatives address poverty, addiction, violence, and re-entry barriers through both institutional reform and individualized support.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="shadow border-0">
              <CardBody>
                <CardTitle tag="h4" className="fw-bold text-primary">
                  24-Hour Drop-In Centers
                </CardTitle>
                <p>
                  Our skilled, compassionate team operates around-the-clock centers that provide a safe space, basic necessities, and encouragement to those transitioning out of homelessness. Peer engagement and strong leadership help foster hope and positive social behaviors.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Services Provided */}
      <Container className="mt-5">
        <h3 className="fw-bold text-success mb-4 text-center">
          Services Provided
        </h3>
        <Row>
          {SERVICES.map((service, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <CardBody className="text-center">
                  <div className="mb-3">{service.icon}</div>
                  <h5 className="fw-bold mb-2">{service.title}</h5>
                  <p className="mb-0" style={{ fontSize: "0.97rem" }}>
                    {service.desc}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    <Footer />
  </>
);

export default SocialPurpose;
