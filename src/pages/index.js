import React from "react";
import Image from "next/image";
import hero from "../../public/images/image2.jpg"
import { Container, Row, Col, Button } from "reactstrap";
import "../styles/Home.module.css"
// import Feature from "../components/landing-page/feature/feature";
// import Newsletter from "../components/landing-page/newsletter/page";
// import InfoCardGrid from "./InfoCardComponents/InfoCardGrid";

export default function Home() {
  return (
    <div>
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="10">
            <h1 className="display-3 text-white fw-bold mb-4">
              Unlock Your Mental Edge
            </h1>
            <p className="lead text-white-50 mb-5">
              Train your mind like your muscles. Start building confidence, focus, and performance under pressure.
            </p>
            <Button color="light" size="lg" className="fw-bold">
              Start Training
            </Button>
          </Col>
        </Row>
      </Container>
    </div>

      <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-white">
        {/* Left: YouTube Embed */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Sports Mindset Development and Psychological Skill Training</h2>
          <p className="text-gray-700 mb-4">
            The goal of early training is to create a foundation of performance, perspective skills, and strategies that are supported over time to create a more refined, mature approach to performance. The goal is to provide a foundation of mental and coping skills that will give young athletes the best chance to perform and excel in any moment, regardless of the competition—and this alone is a great reason for conducting mental skills training.
          </p>
        </div>
      </div>

      <section className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-3xl font-extrabold text-gray-800 md:text-gray-900 text-center mb-8 tracking-wide px-6 sm:px-8">
          6 Steps: <br/>
          Mastering the Mental Game: Overcoming Negative Self-Talk in Young Athletes
        </h1>

        {/* <InfoCardGrid />
        <br /><br /><br />

        <Feature />
        <Newsletter/> */}
      </section>
    </div>
  );
}
