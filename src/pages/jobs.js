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

  {
    slug: "certified-peer-recovery-support-specialist",
    title: "Certified Peer Recovery Support Specialist",
    summary:
      "Provide virtual, relationship-focused peer recovery support to individuals transitioning from federal incarceration into community placement.",
    details: {
      description: `Pathway Humanity is a behavioral health organization committed to helping individuals build
stability, resilience, recovery, and meaningful pathways back into their communities.

We are seeking experienced, credentialed Peer Recovery Support Specialists to join our team
in providing virtual peer support to individuals transitioning from federal incarceration into
community placement.

This is an opportunity to use your lived experience and professional peer-support skills to help
individuals navigate recovery, community reintegration, employment, relationships, and other
challenges associated with reentry.

Program: Federal Community Reentry Peer Support Services
Location: Remote / Virtual
Employment Type: Part-Time and Full-Time opportunities available
Employer: Pathway Humanity`,

      responsibilities: [
        "Establish supportive, professional relationships with participants",
        "Use lived recovery experience appropriately to support participants",
        "Provide recovery-oriented coaching and encouragement",
        "Help participants identify personal strengths, goals and recovery resources",
        "Support individuals as they transition from federal incarceration into community living",
        "Assist participants with identifying community resources and recovery supports",
        "Encourage healthy coping strategies and positive decision-making",
        "Support participants experiencing challenges related to substance use and/or co-occurring mental health conditions",
        "Depending on the participant’s assigned service level, provide required synchronous and asynchronous contacts",
        "Maintain accurate participant records",
        "Document contacts and services provided",
        "Complete required monthly documentation",
        "Identify inactive or suspended participants",
        "Communicate concerns to the appropriate supervisor",
        "Protect confidential participant and federal information",
        "Submit documentation according to Pathway Humanity and BOP requirements",
      ],

      qualifications: {
        required: [
          "High school diploma, GED or higher",
          "Appropriate peer-support certification",
          "At least two years of recovery experience, where applicable",
          "Required peer-support education/training",
          "Substantial direct peer-support experience",
          "Ability to demonstrate appropriate professional references",
          "Ability to successfully complete required employment/reference verification",
          "Ability to satisfy applicable federal background/security requirements",
          "Applicants in California must have their Medi-Cal Peer Support Specialist Certification",
          "Candidates must meet the applicable BOP/SOW peer-support requirements",
          "Supervised peer trainees are not acceptable for this contract",
        ],
        preferred: [
          "National Certified Peer Recovery Support Specialist (NCPRSS)",
          "National Certified Peer Specialist (NCPS)",
          "State-Level Peer Support Specialist",
          "Experience with substance use disorder recovery",
          "Experience with co-occurring mental health disorders",
          "Experience with criminal justice populations",
          "Experience with federal or state reentry",
          "Experience with probation or parole populations",
          "Experience with community reintegration",
          "Experience with residential treatment",
          "Experience with recovery housing",
          "Experience with behavioral health",
          "Experience with peer recovery coaching",
          "Experience with harm reduction",
          "Experience with employment or vocational support",
          "Experience with case management",
          "Experience with community resource navigation",
          "Lived experience with incarceration and successful community reentry is highly valued, provided the candidate meets all applicable employment and federal suitability requirements",
        ],
      },

      compensation:
        "$35 per hour, depending on certification, peer-support experience, SUD/co-occurring experience, justice-involved experience, federal program experience, availability, and responsibilities assigned",

      benefits: [
        "Competitive compensation",
        "Flexible virtual work environment",
        "Professional development",
        "Peer-support supervision",
        "Behavioral health experience",
        "Opportunity to work with a federal reentry population",
        "Opportunity to grow with Pathway Humanity’s behavioral health programs",
      ],

      additionalSections: [
        {
          title: "Virtual Engagement",
          content: `Depending on the participant’s assigned service level, provide required synchronous and
asynchronous contacts.

For example, the Basic service level requires at least:
• One 15-minute synchronous engagement; and
• Two asynchronous support check-ins during the billing cycle.

Additional asynchronous engagement may be provided when needed.

When a participant does not attend a scheduled synchronous engagement, the SOW requires
documented re-engagement attempts. Three attempts may be required before the case is reported as inactive for that billing cycle.`,
        },
        {
          title: "Documentation",
          content: `Services are billed monthly using an Individual Monthly Report identifying the CLIN/service level provided.

The Peer Recovery Support Specialist will maintain accurate participant records, document contacts and services provided, complete required monthly documentation, identify inactive or suspended participants, communicate concerns to the appropriate supervisor, protect confidential participant and federal information, and submit documentation according to Pathway Humanity and BOP requirements.`,
        },
        {
          title: "Federal Security Requirements",
          content: `Because this position supports a federal program, selected candidates must be prepared to
complete applicable federal suitability/background requirements before beginning covered work.

Candidates must also be able to comply with federal requirements concerning:
• Confidentiality
• Privacy
• Information security
• Protection of federal information
• Documentation
• Professional conduct

The solicitation contains specific federal privacy and information-security requirements applicable to contractor personnel and systems.`,
        },
        {
          title: "Schedule",
          content: `The BOP program requires virtual peer-support availability 365 days per year, 7:00 AM–10:00 PM local time.

Pathway Humanity will establish individual staff schedules to provide appropriate program coverage.

Schedule flexibility is strongly preferred.

Potential schedules may include:
• Morning
• Afternoon
• Evening
• Weekend coverage`,
        },
        {
          title: "Ideal Candidate",
          content: `The ideal candidate is someone who can say:

“I’ve been through recovery, I’ve learned how to rebuild my life, and I want to use what I’ve learned to help someone else successfully do the same.”

You should be comfortable working independently, communicating virtually, maintaining professional boundaries, documenting services accurately and building genuine relationships with participants.`,
        },
        {
          title: "How to Apply",
          content: `Please submit:
• Resume
• Peer-support certification(s)
• Relevant training/education documentation
• Brief description of your peer-support experience
• Professional references
• Preferred availability

Subject Line:
BOP Peer Recovery Support Specialist – Pathway`,
        },
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
              <p style={{ whiteSpace: "pre-line" }}>
                {selectedJob.details.description}
              </p>
            </section>


            {selectedJob.details.additionalSections?.map((section, i) => (
              <section className="mb-5" key={i}>
                <h2>{section.title}</h2>
                <p style={{ whiteSpace: "pre-line" }}>
                  {section.content}
                </p>
              </section>
            ))}


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