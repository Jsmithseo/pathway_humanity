// pages/pathway-reintegration.js
import Head from "next/head";
import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";

export default function PathwayReintegration() {
  return (
    <>
      <Head>
        <title>Pathway Humanity — Residential Treatment & Outpatient Services</title>
        <meta
          name="description"
          content="Pathway Humanity’s residential treatment homes in Oakland, CA provide structure, safety, and a supportive therapeutic environment—plus a seamless continuum of care through outpatient services in Concord."
        />
        <meta property="og:title" content="Pathway Humanity — Residential Treatment & Outpatient Services" />
        <meta
          property="og:description"
          content="A supportive therapeutic environment with safety protocols, compassionate staff, community accountability, and a continuum of care including IOP and independent living support."
        />
        <meta property="og:type" content="website" />
      </Head>

      {typeof MainNavBar === "function" ? <MainNavBar /> : null}

      {/* HERO */}
      {/* <section className="hero">
        <img
          className="hero-img"
          src="/images/pathway-humanity-hero.jpg"
          alt="Pathway Humanity residential treatment homes — Oakland, California"
        />
        <div className="hero-overlay" />
        <Container className="hero-inner">
          <Row>
            <Col lg={{ size: 9 }}>
              <h1>
                PATHWAY HUMANITY
                <br />
                <span>RESIDENTIAL TREATMENT & REINTEGRATION</span>
              </h1>
              <p className="lead">
                At Pathway Humanity, we understand that true recovery requires a solid foundation. Our residential
                treatment homes in <strong>Oakland, California</strong> are the cornerstone of a successful journey
                toward lasting sobriety—providing a secure, respectful, and profoundly supportive environment that
                fosters comprehensive healing and personal transformation.
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* CONTENT */}
      <section className="content">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <h2>Building a Foundation for Lasting Change</h2>
              <p>
                Our commitment extends far beyond simple housing. We are deeply committed to providing a secure,
                respectful, and profoundly supportive residential recovery experience that fosters comprehensive
                healing and personal transformation.
              </p>

              <hr className="rule" />

              <h2>The Therapeutic Environment: Structure and Safety</h2>
              <p>
                Our approach begins with the physical environment. Each of our meticulously maintained homes is more
                than just a residence—it is a purpose-built therapeutic environment. We have designed these spaces to
                promote holistic healing, focusing on physical comfort, emotional security, and spiritual growth.
              </p>

              <p style={{ marginBottom: 10, fontWeight: 800 }}>This supportive structure is rigorously upheld by:</p>
              <ul className="bullets">
                <li>
                  <strong>Strict Safety Protocols:</strong> The well-being of our residents is our highest priority.
                  We implement clear, non-negotiable safety standards and procedures to ensure a stable and secure
                  environment, allowing residents to focus solely on their recovery journey without external stressors.
                </li>
                <li>
                  <strong>Experienced and Compassionate Staff:</strong> Our homes are staffed by dedicated
                  professionals, including certified counselors, recovery coaches, and support personnel. This
                  experienced team offers round-the-clock support, guidance, and clinical oversight—embodying
                  compassion while holding firm boundaries essential for recovery.
                </li>
                <li>
                  <strong>A Community Framework:</strong> Recovery is not a solitary process. Our residential setting
                  fosters a powerful community built on mutual respect, honest communication, and accountability.
                  Residents learn to support one another, practice healthy interpersonal skills, and rebuild their
                  social framework in a safe, non-judgmental context.
                </li>
              </ul>

              <hr className="rule" />

              <h2>Focusing on Personal Growth and Reintegration</h2>
              <p>
                In this secure and non-judgmental setting, residents are finally able to shed the burdens of their past
                and fully concentrate on their personal growth and recovery goals. The structured daily schedule
                includes individual and group therapy, psychoeducation workshops, life skills training, and wellness
                activities—all dedicated to long-term well-being.
              </p>
              <p>
                By removing the distractions and triggers of their previous environment, Pathway Humanity creates an
                intensive, focused period of healing aimed at equipping each individual for successful, sustainable
                reintegration into the wider community as responsible, productive, and healthy citizens.
              </p>

              <hr className="rule" />

              <h2>Seamless Continuum of Care</h2>
              <p>
                Our dedication to lasting recovery extends beyond our residential facilities. To complement our core
                residential services, Pathway Humanity offers a seamless continuum of care through our comprehensive
                outpatient office located in <strong>Concord, California</strong>. This hub provides flexible and
                essential treatment options that support individuals as they transition out of the residential setting.
              </p>

              <p style={{ marginBottom: 10, fontWeight: 800 }}>Our outpatient services include:</p>
              <ul className="bullets">
                <li>
                  <strong>Intensive Outpatient Programs (IOP):</strong> Structured therapy and support for individuals
                  who can live at home or in sober living but require frequent clinical engagement.
                </li>
                <li>
                  <strong>Independent Living Support:</strong> Resources, coaching, and accountability services
                  designed to help residents establish stable, sober lives post-treatment, including job readiness,
                  financial planning, and healthy relationship management.
                </li>
              </ul>

              <p>
                By offering both residential immersion and flexible outpatient support, Pathway Humanity ensures that
                every resident has access to the full spectrum of care necessary to achieve and maintain long-term
                sobriety.
              </p>

              <hr className="rule" />

              <h2>Take the First Step Toward Recovery Today</h2>
              <p>
                We understand that taking the first step toward rehabilitative recovery can be a profound and often
                challenging decision. At Pathway Humanity, we are dedicated to supporting you through this journey with
                compassion, expertise, and personalized care.
              </p>

              <div className="cta">
                <p className="cta-title" style={{ color: "#000"}}>Your Recovery Starts Here</p>
                <p style={{ marginBottom: 10, color: "#000"}}>
                  To begin the process of enrolling in our comprehensive rehabilitative recovery treatment program, we
                  encourage you to call us today at{" "}
                  <a className="cta-link" href="tel:18887107760">
                    (888) 710-7760
                  </a>
                  . This direct line connects you instantly with one of our compassionate staff members, ready to
                  listen, answer your questions, and guide you through the initial steps of assessment and admission.
                </p>
                <p style={{ marginBottom: 10, color: "#000"  }}>
                  Alternatively, you can reach out by filling out our secure online form through our dedicated portal.
                  A staff member will receive your inquiry immediately and contact you promptly to discuss your needs.
                </p>

                {/* ✅ Update href to your real contact/portal URL */}
                <a className="cta-button" href="/contact">
                  Contact Us Now
                </a>

                <p style={{ marginTop: 12, marginBottom: 0, color: "#000" }}>
                  We are committed to helping you achieve lasting wellness and a healthier future. Reach out
                  today—we are here for you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ADDRESS STRIP */}
      <section className="address-strip" aria-label="Organization address">
        <Container>
          <Row>
            <Col md="12">
              <p>
                Pathway Humanity &nbsp;•&nbsp; 1320 Willow Pass Road, Suite 624 &nbsp;•&nbsp; Concord, CA 94520
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {typeof Footer === "function" ? <Footer /> : null}

<style jsx>{`
  :root {
    --teal: #14a2a1;
    --teal-dark: #118c8b;
    --ink: #111111;
    --ink-60: rgba(17, 17, 17, 0.6);
    --paper: #ffffff;
  }

  /* ✅ Make all page copy white by default */
  .hero,
  .content,
  .address-strip {
    color: #fff;
  }
  .content :global(a) {
    color: #fff;
  }
  .content strong,
  .hero strong,
  .bullets li strong {
    color: #fff;
  }
  .lead {
    color: rgba(255, 255, 255, 0.92);
  }
  .rule {
    border-top: 2px solid rgba(255, 255, 255, 0.18);
  }

  /* ✅ EXCEPTION: CTA block should keep original (non-white) colors */
  .cta {
    color: var(--ink);
    background: #f7fffd;
    border: 1px solid #d7f0ea;
    border-radius: 12px;
    padding: 16px 18px;
  }
  .cta :global(a) {
    color: var(--teal-dark);
  }
  .cta-title {
    margin: 0 0 6px;
    font-weight: 800;
    color: var(--teal-dark);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .cta-link {
    color: var(--teal-dark);
    text-decoration: underline;
    font-weight: 700;
  }
  .cta-button {
    display: inline-block;
    margin-top: 6px;
    padding: 10px 14px;
    border-radius: 12px;
    background: #111;
    color: #fff !important; /* button stays white text */
    font-weight: 900;
    text-decoration: none;
  }

  /* Existing layout styles unchanged */
  .hero {
    position: relative;
    min-height: 62vh;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    background: #000;
    height: 56vh;
    min-height: 520px;
    max-height: 780px;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.35) 100%);
  }
  .hero-inner {
    position: relative;
    z-index: 1;
    padding: 64px 0 64px;
  }
  h1 {
    font-weight: 900;
    line-height: 1.08;
    margin-bottom: 12px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
  }
  h1 span {
    color: #fff;
  }

  .content {
    background: var(--paper);
    padding: 56px 0 72px;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .bullets {
    margin: 0 0 26px 0;
    padding-left: 1.25rem;
  }
  .bullets li {
    margin: 0 0 10px 0;
    line-height: 1.55;
    font-size: 1.02rem;
  }

  .address-strip {
    background: var(--teal);
    padding: 14px 0;
    font-size: 0.95rem;
  }
  .address-strip p {
    margin: 0;
    text-align: left;
  }

  @media (max-width: 992px) {
    .hero {
      height: 48vh;
      min-height: 360px;
    }
    .hero-inner {
      padding: 48px 0;
    }
  }
`}</style>

    </>
  );
}
