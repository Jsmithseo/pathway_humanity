import React from "react";
import MainNavbar from "../components/MainNavBar";
import MentalGameStepsGrid from "../components/MentalGameStepsGrid";
import MindsetTrainingSection from "../components/MindsetTrainingSection"
import NewsletterSignup from "../components/NewsletterSignup"
import HomeGallery from "../components/HomeGallery"
import Footer from "../components/Footer"
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import "../styles/Home.module.css"
// import Feature from "../components/landing-page/feature/feature";
// import Newsletter from "../components/landing-page/newsletter/page";
// import InfoCardGrid from "./InfoCardComponents/InfoCardGrid";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
        <MainNavbar/>
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="10">
            <h1 className="display-3 text-white fw-bold mb-4">
           " I'm finding new ways to motivate myself without any extra pressure. I'm just playing."

            </h1>
            {/* <p className="lead text-black-50 mb-5">
            I'm finding new ways to motivate myself without any extra pressure. I'm just playing.
            </p> */}
          <Link href="/contact" passHref legacyBehavior>
             <Button color="light" size="lg" className="fw-bold">
          Start Training
            </Button>
         </Link>
          </Col>
        </Row>
      </Container>
    </div>

    <MindsetTrainingSection/>

      <section className="relative flex flex-col items-center justify-center py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-3xl font-extrabold text-gray-800 md:text-gray-900 text-center mb-8 tracking-wide px-6 sm:px-8">
          6 Steps: <br/>
          Mastering the Mental Game: Overcoming Negative Self-Talk in Young Athletes
        </h1>
        <MentalGameStepsGrid/>
        <HomeGallery/>
        <NewsletterSignup/>
       
        <Footer />
        
      </section>
    </div>
  );
}
