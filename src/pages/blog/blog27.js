import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "reactstrap";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";

export default function MentalHealthAndBelonging() {
  const title = "Mental Health and Belonging: The Power of Community Support";
  const desc =
    "How everyday connection, trusted relationships, and community resources can support mental well-being.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="mental health, community support, belonging, well-being, resilience, Pathway Humanity"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/images/blog27.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          {title}
          <span
            style={{
              display: "block",
              fontSize: "1.15rem",
              opacity: 0.9,
              marginTop: "0.75rem",
            }}
          >
            Feeling supported and connected can make it easier to care for our
            mental health—especially during challenging seasons.
          </span>
        </h1>

        <article
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "#fff",
          }}
        >
          <p>
            Mental health is part of everyday life. It can influence how we
            handle stress, connect with others, make decisions, and take the
            next step toward school, work, or a personal goal. While everyone
            experiences difficult days, no one should have to carry those days
            alone.
          </p>
          <p>
            A sense of belonging can be a meaningful source of strength.
            Belonging does not mean having a large circle of people or always
            feeling understood. It can start with one reliable relationship, a
            welcoming program, a place to ask a question, or a community that
            reminds someone they matter.
          </p>
          <p>
            At Pathway Humanity, we believe practical support and human
            connection can work together. When people have access to
            encouragement, information, and trusted resources, it can become
            easier to move forward one step at a time.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why connection matters
          </h2>
          <p>
            Stress can sometimes make people pull away from others, even when
            support would help. Reaching out can feel difficult when someone is
            overwhelmed, uncertain, or worried about being judged. A
            compassionate conversation, however, can reduce isolation and make
            a challenge feel more manageable.
          </p>
          <p>
            Support can look different for different people. It may come from a
            family member, friend, mentor, faith leader, coworker, counselor,
            support group, or community organization. What matters is having a
            person or place where it feels safe to be honest.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Small ways to strengthen support
          </h2>
          <p>
            Building connection does not have to begin with a big conversation.
            Small, consistent actions can help create a stronger support system:
          </p>
          <ul>
            <li>Check in with one trusted person this week.</li>
            <li>
              Let someone know what kind of support would be helpful—listening,
              encouragement, or help with a practical task.
            </li>
            <li>
              Attend a community event, class, support group, or volunteer
              activity that feels welcoming.
            </li>
            <li>
              Save the contact information for local resources before a hard
              day arrives.
            </li>
            <li>
              Offer support to someone else with a simple message or invitation
              to talk.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Make room for care in everyday routines
          </h2>
          <p>
            Mental well-being is supported by routines that make life feel more
            steady. Regular sleep, meals, movement, fresh air, quiet time, and
            meaningful connection can all help someone stay grounded. These
            habits are not a replacement for professional care, but they can be
            useful parts of a broader plan for well-being.
          </p>
          <p>
            It can also help to notice when stress is getting in the way of
            daily life. If worry, sadness, anger, or exhaustion is affecting
            sleep, relationships, work, school, or the ability to manage
            everyday responsibilities, reaching out to a qualified mental health
            professional or local support resource can be an important next
            step.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Community can be part of the path forward
          </h2>
          <p>
            Many people are doing their best while balancing work, caregiving,
            housing, transportation, finances, and other responsibilities.
            Community-centered support helps make those challenges less
            isolating. Mentorship, education, workforce development, and
            resource navigation can all help people build stability and
            confidence.
          </p>
          <p>
            Asking for support is not a sign of weakness. It is a practical,
            courageous step toward taking care of yourself and creating
            opportunities for the future.
          </p>
          <p>
            Pathway Humanity supports individuals and communities through
            mentorship, education, workforce development, and resources that
            encourage stability and personal growth.
          </p>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{ color: "#20c997", textDecoration: "underline" }}
            >
              Contact Pathway Humanity to learn more about community-centered
              support, mentorship, and workforce-readiness programming.
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              If someone is in immediate danger, call emergency services right
              away. In the United States, call or text 988 to reach the Suicide
              &amp; Crisis Lifeline. You can also reach out to a trusted support
              person, local crisis line, or emergency care provider.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is for educational and informational purposes only and is
            not a substitute for professional mental health care.
          </p>
        </article>
      </Container>
      <Footer />
    </>
  );
}
