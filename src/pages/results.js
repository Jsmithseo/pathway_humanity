import React from "react";
import { useRouter } from "next/router";
import { Container, Card, CardBody, Button } from "reactstrap";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";

const Results = () => {
  const router = useRouter();
  const { score, assessment } = router.query;

  return (
    <>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Container className="text-center">
          <h2 className="fw-bold mb-4">Assessment Results</h2>

          {score && assessment ? (
            <Card className="mx-auto shadow-sm border-0" style={{ maxWidth: "500px" }}>
              <CardBody>
                <h4 className="fw-bold">Score: {score}</h4>
                <h5 className="text-primary mt-3">Result: {assessment}</h5>
                <p className="text-muted mt-4">
                  This result is based on your responses to the Confidence & Coping Skills Assessment. Use this feedback as a starting point to support your child’s emotional growth and mental development.
                </p>
                <Button color="primary" className="mt-3" onClick={() => router.push("https://calendly.com/dennis-abcmentaltoughness/30min?month=2025-05")}>
                  Schedule a Call
                </Button>
              </CardBody>
            </Card>
          ) : (
            <p>Loading your result...</p>
          )}
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> <br/> <br/> <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </section>
      <Footer />
    </>
  );
};

export default Results;
