// src/pages/coachresults.js

import React from "react";
import { useRouter } from "next/router";
import { Container, Card, CardBody, Button } from "reactstrap";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';

const CoachResults = () => {
  const router = useRouter();
  const { score, assessment } = router.query;

  return (
    <>
      <Head>
        <title>Coach Quiz Results | ABC Mental Toughness</title>
        <meta
          name="description"
          content="Your Coach Mindset Quiz results and next steps."
        />
      </Head>

      <MainNavbar />

      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container className="text-center">
          <h2 className="fw-bold mb-4">Coach Mindset Quiz Results</h2>

          {score && assessment ? (
            <Card
              className="mx-auto shadow-sm border-0"
              style={{ maxWidth: "600px" }}
            >
              <CardBody>
                <h4 className="fw-bold">Score: {score}</h4>
                <h5 className="text-primary mt-3">Assessment: {assessment}</h5>
                <p className="text-muted mt-4">
                  Thank you for completing the Coach Mindset Quiz. Your
                  assessment reflects how you prioritize mental skills,
                  stress management, and youth development in your coaching
                  approach. Use these insights to enhance your training
                  sessions and support your athletes’ holistic growth.
                </p>
                <Button
                  color="primary"
                  className="mt-3"
                  onClick={() => router.push("/")}
                >
                  Back to Home
                </Button>
              </CardBody>
            </Card>
          ) : (
            <p>Loading your results...</p>
          )}
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br>
        <br></br>
        
      </section>

      <Footer />
    </>
  );
};

export default CoachResults;
