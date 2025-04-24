import React from "react";
import { Container, Row, Col } from "reactstrap";

const MindsetTrainingSection = () => {
  return (
    <Container className="my-5 py-4 bg-white rounded shadow">
      <Row className="align-items-center">
        {/* Left: YouTube Embed */}
        <Col md="6" className="mb-4 mb-md-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/tXous9-cFzA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        {/* Right: Content */}
        <Col md="6">
          <h2 className="fw-bold mb-3">
            Sports Mindset Development and Psychological Skill Training
          </h2>
          <p>
            The goal of early training is to create a foundation of performance,
            perspective skills, and strategies that are supported over time to create
            a more refined, mature approach to performance.
          </p>
          <p>
            The goal is to provide a foundation of mental and coping skills that
            will give young athletes the best chance to perform and excel in any moment,
            regardless of the competition—and this alone is a great reason for
            conducting mental skills training.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MindsetTrainingSection;
