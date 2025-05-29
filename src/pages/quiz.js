import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";

const questions = [
  {
    id: 1,
    question: "How does your child respond to making mistakes?",
    options: [
      { label: "Becomes very upset and gives up", score: 1 },
      { label: "Gets frustrated but tries again", score: 2 },
      { label: "Stays calm and sees it as a learning opportunity", score: 3 },
    ],
  },
  {
    id: 2,
    question: "When facing a challenge, your child typically:",
    options: [
      { label: "Avoids it altogether", score: 1 },
      { label: "Tries but often quits", score: 2 },
      { label: "Perseveres and asks for help if needed", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How confident is your child in social situations?",
    options: [
      { label: "Very uncomfortable and shy", score: 1 },
      { label: "Somewhat confident", score: 2 },
      { label: "Very confident and outgoing", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How does your child handle unexpected changes?",
    options: [
      { label: "Gets overwhelmed and shuts down", score: 1 },
      { label: "Takes time to adjust", score: 2 },
      { label: "Adapts easily and stays calm", score: 3 },
    ],
  },
  {
    id: 5,
    question: "When your child fails at something, they usually:",
    options: [
      { label: "Blame themselves or others", score: 1 },
      { label: "Feel discouraged but try again", score: 2 },
      { label: "Reflect and seek feedback to improve", score: 3 },
    ],
  },
  {
    id: 6,
    question: "Does your child believe they can improve with effort?",
    options: [
      { label: "Not really, they feel stuck", score: 1 },
      { label: "Sometimes, depending on the task", score: 2 },
      { label: "Yes, they strongly believe in growth", score: 3 },
    ],
  },
  {
    id: 7,
    question: "How often does your child express their emotions?",
    options: [
      { label: "Rarely, they bottle things up", score: 1 },
      { label: "Occasionally, when prompted", score: 2 },
      { label: "Regularly and openly", score: 3 },
    ],
  },
  {
    id: 8,
    question: "When facing peer pressure, your child:",
    options: [
      { label: "Gives in easily", score: 1 },
      { label: "Tries to resist but struggles", score: 2 },
      { label: "Stands firm on their values", score: 3 },
    ],
  },
  {
    id: 9,
    question: "How well does your child handle criticism?",
    options: [
      { label: "Takes it personally and gets upset", score: 1 },
      { label: "Listens but gets defensive", score: 2 },
      { label: "Uses it constructively", score: 3 },
    ],
  },
  {
    id: 10,
    question: "Does your child set personal goals?",
    options: [
      { label: "No, they avoid goal-setting", score: 1 },
      { label: "Sometimes, but inconsistently", score: 2 },
      { label: "Yes, and they track their progress", score: 3 },
    ],
  },
];

import { useRouter } from "next/router"; // <-- Add this

const Assessment = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter(); // <-- Init router
  const quizRef = useRef();

  const onSubmit = (data) => {
    const totalScore = Object.values(data).reduce((sum, val) => sum + parseInt(val), 0);
    const assessment =
      totalScore <= 13
        ? "Needs Support"
        : totalScore <= 23
        ? "Developing Skills"
        : "Strong Confidence & Coping Skills";

    // Redirect to results page with query param
    router.push(`/results?score=${totalScore}&assessment=${encodeURIComponent(assessment)}`);
  };

  const generatePDF = async () => {
    const canvas = await html2canvas(quizRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("abc-confidence-assessment.pdf");
  };

  return (
    <>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Confidence & Coping Skills Assessment</h2>
            <p className="text-muted">
              Answer these 10 short questions to assess your child's current mindset, confidence level, and ability to cope with stress and challenges. You’ll receive a custom score and can download your responses as a PDF.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} ref={quizRef}>
            <Row>
              {questions.map((q, index) => (
                <Col md="6" className="mb-4" key={q.id}>
                  <Card className="h-100 shadow-sm border-0">
                    <CardBody>
                      <CardTitle tag="h5" className="fw-bold mb-3">
                        Q{index + 1}. {q.question}
                      </CardTitle>
                      {q.options.map((opt, i) => (
                        <div className="form-check" key={i}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name={`question_${q.id}`}
                            value={opt.score}
                            id={`q${q.id}_opt${i}`}
                            {...register(`question_${q.id}`, { required: true })}
                          />
                          <label className="form-check-label" htmlFor={`q${q.id}_opt${i}`}>
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <Button type="submit" color="primary" className="fw-bold mt-4">
                Submit Assessment
              </Button>
              <Button onClick={generatePDF} color="secondary" className="fw-bold mt-4 ms-3">
                Download as PDF
              </Button>
            </div>
          </form>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Assessment;
