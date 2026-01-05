// pages/blog/new-year-new-steps-building-momentum-without-burnout.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function NewYearNewStepsBuildingMomentumWithoutBurnout() {
  const title = "New Year, New Steps: Building Momentum Without Burnout";
  const desc =
    "New Year motivation can fade fast. Here are practical, realistic ways to set goals, protect your mental health, and build steady progress—especially for young adults navigating stress, change, and uncertainty.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="new year goals, mental health, resilience, habit building, burnout prevention, young adults, Pathway Humanity"
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
            A practical New Year reset for real life—small wins, steady routines, and support that lasts.
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
            The New Year comes with a familiar pressure: “Start over. Fix everything. Be a brand-new person.”
            That energy can feel exciting… until life happens. Stress returns, schedules get busy, motivation dips,
            and the goals that felt clear on January 1st start to feel heavy.
          </p>

          <p>
            Here’s the truth: you don’t need a dramatic transformation to make meaningful progress. You need
            <strong> momentum</strong>—and momentum is built with small, repeatable steps that you can keep doing even
            when your week isn’t perfect.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Start with a “one-word” theme (instead of 10 goals)
          </h2>
          <p>
            Big resolutions can feel overwhelming. A simple theme gives your brain clarity without pressure. Pick one
            word that matches your season, like:
          </p>
          <ul>
            <li>
              <strong>Stability</strong> — consistent routines, less chaos, more structure.
            </li>
            <li>
              <strong>Health</strong> — sleep, movement, hydration, mental well-being.
            </li>
            <li>
              <strong>Focus</strong> — fewer distractions, stronger boundaries, deeper work.
            </li>
            <li>
              <strong>Connection</strong> — stronger relationships, community, support.
            </li>
          </ul>
          <p>
            Then ask: <strong>“What’s one small action that matches this theme?”</strong> That’s your starting point.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Use the “2% rule”: build tiny habits that compound
          </h2>
          <p>
            Instead of trying to change everything at once, aim for a small daily upgrade. Two percent improvement
            looks like:
          </p>
          <ul>
            <li>Drink one extra glass of water per day.</li>
            <li>Walk 10 minutes after lunch.</li>
            <li>Put your phone in another room for one focused hour.</li>
            <li>Write a 3-sentence journal entry before bed.</li>
          </ul>
          <p>
            These feel small—which is the point. When a habit is easy to start, it’s easier to repeat. Repetition is
            what creates change.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Choose one “anchor routine” for mornings or nights
          </h2>
          <p>
            If you’re dealing with anxiety, depression, or stress, routines can become unstable quickly. An anchor
            routine is a short, repeatable sequence that tells your nervous system: “We’re okay. We’re grounded.”
          </p>
          <p>
            Here are two examples you can copy:
          </p>
          <ul>
            <li>
              <strong>Morning anchor (5–8 minutes):</strong> water → deep breaths → quick stretch → choose your top 1
              priority for the day.
            </li>
            <li>
              <strong>Night anchor (7–10 minutes):</strong> screen-off window → light tidy → write 1 win + 1 lesson →
              set out what you need for tomorrow.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Protect your energy: burnout prevention is a New Year skill
          </h2>
          <p>
            The fastest way to quit your goals is to chase them with a nervous system that’s exhausted. Burnout isn’t
            just “being tired”—it’s when your body and mind stop believing change is safe or sustainable.
          </p>
          <p>Try these practical boundaries:</p>
          <ul>
            <li>
              <strong>Schedule recovery:</strong> one block per week that’s protected for rest, nature, or joy.
            </li>
            <li>
              <strong>Limit perfection:</strong> aim for “most days,” not “every day.”
            </li>
            <li>
              <strong>Reduce decision fatigue:</strong> plan meals, outfits, or workouts ahead of time.
            </li>
            <li>
              <strong>Choose the next right step:</strong> when overwhelmed, ask “What’s one action I can do in 5
              minutes?”
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            A realistic goal framework: “Plan B is the plan”
          </h2>
          <p>
            Most goal plans only work on perfect weeks. Real growth happens when life gets messy. Build two versions of
            your goal:
          </p>
          <ul>
            <li>
              <strong>Plan A:</strong> your ideal week (gym 4x, meal prep, study blocks, etc.)
            </li>
            <li>
              <strong>Plan B:</strong> your “tough week” version (walk 2x, simple meals, 20 minutes of studying)
            </li>
          </ul>
          <p>
            When you hit a hard week, switching to Plan B isn’t failing—it’s maintaining momentum.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            New Year check-in questions (save these)
          </h2>
          <p>
            If you’re not sure where to start, use these prompts:
          </p>
          <ul>
            <li>
              <strong>What do I want more of this year?</strong> (peace, confidence, stability, opportunity)
            </li>
            <li>
              <strong>What’s draining me right now?</strong> (people, patterns, habits, environments)
            </li>
            <li>
              <strong>What’s one support I need?</strong> (mentor, group, routine, therapy, job help)
            </li>
            <li>
              <strong>What’s one small win I can get this week?</strong>
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help this year
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—through practical steps that build stability,
            confidence, and community. This year, we’re focused on programs that make progress feel possible:
          </p>
          <ul>
            <li>Support groups and guided check-ins that reduce isolation.</li>
            <li>Skills workshops for coping tools, stress management, and resilience.</li>
            <li>Community partnerships that connect people to resources with less friction.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want to bring a New Year reset workshop or support program to your organization? Contact Pathway Humanity
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              In the U.S., call or text <strong>988</strong> to reach the Suicide &amp; Crisis Lifeline. If there is
              immediate danger, call 911. Stay with the person if it is safe to do so and seek emergency help.
            </p>
          </details>

          <p className="mt-4" style={{ fontSize: "0.95rem", opacity: 0.85 }}>
            This post is for educational and informational purposes only and is not a substitute for professional mental
            health care.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}
