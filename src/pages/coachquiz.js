// src/pages/coach-quiz.jsx

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
import { useRouter } from "next/router";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    id: 1,
    question:
      "As a coach of adolescent athletes, your main area of focus is?",
    options: [
      { label: "Winning games", score: 1 },
      { label: "Correcting mistakes", score: 2 },
      {
        label:
          "Addressing the developmental considerations relevant in youth populations",
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question:
      "With relevant considerations in youth populations, how often is MST (mental skills training) your chosen topic during your training sessions?",
    options: [
      { label: "Rarely", score: 1 },
      { label: "Somewhat infrequent", score: 2 },
      { label: "Addressed or considered in every session", score: 3 },
    ],
  },
  {
    id: 3,
    question:
      "In your estimation, the most important consideration for the success of the individual players you coach is?",
    options: [
      { label: "Understanding your vision", score: 1 },
      {
        label:
          "Tactical grasp of attacking, defending, and transition play",
        score: 2,
      },
      {
        label:
          "The ability of the young athletes to handle increased amounts of physical, psychological, and emotional stress",
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question:
      "When your young athletes face a setback (e.g., loss or injury), their first reaction is usually to:",
    options: [
      { label: "Blame themselves or others", score: 1 },
      { label: "Feel frustrated but push through", score: 2 },
      {
        label:
          "Reflect on lessons learned and adjust their strategy",
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question:
      "How often do you incorporate discussions of confidence and coping strategies into your pre-game or practice huddles?",
    options: [
      { label: "Rarely – I focus mainly on tactics and drills", score: 1 },
      {
        label:
          "Occasionally – when I notice a player struggling",
        score: 2,
      },
      { label: "Every session – it’s part of our routine", score: 3 },
    ],
  },
  {
    id: 6,
    question:
      "In your opinion, the best indicator that a youth athlete is mentally ready to compete is:",
    options: [
      {
        label: "They follow every coach’s instruction without question",
        score: 1,
      },
      {
        label:
          "They execute plays effectively, regardless of the score",
        score: 2,
      },
      {
        label:
          "They stay calm under pressure and bounce back from mistakes",
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question:
      "When designing your practice plans, how much emphasis do you place on teaching stress-management techniques (e.g., breathing exercises, visualization)?",
    options: [
      {
        label:
          "Very little – I prioritize physical skills first",
        score: 1,
      },
      {
        label:
          "Some – I add a brief mention when time allows",
        score: 2,
      },
      {
        label:
          "Significant – it’s a core pillar of each practice",
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question:
      "What do you believe helps a young athlete best manage game-day nerves?",
    options: [
      { label: "Strict focus on game plan and strategy", score: 1 },
      { label: "Pre-game pep talk from the coach", score: 2 },
      {
        label:
          "A routine that includes mental warm-up (e.g., visualization, positive self-talk)",
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question:
      "When a player’s performance dips mid-season, you most often:",
    options: [
      {
        label:
          "Increase drills and repetitions to improve technique",
        score: 1,
      },
      { label: "Give extra one-on-one time to correct errors", score: 2 },
      {
        label:
          "Check in on their mindset, stress levels, and outside factors first",
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question:
      "Which quality do you think is most essential for a young athlete to develop early on?",
    options: [
      { label: "Discipline to follow instructions perfectly", score: 1 },
      { label: "Tactical understanding of the game", score: 2 },
      {
        label:
          "Emotional resilience to handle setbacks and pressure",
        score: 3,
      },
    ],
  },
];

const CoachQuiz = () => {
  const { register, handleSubmit } = useForm();
  const quizRef = useRef();
  const router = useRouter();

  const onSubmit = (data) => {
    const totalScore = Object.values(data).reduce(
      (sum, val) => sum + parseInt(val),
      0
    );
    const assessment =
      totalScore <= 13
        ? "Needs Development"
        : totalScore <= 23
        ? "Developing Skills"
        : "Strong Coaching Mindset";

    // Redirect user to the results page with query params
    router.push(
      `/coachresults?score=${totalScore}&assessment=${encodeURIComponent(
        assessment
      )}`
    );
  };

  const generatePDF = async () => {
    if (!quizRef.current) return;
    const canvas = await html2canvas(quizRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("coach-quiz-results.pdf");
  };

  return (
    <>
      <Head>
        <title>Coach Mindset Quiz | ABC Mental Toughness</title>
        <meta
          name="description"
          content="Quiz for coaches to assess their focus on mental skills and youth development."
        />
      </Head>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold">Coach Mindset & Development Quiz</h2>
            <p className="text-muted">
              Answer these 10 questions to see how you prioritize mental
              skills, stress management, and youth development in your coaching.
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
                            {...register(`question_${q.id}`, {
                              required: true,
                            })}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`q${q.id}_opt${i}`}
                          >
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
                Submit Quiz
              </Button>
              <Button
                onClick={generatePDF}
                color="secondary"
                className="fw-bold mt-4 ms-3"
              >
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

export default CoachQuiz;
