import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input, Label, Alert, Spinner } from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const HUBSPOT_PORTAL_ID = "YOUR_PORTAL_ID"; // <-- Replace!
const HUBSPOT_FORM_ID = "YOUR_FORM_ID";     // <-- Replace!

export default function Contact() {
  const [fields, setFields] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    company: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    // HubSpot API endpoint
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    // Format fields for HubSpot
    const data = {
      fields: Object.entries(fields).map(([name, value]) => ({ name, value }))
    };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitted(true);
        setFields({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
          company: ""
        });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <div
        style={{
          background: `linear-gradient(rgba(42,48,56,.35),rgba(42,48,56,.22)), url('/images/contact-hero.jpg') center/cover no-repeat`,
          minHeight: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1 className="text-white fw-bold mb-2" style={{ fontSize: "2.3rem", textAlign: "center" }}>
            Contact Us
          </h1>
          <p className="text-white fs-5 mb-0 text-center" style={{ maxWidth: 700, margin: "0 auto" }}>
            Let’s start a conversation about your needs. Reach out and a member of our team will respond promptly.
          </p>
        </Container>
      </div>

      {/* MAIN CONTENT CARD with Custom Form */}
      <Container className="my-5">
        <Row className="gy-4 justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 rounded-4 h-100">
              <CardBody>
                <h3 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                  Get in Touch
                </h3>
                <p style={{ fontSize: 17 }}>
                  Have a question, want to book a consultation, or just need more info? Fill out the form below and we’ll get right back to you.
                </p>
                {submitted ? (
                  <Alert color="success">
                    Thank you! Your message has been received. We'll be in touch soon.
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="firstname">First Name</Label>
                          <Input
                            type="text"
                            name="firstname"
                            id="firstname"
                            required
                            value={fields.firstname}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="lastname">Last Name</Label>
                          <Input
                            type="text"
                            name="lastname"
                            id="lastname"
                            required
                            value={fields.lastname}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="email">Email</Label>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={fields.email}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="phone">Phone</Label>
                          <Input
                            type="text"
                            name="phone"
                            id="phone"
                            value={fields.phone}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <Label for="company">Company</Label>
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        value={fields.company}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="subject">Subject</Label>
                      <Input
                        type="text"
                        name="subject"
                        id="subject"
                        value={fields.subject}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input
                        type="textarea"
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={fields.message}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    {error && <Alert color="danger">{error}</Alert>}
                    <Button
                      color="primary"
                      type="submit"
                      className="px-4 py-2"
                      disabled={submitting}
                    >
                      {submitting ? <Spinner size="sm" /> : "Send Message"}
                    </Button>
                  </Form>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
