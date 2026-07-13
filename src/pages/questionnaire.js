import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";

export default function SupportQuestionnaire() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    ageRange: "",
    city: "",
    contactPreference: "",
    currentSituation: [],
    primaryChallenges: [],
    urgencyLevel: "",
    currentSupport: "",
    employmentStatus: "",
    housingStatus: "",
    recoveryInterest: "",
    mentorshipInterest: "",
    goals30: "",
    goals90: "",
    barriers: "",
    idealSupport: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Questionnaire submitted:", formData);
    alert("Thank you. Your information has been submitted and our team will use it to prepare a personalized support plan.");
  };

  return (
    <>
      <MainNavBar />

      <div
        style={{
          background:
            "linear-gradient(rgba(28,55,81,.55),rgba(19,45,66,.55)), url('images/hero_image8.jpg') center/cover no-repeat",
          minHeight: 560,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <h1
            className="text-white fw-bold mb-3 text-center"
            style={{ fontSize: "2.4rem" }}
          >
            Client Support Questionnaire
          </h1>
          <p
            className="text-white fs-5 mb-0 text-center"
            style={{ maxWidth: 820, margin: "0 auto", fontWeight: "bold" }}
          >
            Complete this questionnaire so our team can better understand your
            needs and create a personalized plan for support, stability, and
            forward progress.
          </p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-sm border-0 rounded-4">
              <CardBody className="p-4 p-md-5">
                <h3 className="fw-bold mb-3" style={{ color: "#1c7acb" }}>
                  Tell Us About Your Current Situation
                </h3>
                <p style={{ fontSize: 17, marginBottom: 28 }}>
                  This form helps Pathway Humanity understand where you are,
                  what support you may need, and what kind of plan would be most
                  helpful for your next steps. Please answer as honestly as you
                  feel comfortable.
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>First Name</Label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Last Name</Label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Email Address</Label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Phone Number</Label>
                        <Input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label>Age Range</Label>
                        <Input
                          type="select"
                          name="ageRange"
                          value={formData.ageRange}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Under 18</option>
                          <option>18–24</option>
                          <option>25–34</option>
                          <option>35–44</option>
                          <option>45–54</option>
                          <option>55+</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label>City</Label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label>Preferred Contact Method</Label>
                        <Input
                          type="select"
                          name="contactPreference"
                          value={formData.contactPreference}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Email</option>
                          <option>Phone Call</option>
                          <option>Text Message</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <h5 className="fw-bold mb-3" style={{ color: "#1c7acb" }}>
                    What best describes your current situation?
                  </h5>
                  <Row className="mb-3">
                    {[
                      "I am looking for mentorship and guidance",
                      "I am working through mental health challenges",
                      "I am in recovery or need substance use support",
                      "I need help with job readiness or employment",
                      "I need help with housing or stable living",
                      "I am rebuilding after a major life transition",
                      "I am supporting a loved one and need guidance",
                    ].map((item) => (
                      <Col md={6} key={item}>
                        <FormGroup check className="mb-2">
                          <Input
                            type="checkbox"
                            value={item}
                            onChange={(e) =>
                              handleCheckboxChange(e, "currentSituation")
                            }
                          />{" "}
                          <Label check>{item}</Label>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>

                  <h5 className="fw-bold mb-3 mt-4" style={{ color: "#1c7acb" }}>
                    What are the biggest challenges you are facing right now?
                  </h5>
                  <Row className="mb-3">
                    {[
                      "Stress or anxiety",
                      "Depression or low motivation",
                      "Substance use concerns",
                      "Unemployment or underemployment",
                      "Lack of structure or direction",
                      "Housing instability",
                      "Isolation or lack of support",
                      "Difficulty staying consistent",
                      "Transportation barriers",
                      "Financial stress",
                    ].map((item) => (
                      <Col md={6} key={item}>
                        <FormGroup check className="mb-2">
                          <Input
                            type="checkbox"
                            value={item}
                            onChange={(e) =>
                              handleCheckboxChange(e, "primaryChallenges")
                            }
                          />{" "}
                          <Label check>{item}</Label>
                        </FormGroup>
                      </Col>
                    ))}
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>How urgent is your need for support?</Label>
                        <Input
                          type="select"
                          name="urgencyLevel"
                          value={formData.urgencyLevel}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>I need support as soon as possible</option>
                          <option>I would like support within the next few weeks</option>
                          <option>I am exploring options and planning ahead</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Do you currently have support in place?</Label>
                        <Input
                          type="select"
                          name="currentSupport"
                          value={formData.currentSupport}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Yes, strong support</option>
                          <option>Some support, but not enough</option>
                          <option>No, I need support</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <h5 className="fw-bold mb-3" style={{ color: "#228d6e" }}>
                    Stability and Growth
                  </h5>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Current Employment Status</Label>
                        <Input
                          type="select"
                          name="employmentStatus"
                          value={formData.employmentStatus}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Employed full-time</option>
                          <option>Employed part-time</option>
                          <option>Unemployed and actively looking</option>
                          <option>Unemployed and need help getting started</option>
                          <option>Student</option>
                          <option>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Current Housing Status</Label>
                        <Input
                          type="select"
                          name="housingStatus"
                          value={formData.housingStatus}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Stable housing</option>
                          <option>Temporary housing</option>
                          <option>Living with friends or family</option>
                          <option>Housing is uncertain</option>
                          <option>I would like help exploring housing support</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Are you interested in recovery-related support?</Label>
                        <Input
                          type="select"
                          name="recoveryInterest"
                          value={formData.recoveryInterest}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Yes</option>
                          <option>No</option>
                          <option>Maybe / I would like to learn more</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>Are you interested in mentorship or coaching?</Label>
                        <Input
                          type="select"
                          name="mentorshipInterest"
                          value={formData.mentorshipInterest}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option>Yes</option>
                          <option>No</option>
                          <option>Maybe / I would like to learn more</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <hr className="my-4" />

                  <h5 className="fw-bold mb-3" style={{ color: "#d17a17" }}>
                    Goals and Plan Building
                  </h5>

                  <FormGroup>
                    <Label>
                      What would you most like to improve in the next 30 days?
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="goals30"
                      value={formData.goals30}
                      onChange={handleChange}
                      placeholder="Examples: find stable work, create a healthier routine, get support for recovery, reduce stress, improve housing stability"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      What would progress look like for you over the next 90 days?
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="goals90"
                      value={formData.goals90}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      What barriers have made it difficult to move forward?
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="barriers"
                      value={formData.barriers}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>
                      What kind of support would feel most helpful right now?
                    </Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="idealSupport"
                      value={formData.idealSupport}
                      onChange={handleChange}
                      placeholder="Examples: a step-by-step plan, accountability, counseling referrals, job support, mentorship, housing guidance"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Anything else you would like us to know?</Label>
                    <Input
                      type="textarea"
                      rows="4"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Card
                    className="border-0 rounded-4 mt-4"
                    style={{ background: "#f3f8fc" }}
                  >
                    <CardBody>
                      <h5 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>
                        What happens next?
                      </h5>
                      <p className="mb-0" style={{ fontSize: 16 }}>
                        After you submit this questionnaire, our team will review
                        your responses and use them to create a personalized plan
                        with recommended next steps, support options, and areas of
                        focus.
                      </p>
                    </CardBody>
                  </Card>

                  <div className="text-center mt-4">
                    <Button
                      color="primary"
                      size="lg"
                      className="fw-bold px-5 rounded-3"
                      style={{ backgroundColor: "#1c7acb", borderColor: "#1c7acb" }}
                    >
                      SUBMIT QUESTIONNAIRE
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card
              className="shadow-sm border-0 text-center h-100"
              style={{ background: "#f3f8fc" }}
            >
              <CardBody>
                <div style={{ fontSize: 42, color: "#1c7acb", marginBottom: 12 }}>
                  🧭
                </div>
                <h6 className="fw-bold mb-2" style={{ color: "#1c7acb" }}>
                  Clarity
                </h6>
                <p style={{ fontSize: 15 }}>
                  Help us understand your needs so we can identify the right next
                  steps.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="shadow-sm border-0 text-center h-100"
              style={{ background: "#e8f7ea" }}
            >
              <CardBody>
                <div style={{ fontSize: 42, color: "#228d6e", marginBottom: 12 }}>
                  🤝
                </div>
                <h6 className="fw-bold mb-2" style={{ color: "#228d6e" }}>
                  Support
                </h6>
                <p style={{ fontSize: 15 }}>
                  Our team uses your answers to guide support, resources, and
                  personalized planning.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              className="shadow-sm border-0 text-center h-100"
              style={{ background: "#f7e6d1" }}
            >
              <CardBody>
                <div style={{ fontSize: 42, color: "#d17a17", marginBottom: 12 }}>
                  🚀
                </div>
                <h6 className="fw-bold mb-2" style={{ color: "#d17a17" }}>
                  Next Steps
                </h6>
                <p style={{ fontSize: 15 }}>
                  The goal is to move from uncertainty to a realistic plan for
                  progress.
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