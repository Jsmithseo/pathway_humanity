import React, { useState } from "react";
import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";

import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  preferredContactMethod: "",
  currentSituation: "",
  challenges: [],
  currentSupport: "",
};

export default function MentorshipQuestionnaire() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const challengeOptions = [
    "Stress or anxiety",
    "Depression or low motivation",
    "Substance use concerns",
    "Unemployment or underemployment",
    "Lack of structure or direction",
    "Isolation or lack of support",
    "Difficulty staying consistent",
    "Transportation barriers",
    "Financial stress",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleChallengeChange = (event) => {
    const { value, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      challenges: checked
        ? [...previousData.challenges, value]
        : previousData.challenges.filter(
            (challenge) => challenge !== value
          ),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/mentorship-questionnaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("The questionnaire could not be submitted.");
      }

      setSubmitStatus({
        type: "success",
        message:
          "Thank you. Your questionnaire has been submitted successfully.",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Questionnaire submission error:", error);

      setSubmitStatus({
        type: "danger",
        message:
          "We were unable to submit your questionnaire. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Mentorship Questionnaire | Pathway Humanity</title>

        <meta
          name="description"
          content="Tell Pathway Humanity about your current situation and the type of mentorship or support you need."
        />
      </Head>

      <MainNavBar />

      <main
        style={{
          backgroundColor: "#f5f7f7",
          minHeight: "100vh",
          padding: "80px 0",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg="9" xl="8">
              <div className="text-center mb-5">
                <p
                  className="text-uppercase fw-bold mb-2"
                  style={{
                    color: "#178b8b",
                    letterSpacing: "1.5px",
                  }}
                >
                  Mentorship Questionnaire
                </p>

                <h1 className="fw-bold mb-3">
                  Tell Us About Your Current Situation
                </h1>

                <p
                  className="mx-auto mb-0"
                  style={{
                    color: "#5f6868",
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    maxWidth: "720px",
                  }}
                >
                  This form helps Pathway Humanity understand where you are,
                  what support you may need, and what kind of plan would be most
                  helpful for your next steps. Please answer as honestly as you
                  feel comfortable.
                </p>
              </div>

              <Card
                className="border-0"
                style={{
                  borderRadius: "18px",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
                }}
              >
                <CardBody className="p-4 p-md-5">
                  {submitStatus.message && (
                    <Alert color={submitStatus.type}>
                      {submitStatus.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="firstName">First Name</Label>

                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
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
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="email">Email Address</Label>

                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <Label for="phone">Phone Number</Label>

                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <Label for="city">City</Label>

                          <Input
                            id="city"
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>

                      <Col md="6">
                        <FormGroup>
                          <Label for="preferredContactMethod">
                            Preferred Contact Method
                          </Label>

                          <Input
                            id="preferredContactMethod"
                            name="preferredContactMethod"
                            type="select"
                            value={formData.preferredContactMethod}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select one</option>
                            <option value="Phone call">Phone call</option>
                            <option value="Text message">Text message</option>
                            <option value="Email">Email</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <hr className="my-4" />

                    <FormGroup>
                      <Label
                        for="currentSituation"
                        className="fw-bold"
                        style={{ fontSize: "1.05rem" }}
                      >
                        What best describes your current situation?
                      </Label>

                      <Input
                        id="currentSituation"
                        name="currentSituation"
                        type="select"
                        value={formData.currentSituation}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select one</option>

                        <option value="I am looking for mentorship and guidance">
                          I am looking for mentorship and guidance
                        </option>

                        <option value="I am in recovery or need substance use support">
                          I am in recovery or need substance use support
                        </option>

                        <option value="I need help with job readiness or employment">
                          I need help with job readiness or employment
                        </option>

                        <option value="I need help with housing or stable living">
                          I need help with housing or stable living
                        </option>

                        <option value="I am rebuilding after a major life transition">
                          I am rebuilding after a major life transition
                        </option>
                      </Input>
                    </FormGroup>

                    <FormGroup className="mt-4">
                      <Label
                        className="fw-bold"
                        style={{ fontSize: "1.05rem" }}
                      >
                        What are the biggest challenges you are facing right
                        now?
                      </Label>

                      <p className="text-muted small">
                        Select all that apply.
                      </p>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(260px, 1fr))",
                          gap: "12px",
                        }}
                      >
                        {challengeOptions.map((challenge, index) => (
                          <div
                            key={challenge}
                            style={{
                              border: "1px solid #dce3e3",
                              borderRadius: "10px",
                              padding: "12px 14px",
                            }}
                          >
                            <FormGroup check className="mb-0">
                              <Input
                                id={`challenge-${index}`}
                                type="checkbox"
                                value={challenge}
                                checked={formData.challenges.includes(
                                  challenge
                                )}
                                onChange={handleChallengeChange}
                              />

                              <Label
                                check
                                for={`challenge-${index}`}
                                style={{ cursor: "pointer" }}
                              >
                                {challenge}
                              </Label>
                            </FormGroup>
                          </div>
                        ))}
                      </div>
                    </FormGroup>

                    <FormGroup className="mt-4">
                      <Label
                        for="currentSupport"
                        className="fw-bold"
                        style={{ fontSize: "1.05rem" }}
                      >
                        Do you currently have support in place?
                      </Label>

                      <Input
                        id="currentSupport"
                        name="currentSupport"
                        type="select"
                        value={formData.currentSupport}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select one</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Some support, but I need more">
                          Some support, but I need more
                        </option>
                        <option value="I am not sure">
                          I am not sure
                        </option>
                      </Input>
                    </FormGroup>

                    <div
                      className="mt-5 p-4"
                      style={{
                        backgroundColor: "#eef7f7",
                        borderLeft: "4px solid #178b8b",
                        borderRadius: "10px",
                      }}
                    >
                      <h2
                        className="fw-bold mb-2"
                        style={{ fontSize: "1.3rem" }}
                      >
                        What happens next?
                      </h2>

                      <p className="mb-0" style={{ lineHeight: "1.7" }}>
                        Once you hit submit, our team will look over your
                        answers and put together a personalized game plan just
                        for you. We’ll include clear next steps and specific
                        areas we can work on together to help you reach your
                        goals!
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-100 mt-4 py-3 fw-bold border-0"
                      disabled={
                        isSubmitting || formData.challenges.length === 0
                      }
                      style={{
                        backgroundColor: "#178b8b",
                        borderRadius: "10px",
                        fontSize: "1.05rem",
                      }}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Questionnaire"}
                    </Button>

                    {formData.challenges.length === 0 && (
                      <p className="text-muted text-center small mt-2 mb-0">
                        Please select at least one current challenge.
                      </p>
                    )}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </>
  );
}