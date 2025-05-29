import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Assessment = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="align-items-center">
          <Col md="12">
            <Card className="border-0 shadow-sm">
              <CardBody>
                <CardTitle tag="h3" className="fw-bold mb-3">Help Your Child Build Mental Strength</CardTitle>
                <CardText className="text-muted">
                  Our free Confidence & Coping Skills Assessment helps you understand how your child responds to stress, challenges, and social situations. Take the Assessment today and receive personalized guidance to support your child’s growth.
                </CardText>
                <Button color="primary" href="/quiz" className="fw-bold">
                  Take the Assessment
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Assessment;
