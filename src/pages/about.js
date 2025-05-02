// src/pages/AboutUs.jsx
import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import Image from "next/image";

import dennisImg from "../images/dennis.jpg";
import kimImg from "../images/Kimberlie.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <>
      <MainNavbar />
      <section className="py-5" style={{ backgroundColor: "#f9f9f7" }}>
        <Container>
          <h2 className="text-center fw-bold mb-5">ABC Mental Toughness Team</h2>

          <Row className="mb-5">
            <Col md="6" className="mb-4 mb-md-0">
              <Card className="border-0 shadow-sm h-100 text-center p-3">
                <center>
                <Image
                  src={kimImg}
                  alt="Kimberlie Flowers"
                  width={300}
                  height={300}
                  style={{ borderRadius: "75%" }}
                />
                </center>
            
                <CardBody>
                  <h4 className="fw-bold mt-3">Kimberlie Flowers, MS LMFT</h4>
                  <p>
                    Kimberlie has a deep psychology practice for 30+ years in Sacramento and Lake Tahoe. She was a former
                    collegiate and professional athlete. Kimberlie has 40+ years of experience in Basketball, Volleyball,
                    Adventure Racing, Alpine/AT Skiing, Water Skiing, Cycling, White Water Rafting, Fitness Class Instruction,
                    and Equestrian. She is currently applying these techniques in new sport endeavors of Kiting, Surfing,
                    Nordic Skiing, and Tennis.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card className="border-0 shadow-sm h-100 text-center p-3">
                <center>
                <Image
                  src={dennisImg}
                  alt="Dennis Belisle"
                  width={300}
                  height={300}
                  style={{ borderRadius: "75%" }}
                />
                </center>
          
                <CardBody>
                  <h4 className="fw-bold mt-3">Dennis Belisle, USSF, NSCAA, FIFA, FBF, IOC</h4>
                  <p>
                    Dennis has over 40 years of coaching experience in 9 countries. He is a former collegiate and
                    professional athlete. He has 50+ years of expertise in Soccer, Cycling, BMX, Hockey, Running,
                    Nordic Skiing, Wrestling, Triathlon & Weight/Sports Conditioning.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
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
    <br/>
      </section>
      <Footer />
    </>
  );
};

export default About;
