import React, { useState } from "react";
import MainNavBar from '../components/MainNavBar';
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

// Animated number component
function AnimatedNumber({ to, duration = 1500, decimals = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    let end = to;
    let range = end - start;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + range * progress;
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(step);
  }, [to, duration]);
  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

// ToggleCard component with background color
function ToggleCard({ title, color, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="border-0 shadow h-100"
      style={{
        backgroundColor: color,
        color: "#fff",
      }}
    >
      <CardBody>
        <h4 className="fw-bold mb-3" style={{ color: "#fff" }}>{title}</h4>
        <div className={`toggle-content ${isOpen ? "open" : "collapsed"}`}>
          {children}
        </div>
        <Button
          color="link"
          className="p-0 mt-2 fw-bold"
          style={{ color: "#fff", textDecoration: "underline" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Show Less ▲" : "Read More ▼"}
        </Button>
      </CardBody>
      <style jsx>{`
        .toggle-content.collapsed {
          max-height: 140px;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .toggle-content.open {
          max-height: 2000px;
          transition: max-height 0.4s ease;
        }
      `}</style>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <MainNavBar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Pathway Humanity: Nurturing Well-being and Empowering Futures</h1>
          <p>
            At Pathway Humanity, we are dedicated to cultivating individual and community well-being. We
            empower individuals and foster environments where growth, stability, and positive contribution flourish.
          </p>
          <a className="btn" href="/mission">Learn More</a>
        </div>
      </section>

      {/* WELCOME / MISSION SECTION */}
      <section className="welcome-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={12}>
              <h1 className="fw-bold mb-3" style={{ fontSize: "2.3rem", letterSpacing: 1, Color: "white" }}>
                Welcome to Pathway Humanity
              </h1>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.7, Color: "white" }}>
                Pathway Humanity is a unique and transformative organization committed to uplifting individuals from despair to empowered self-sufficiency. We provide comprehensive support for underserved populations, including those battling addiction, experiencing homelessness, struggling with poverty, underrepresented groups, and disabled veterans and civilians.
                <br /><br />
                Our mission is rooted in the belief that everyone deserves a brighter future. We are a holistic "one-stop shop," providing continuous, tailored support throughout the entire rehabilitation and empowerment process. From the moment you connect with us, you embark on a journey of growth and transformation in a safe and nurturing environment. We help clients address root causes, develop essential life skills, and gain confidence for successful societal reintegration.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SERVICE BLOCKS */}
      <Container className="py-5">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#fff" }}>
          Comprehensive Services
        </h2>
        <Row className="g-4">
          {/* Block 1 */}
          <Col md={6}>
            <ToggleCard title="Mental Health & Addiction Recovery" color="#14c9d6!important">
              <ul>
                <li>
                  <b>Comprehensive mental illness and substance use disorder treatment</b> from highly qualified psychiatrists and licensed/certified counselors.
                </li>
                <li>
                  <b>Evidence-based treatment</b> for underlying socio-economic challenges.
                </li>
              </ul>
              <p>
                <b>Comprehensive Mental Illness and Substance Use Disorder Treatment:</b> We provide an integrated and holistic approach to mental health and substance use disorder treatment. Our team comprises highly qualified, board-certified psychiatrists and licensed/certified counselors who are experts in their respective fields. We offer a full spectrum of services, including individualized therapy, group counseling, medication management, and specialized programs for co-occurring disorders. Our treatment plans are tailored to meet the unique needs of each individual, fostering a supportive and confidential environment for healing and recovery.
              </p>
              <p>
                <b>Evidence-Based Treatment for Underlying Socio-Economic Challenges:</b> Recognizing that mental health and substance use often intersect with socio-economic factors, we offer evidence-based interventions to address these underlying challenges. Our approach includes practical support and resources for issues such as housing instability, unemployment, lack of access to education, and food insecurity. By addressing these fundamental needs, we aim to create a stable foundation that supports long-term recovery and overall well-being.
              </p>
            </ToggleCard>
          </Col>

          {/* Block 2 */}
          <Col md={6}>
            <ToggleCard title="Vital Transitional Housing Support" color="#65b32e">
              <ul>
                <li>
                  <b>Safe, stable, and supportive environments</b> for individuals and families working towards self-sufficiency.
                </li>
              </ul>
              <p>
                Pathway Humanity provides transitional housing, offering safe, stable, and profoundly supportive environments. Our program is designed to empower individuals and families as they actively work towards achieving lasting self-sufficiency. We understand that the journey to independence requires more than just a roof over one's head; it necessitates a comprehensive approach that nurtures growth, stability, and well-being.
              </p>
            </ToggleCard>
          </Col>

          {/* Block 3 */}
          <Col md={6}>
            <ToggleCard title="Empowering Job Seekers" color="#1c7acb">
              <ul>
                <li>Skill Development & Enhancement</li>
                <li>Strategic Resume Building</li>
                <li>Effective Interview Preparation</li>
                <li>Targeted Job Search Strategies</li>
                <li>Temporary-to-Permanent Job Placement</li>
              </ul>
              <p>
                At Pathway Humanity, we are dedicated to fostering significant career growth for our clients. We achieve this through a comprehensive and multi-faceted approach, focusing on key areas that are crucial for professional advancement in today's competitive job market.
              </p>
            </ToggleCard>
          </Col>

          {/* Block 4 */}
          <Col md={6}>
            <ToggleCard title="Strategic Human Resources Consulting" color="#8b3dd9">
              <ul>
                <li>Talent Acquisition & Retention</li>
                <li>Employee Relations Management</li>
                <li>Policy Development & Implementation</li>
                <li>Organizational Growth & Development</li>
                <li>Salary Surveys & Benchmarking</li>
                <li>Financial literacy education</li>
                <li>Access to vital community resources</li>
              </ul>
            </ToggleCard>
          </Col>
        </Row>
      </Container>

      {/* RESEARCH STATS */}
      <section className="research-section">
        <h2 className="research-title" style={{ color: "#fff" }}>What the Research Says</h2>
        <p className="research-desc">
          Measurement-Based Care (MBC) revolutionizes mental healthcare by integrating patient data and objective measures into clinical practice. This data-driven approach empowers clinicians and individuals to make informed treatment decisions, continuously monitor progress, and personalize well-being paths. Benefits include enhanced symptom reduction, increased remission rates, and greater patient satisfaction.
        </p>
        <div className="research-cards">
          {/* Card 1 */}
          <div className="research-card stat-green">
            <div className="stat-top" style={{ background: "#14c9d6" }}>
              <span className="stat-number" style={{ color: "#fff" }}>
                <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8593;</span>
                <AnimatedNumber to={42} suffix="%" />
              </span>
            </div>
            <div className="stat-bottom stat-green-bottom">
              <div>
                <span className="stat-label">
                  HIGHER OVERALL IMPROVEMENT IN CLINICAL SYMPTOMS
                </span>
                 <br/>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="research-card stat-blue">
            <div className="stat-top" style={{ background: "#14c9d6" }}>
              <span className="stat-number" style={{ color: "#fff" }}>
                <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8593;</span>
                <AnimatedNumber to={3.5} decimals={1} suffix="x" />
              </span>
            </div>
            <div className="stat-bottom stat-blue-bottom">
              <div>
                <span className="stat-label">
                  HIGHER LIKELIHOOD THAT A CLIENT EXPERIENCES RELIABLE CHANGE
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="research-card stat-green2">
            <div className="stat-top" style={{ background: "#14c9d6" }}>
              <span className="stat-number" style={{ color: "#fff" }}>
                <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8593;</span>
                <AnimatedNumber to={40} suffix="%" />
              </span>
            </div>
            <div className="stat-bottom stat-green2-bottom">
              <div>
                <span className="stat-label">
                  IMPROVED PATIENT ATTENDANCE AND ENGAGEMENT
                </span>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #fff; line-height: 1.6; }
  a { text-decoration: none; color: inherit; }

  /* HERO SECTION */
  .hero {
    max-height: 700px;
    width: 100%;
    aspect-ratio: 1 / 2;       /* 4:3 aspect ratio */
    display: flex;
    align-items: center;
    justify-content: flex-end; /* or center, as you prefer */
    background-image: url('/images/hero_image_home.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #e9f6fa;
    overflow: hidden;           /* ensure no overflow */
  }
  
  .hero-content {
    background: rgba(255,255,255,0.85);
    padding: 8px 32px;
    border-radius: 10px;
    max-width: 470px;
    margin-left: 6vw;
    box-shadow: 0 6px 32px rgba(0,0,0,0.08);
    text-align: left;
  }
  .hero-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #203354; /* Dark color for hero heading */
  }
  .hero-content p {
    font-size: 1.25rem;
    margin-bottom: 32px;
    color: #222; /* Dark color for hero paragraph */
  }
  .hero-content .btn {
    background: #1d7acb;
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s;
    border: none;
  }
  .hero-content .btn:hover {
    background: #005b7a;
  }


  .py-5 {
    padding-top: 0rem !important;
}


  section { padding: 60px 40px; }

  /* RESEARCH SECTION */
  .research-section {
    max-width: 1240px;
    margin: 0 auto;
    padding: 60px 20px 80px 20px;
    text-align: center;
  }
  .research-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .research-desc {
    font-size: 1.15rem;
    color: #fff; /* White text for research description */
    max-width: 760px;
    margin: 0 auto 60px auto;
    line-height: 1.7;
  }
  .research-cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .research-card {
    border-radius: 8px;
    flex: 1 1 320px;
    max-width: 350px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 1px 10px rgba(0,0,0,0.07);
  }
  .stat-top {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2.7rem;
    font-weight: 600;
    padding-left: 32px;
  }
  .stat-bottom {
    display: flex;
    align-items: flex-end;
  }
  .stat-green-bottom {
    background: #14c9d6;
    color: #fff;
  }
  .stat-blue-bottom {
    background: #14c9d6;
    color: #fff;
  }
  .stat-green2-bottom {
    background: #14c9d6;
    color: #fff;
  }
  .stat-label {
    display: block;
    font-size: 1.04rem;
    font-weight: 600;
    text-align: left;
    padding: 20px 0 20px 20px;
    max-width: 180px;
  }
`}</style>
    </>
  );
}
