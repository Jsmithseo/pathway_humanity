// src/components/MentalGameStepsGrid.jsx

import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { FaBrain, FaSmile, FaBullseye, FaRunning, FaLightbulb, FaHandsHelping, FaChartLine, FaHeartbeat, FaTrophy } from "react-icons/fa";

const steps = [
  {
    icon: <FaBrain size={40} />, 
    title: "Breaking the Cycle: Awareness is the First Step", 
    description: "Self-talk often goes unnoticed. The first step to improvement is simply becoming aware. Start paying attention to what you say to yourself during practices and games. Awareness alone is a strong mental tool."
  },
  {
    icon: <FaSmile size={40} />, 
    title: "Overcoming Fear of Failure: Shift the Mindset", 
    description: "Mistakes don't mean you failed—they mean you're trying. Shift your mindset from a fear of failure to a focus on growth. Every misstep is a step forward."
  },
  {
    icon: <FaHandsHelping size={40} />, 
    title: "Handling Pressure: Support Over Stress", 
    description: "Sometimes it’s pressure, not performance, that gets in the way. Surround yourself with people who remind you why you play—not why you should be perfect."
  },
  {
    icon: <FaBullseye size={40} />, 
    title: "Comparison vs. Progress: The Only Competition is You", 
    description: "Comparing yourself to others steals joy and progress. Track your own growth, and use others’ success as inspiration, not intimidation."
  },
  {
    icon: <FaLightbulb size={40} />, 
    title: "From Perfectionism to Progress: Embracing Mistakes", 
    description: "Perfection is the enemy of progress. Train your brain to see mistakes as messages—not measurements."
  },
  {
    icon: <FaRunning size={40} />, 
    title: "Building Resilience: The Power of Support Systems", 
    description: "Resilience isn’t built alone. Talk to your coach. Lean on your team. Let your support system remind you how far you’ve come."
  },
  {
    icon: <FaChartLine size={40} />, 
    title: "Bonus: Progress Tracking", 
    description: "Reflect regularly. Journaling and feedback loops help track your mental growth over time."
  },
  {
    icon: <FaHeartbeat size={40} />, 
    title: "Bonus: Emotional Regulation", 
    description: "Learn breathing techniques, self-talk cues, or routines that reset your nervous system in the moment."
  },
  {
    icon: <FaTrophy size={40} />, 
    title: "Bonus: Celebrate Wins", 
    description: "Don’t just evaluate performance—celebrate the effort. Little wins build big confidence."
  }
];

const MentalGameStepsGrid = () => {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        {/* <h2 className="mb-4 fw-bold">
          6 Steps:<br /> Mastering the Mental Game
        </h2>
        <p className="mb-5 text-muted">
          Overcoming Negative Self-Talk in Young Athletes
        </p> */}
        <Row>
          {steps.map((step, index) => (
            <Col md="4" sm="6" xs="12" key={index} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <CardBody className="d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3 text-primary">{step.icon}</div>
                  <h5 className="fw-bold text-center">{step.title}</h5>
                  <p className="text-muted text-center mt-2" style={{ fontSize: '0.95rem' }}>{step.description}</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MentalGameStepsGrid;