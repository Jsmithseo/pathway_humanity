import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "reactstrap";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";

export default function MentalHealthAndWorkforceReadiness() {
  const title = "Mental Health and Workforce Readiness: Building Confidence During Life Transitions";
  const desc = "Practical ways to support mental well-being, confidence, and workforce readiness during periods of change.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content="mental health, workforce readiness, life transitions, employment support, confidence, Pathway Humanity" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/images/blog24.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1 className="mb-4 text-center fw-bold" style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}>
          {title}
          <span style={{ display: "block", fontSize: "1.15rem", opacity: 0.9, marginTop: "0.75rem" }}>
            Change can feel uncertain. With support and small, practical steps, it can also become a path toward stability.
          </span>
        </h1>
        <article style={{ maxWidth: "850px", margin: "0 auto", lineHeight: "1.9", fontSize: "1.1rem", color: "#fff" }}>
          <p>Starting a new job, returning to work, changing careers, moving, finishing a program, or rebuilding after a difficult season can be exciting and stressful at the same time. During life transitions, people are often asked to learn new routines while managing the pressure of finances, family responsibilities, and uncertainty.</p>
          <p>Mental well-being and workforce readiness are connected. When a person feels supported, organized, and able to ask for help, it can be easier to prepare for work, communicate clearly, and keep taking the next step.</p>
          <p>At Pathway Humanity, we believe readiness is about more than a resume or an interview. It is also about helping people build the confidence, relationships, and routines that make opportunity feel possible.</p>
          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>Why transitions can feel heavy</h2>
          <p>A transition can interrupt the routines and support systems that usually help someone feel grounded. Even a positive change can bring questions about being ready, making mistakes, or balancing everything. Those questions do not mean someone is unprepared. They are a normal response to change.</p>
          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>Confidence grows through practice</h2>
          <p>Confidence is not something people have to wait for before they begin. It often grows after a person completes a small task, gets feedback, and sees that they can keep going.</p>
          <ul>
            <li>Set one clear goal for the week</li>
            <li>Update a resume or practice an introduction</li>
            <li>Use a calendar for appointments, work shifts, and reminders</li>
            <li>Prepare questions to ask an employer, mentor, or instructor</li>
            <li>Make a plan for transportation, childcare, or other needs</li>
            <li>Celebrate progress instead of waiting for perfection</li>
          </ul>
          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>Build a support team before stress builds up</h2>
          <p>No one should have to navigate a major transition alone. A support team does not need to be large. It can be one trusted friend, a family member, mentor, case manager, teacher, coworker, or counselor.</p>
          <ul>
            <li>Someone who can listen without judgment</li>
            <li>Someone who can help with practical planning</li>
            <li>Someone who can offer career guidance or interview practice</li>
            <li>Someone to contact when a difficult day makes it hard to stay on track</li>
          </ul>
          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>Make room for well-being in the work plan</h2>
          <p>A strong work plan includes the habits that help someone recover and recharge. Sleep, meals, movement, quiet time, and meaningful connection are not distractions from progress. They can make it easier to show up consistently.</p>
          <p>If stress begins affecting sleep, relationships, concentration, or daily responsibilities, reaching out to a qualified mental-health professional or local support resource can be an important next step.</p>
          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>One next step is enough to begin</h2>
          <p>Workforce readiness does not require a person to have every answer. It starts with one next step: sending an email, attending a workshop, updating a resume, talking to a mentor, or asking for support.</p>
          <p>Pathway Humanity supports individuals and communities through mentorship, education, workforce development, and resources that encourage stability and personal growth. We believe people deserve practical pathways toward opportunity and the support to walk them.</p>
          <p className="mt-3"><Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>Contact Pathway Humanity to learn more about community-centered support, mentorship, and workforce-readiness programming.</Link></p>
          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />
          <details><summary><strong>If someone is in crisis</strong></summary><p style={{ marginTop: "0.5rem" }}>If someone is in immediate danger, call emergency services right away. In the United States, call or text 988 to reach the Suicide &amp; Crisis Lifeline. You can also reach out to a trusted support person, local crisis line, or emergency care provider.</p></details>
          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>This post is for educational and informational purposes only and is not a substitute for professional mental health care.</p>
        </article>
      </Container>
      <Footer />
    </>
  );
}

