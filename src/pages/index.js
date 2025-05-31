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
import Assessment from "../components/Assessment";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
        <MainNavbar/>
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="12">
            <h1 className="display-4 text-white fw-bold mb-4">
            We help young athletes who struggle with doubt, fear, and negative thoughts by giving them tools to handle physical, psychological, and emotional stress in youth sports.
            </h1>
          <Link href="https://calendly.com/dennis-abcmentaltoughness/30min" passHref legacyBehavior>
             <Button color="light" size="lg" className="fw-bold">
          Schedule A Call
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
        <center>
        <Assessment/>
        </center>
        <HomeGallery/>
        <NewsletterSignup/>
       
        <Footer />
        
      </section>
    </div>
  );
}
