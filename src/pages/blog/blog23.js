// pages/blog/why-small-routines-matter.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function WhySmallRoutinesMatter() {
  const title =
    "Why Small Routines Matter: How Consistency Helps Rebuild Stability";
  const desc =
    "When life feels uncertain or emotionally heavy, small routines can create structure, reduce stress, and help people regain a sense of control and momentum.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="daily routines, mental health support, emotional wellness, structure, consistency, coping skills, young adults, recovery support, Pathway Humanity"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Head>

      <MainNavbar />

      <Container className="py-5">
        <h1
          className="mb-4 text-center fw-bold"
          style={{ fontSize: "2.5rem", lineHeight: "1.3", color: "#fff" }}
        >
          {title}
          <span style={{ display: "block", fontSize: "1.15rem", opacity: 0.9 }}>
            Small habits can create stability when life feels unpredictable.
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
            When people think about changing their lives, they often imagine
            dramatic breakthroughs or massive overnight transformation.
            But in reality, stability is usually built through small,
            repeatable actions done consistently over time.
          </p>

          <p>
            Something as simple as waking up at the same time, making your bed,
            drinking water in the morning, or taking a short walk can begin to
            create a sense of structure. These routines may seem small, but they
            send an important message to the mind and body:
            life is becoming more manageable.
          </p>

          <p>
            During stressful seasons, routines are not about perfection.
            They are about creating enough consistency to help reduce chaos,
            increase emotional steadiness, and rebuild confidence one step at a time.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why routines matter during difficult seasons
          </h2>

          <p>
            Stress, anxiety, depression, grief, and major life transitions can
            disrupt a person’s sense of stability. Sleep patterns change.
            Motivation drops. Simple tasks start to feel harder than usual.
          </p>

          <p>
            In those moments, routines can help ground the nervous system.
            Predictability creates emotional safety. Even small acts of structure
            can reduce mental fatigue because the brain no longer has to make
            constant decisions throughout the day.
          </p>

          <p>
            Routines do not eliminate pain or difficulty, but they can provide
            a steady foundation while someone works through challenging circumstances.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Small routines build momentum
          </h2>

          <p>
            One completed task often creates momentum for the next one.
            That is why small wins matter.
          </p>

          <p>
            For example:
          </p>

          <ul>
            <li>Making your bed may help you feel more organized</li>
            <li>Taking a shower may improve your energy and confidence</li>
            <li>Writing down your schedule may reduce anxiety</li>
            <li>Going outside for ten minutes may improve your mood</li>
            <li>Preparing one healthy meal may help you feel more in control</li>
          </ul>

          <p>
            Progress is often less about intensity and more about consistency.
            Small routines repeated daily can slowly shift how someone feels,
            thinks, and functions.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Start smaller than you think
          </h2>

          <p>
            One reason people struggle to maintain routines is because they try
            to change everything at once. They create unrealistic expectations,
            become overwhelmed, and eventually give up.
          </p>

          <p>
            Instead, focus on one or two simple habits first.
          </p>

          <p>
            Examples:
          </p>

          <ul>
            <li>Wake up within the same 30-minute window each morning</li>
            <li>Drink water before checking your phone</li>
            <li>Spend five minutes cleaning your space</li>
            <li>Write down three priorities for the day</li>
            <li>Take a short walk after dinner</li>
          </ul>

          <p>
            The goal is not to become perfect overnight.
            The goal is to build trust with yourself again through repetition.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Consistency creates confidence
          </h2>

          <p>
            People often wait to feel motivated before taking action,
            but confidence is usually built after action.
          </p>

          <p>
            Every time you follow through on a small commitment to yourself,
            you strengthen the belief that change is possible.
            Over time, those repeated actions can improve emotional resilience,
            self-esteem, and overall stability.
          </p>

          <p>
            This is especially important for people rebuilding after burnout,
            emotional hardship, addiction recovery, instability, or major life changes.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What to remember when building routines
          </h2>

          <ul>
            <li>Start small and keep it realistic.</li>
            <li>Consistency matters more than perfection.</li>
            <li>Missing one day does not erase your progress.</li>
            <li>Simple structure can reduce emotional overwhelm.</li>
            <li>Healthy routines create momentum over time.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>

          <p>
            Pathway Humanity supports individuals and families working toward
            greater emotional wellness, stability, and personal growth.
            Through community-centered support, practical tools, and educational
            workshops, people can begin rebuilding healthy structure and forward movement.
          </p>

          <ul>
            <li>Workshops focused on emotional wellness and coping skills</li>
            <li>Supportive programs that encourage personal growth</li>
            <li>Community-centered resources for individuals and families</li>
          </ul>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{
                color: "#20c997",
                textDecoration: "underline",
              }}
            >
              If your organization is looking for support, workshops, or
              community-centered mental health resources, contact Pathway Humanity
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>

            <p style={{ marginTop: "0.5rem" }}>
              In the U.S., call or text <strong>988</strong> to reach the Suicide
              &amp; Crisis Lifeline. If there is immediate danger, call 911.
              Stay with the person if it is safe to do so and seek emergency help.
            </p>
          </details>

          <p
            className="mt-4"
            style={{ fontSize: "0.95rem", opacity: 0.85 }}
          >
            This post is for educational and informational purposes only and is
            not a substitute for professional mental health care.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}