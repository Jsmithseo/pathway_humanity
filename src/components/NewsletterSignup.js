// src/components/NewsletterSignup.jsx

import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    const payload = new URLSearchParams();
    payload.append("email", formData.email);
    payload.append("first_name", formData.firstName);
    payload.append("last_name", formData.lastName);

    try {
      const response = await fetch("https://api.constantcontact.com/client/api_endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer YOUR_CONSTANT_CONTACT_ACCESS_TOKEN`,
        },
        body: payload.toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Submission failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f9f9f7' }}>
      <Container>
        <Row className="justify-content-center text-center mb-4">
          <Col lg="8">
            <h2 className="fw-bold">Stay Mentally Strong with ABC</h2>
            <p className="lead text-muted">
              Join our mental toughness community and get tips, exercises, and updates to sharpen your edge.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {submitted ? (
              <Alert color="success">Thanks for subscribing! Check your inbox for a welcome message.</Alert>
            ) : (
              <Form onSubmit={handleSubmit} className="bg-white text-dark rounded p-4 shadow">
                {error && <Alert color="danger">{error}</Alert>}
                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="firstName">First Name</Label>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="lastName">Last Name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <div className="text-center">
                  <Button color="primary" size="lg" className="fw-bold px-5">
                    Subscribe
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterSignup;