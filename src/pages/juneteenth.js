
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button, Badge, Modal, ModalBody } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function JuneteenthEventPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  const openImageModal = (src, alt) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
    setModalOpen(true);
  };

  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.50),rgba(30,60,80,.50)), url('/Juneteenth Celebration.png') center/cover no-repeat`,
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-3" style={{ fontSize: "2.6rem", textAlign: "center" }}>
            Juneteenth Celebration
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 850, margin: "0 auto", fontWeight: "bold" }}>
            Pathway Humanity is proud to be a featured vendor at Todos Santos Square in Downtown Concord.
          </p>
        </Container>
      </div>

      {/* EVENT DETAILS SECTION */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm border-0 rounded-4">
              <CardBody className="p-4 p-md-5">
                <Badge color="info" pill className="mb-3" style={{ fontSize: 15 }}>
                  June 27th • 11:30 AM - 5:30 PM
                </Badge>

                <h2 className="fw-bold mb-3" style={{ color: "#1c7acb" }}>
                  Pathway Humanity Featured Vendor
                </h2>

                <p style={{ fontSize: 17, color: "#000" }}>
                  We are a featured vendor for Juneteenth at Todos Santos Square in Downtown Concord,
                  located at 2175 Willow Pass Road, Concord, CA 94520, on June 27th from 11:30 AM - 5:30 PM.
                </p>

                <p style={{ fontSize: 17, color: "#000" }}>
                  Our team will be there to fight against substance use disorder addiction, share resources,
                  and recruit for our at-risk youth mentorship program.
                </p>

                <div className="mb-4" style={{ fontSize: 16, color: "#000" }}>
                  <p className="mb-2">
                    <strong>Location:</strong> Todos Santos Square, 2175 Willow Pass Road, Concord, CA 94520
                  </p>
                  <p className="mb-2">
                    <strong>Date:</strong> June 27th
                  </p>
                  <p className="mb-0">
                    <strong>Time:</strong> 11:30 AM - 5:30 PM
                  </p>
                </div>

                <Button
                  color="primary"
                  className="fw-bold px-4 rounded-3"
                  href="mailto:mentorship@pathwayhumanity.com"
                >
                  Contact Us
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FEATURED IMAGE SECTION */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <h3 className="fw-bold text-center mb-4" style={{ color: "#1c7acb" }}>
              Event Flyer
            </h3>

            <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src="/Juneteenth.png"
                alt="Juneteenth Celebration Pathway Humanity Flyer"
                onClick={() => openImageModal("/Juneteenth.png", "Juneteenth Celebration Pathway Humanity Flyer")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ADDITIONAL PROGRAM IMAGES */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={6} lg={4}>
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100">
              <img
                src="/Menter.png"
                alt="Pathway Humanity Mentor Recruiting Flyer"
                onClick={() => openImageModal("/Menter.png", "Pathway Humanity Mentor Recruiting Flyer")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100">
              <img
                src="/Mentee.png"
                alt="Pathway Humanity Mentee Recruiting Flyer"
                onClick={() => openImageModal("/Mentee.png", "Pathway Humanity Mentee Recruiting Flyer")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100">
              <img
                src="/Juneteenth_Flyer.png"
                alt="Pathway Humanity Juneteenth Featured Vendor Flyer"
                onClick={() => openImageModal("/Juneteenth_Flyer.png", "Pathway Humanity Juneteenth Featured Vendor Flyer")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        isOpen={modalOpen}
        toggle={() => setModalOpen(false)}
        centered
        size="xl"
        contentClassName="border-0 bg-transparent"
      >
        <ModalBody className="p-0 position-relative">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: 22,
              lineHeight: "40px",
              cursor: "pointer",
            }}
            aria-label="Close image modal"
          >
            ×
          </button>

          {selectedImage && (
            <img
              src={selectedImage}
              alt={selectedAlt}
              style={{
                width: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block",
                backgroundColor: "#fff",
                borderRadius: 12,
              }}
            />
          )}
        </ModalBody>
      </Modal>

      <Footer />
    </>
  );
}

