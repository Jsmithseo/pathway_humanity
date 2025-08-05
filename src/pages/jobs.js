// pages/jobs.js
import React, { useState } from "react";
import Head from "next/head";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";

const jobs = [
  {
    slug: "substance-abuse-treatment-therapist",
    title: "Substance Abuse Treatment Therapist",
    summary:
      "Provide individual, group & family therapy for clients struggling with addiction.",
    details: {
      description: `Pathway Humanity is seeking a compassionate and dedicated Substance Abuse Treatment
Therapist to join our team in providing high-quality care to individuals struggling
with substance abuse and addiction. The successful candidate will provide individual,
group, and family therapy, conduct assessments, develop treatment plans, and
collaborate with a multidisciplinary team to support clients in their recovery journey.`,
      responsibilities: [
        "Conduct comprehensive assessments to diagnose substance abuse disorders and co-occurring mental health conditions",
        "Develop individualized treatment plans that address clients’ specific needs and goals",
        "Provide individual, group, and family therapy using evidence-based practices",
        "Monitor clients’ progress and adjust treatment plans as needed",
        "Collaborate with other healthcare professionals to provide integrated care",
        "Maintain accurate and confidential client records",
        "Stay current on best practices in the field of substance abuse treatment",
      ],
      qualifications: {
        required: [
          "Master’s degree in Social Work, Counseling, Psychology, or related field (or Bachelor’s + 5 years’ experience)",
          "Experience providing substance abuse treatment in a clinical setting",
          "Knowledge of evidence-based modalities (e.g., CBT, Motivational Interviewing)",
          "Excellent communication and interpersonal skills",
          "Ability to work effectively with a diverse population",
        ],
        preferred: [
          "California license as a Substance Abuse Treatment Therapist (or equivalent)",
          "Bilingual (Spanish/English)",
          "Experience working with co-occurring disorders",
          "Training in trauma-informed care",
        ],
      },
      compensation: "$50–$80 per hour (based on experience)",
      benefits: [
        "Competitive salary and benefits package",
        "Professional development & training opportunities",
        "Supportive, collaborative work environment",
        "Flexible schedule",
        "Making a meaningful difference in others’ lives",
      ],
      applyEmail: "applicants@pathwayhumanity.com",
    },
  },
  // → add new jobs here
];

export default function JobsPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const selectedJob = jobs.find((j) => j.slug === selectedSlug);

  return (
    <>
      <Head>
        <title>
          {selectedJob ? selectedJob.title : "Careers"} | Pathway Humanity
        </title>
      </Head>
      <MainNavBar />

      <Container className="py-5 jobs-content">
        {!selectedJob ? (
          /* ── LISTING VIEW ── */
          <>
            <h1 className="text-center mb-4">Open Positions</h1>
            <Row className="g-4">
              {jobs.map(({ slug, title, summary }) => (
                <Col md={6} key={slug}>
                  <Card className="h-100 shadow-sm bg-transparent border-light">
                    <CardBody>
                      <h4>{title}</h4>
                      <p>{summary}</p>
                      <Button
                        color="primary"
                        onClick={() => setSelectedSlug(slug)}
                      >
                        View Details
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
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
            <br/>
            <br/>
            <br/>
            <br/>

          </>
        ) : (
          /* ── DETAIL VIEW ── */
          <>
            <Button
              color="link"
              className="mb-4 ps-0 text-white"
              onClick={() => setSelectedSlug(null)}
            >
              ← Back to Open Positions
            </Button>

            <section className="mb-5">
              <h1 className="fw-bold mb-3">{selectedJob.title}</h1>
              <p>{selectedJob.details.description}</p>
            </section>

            <section className="mb-5">
              <h2>Responsibilities</h2>
              <ul>
                {selectedJob.details.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="mb-5">
              <h2>Qualifications</h2>
              <h5 className="mt-3">Required:</h5>
              <ul>
                {selectedJob.details.qualifications.required.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
              <h5 className="mt-3">Preferred:</h5>
              <ul>
                {selectedJob.details.qualifications.preferred.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </section>

            <section className="mb-5">
              <h2>Compensation</h2>
              <p>{selectedJob.details.compensation}</p>
            </section>

            <section className="mb-5">
              <h2>Benefits</h2>
              <ul>
                {selectedJob.details.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>

            <section className="mb-5">
              <h2>To Apply</h2>
              <p>
                Send a cover letter & resume to{" "}
                <a
                  href={`mailto:${selectedJob.details.applyEmail}`}
                  className="text-white"
                >
                  {selectedJob.details.applyEmail}
                </a>
                .
              </p>
            </section>
          </>
        )}
      </Container>

      <Footer />

      <style jsx global>{`
        /* Make all text white */
        body {
          color: #fff;
        }
        .jobs-content {
          color: #fff;
        }
        a {
          color: #fff;
        }
        /* Give each section extra bottom margin */
        .jobs-content section {
          margin-bottom: 2rem;
        }
        /* Cards should inherit white text */
        .jobs-content .card,
        .jobs-content .card-body {
          color: #fff;
        }
      `}</style>
    </>
  );
}
