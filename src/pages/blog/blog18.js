// pages/blog/building-confidence-when-life-feels-unstable.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function BuildingConfidenceWhenLifeFeelsUnstable() {
  const title = "Building Confidence When Life Feels Unstable";
  const desc =
    "Confidence isn’t a personality trait—it’s a skill you can build. Here are practical ways to rebuild trust in yourself when life feels uncertain, especially for young adults navigating stress, transition, and change.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="confidence building, self trust, resilience, young adults, life transitions, mental health, coping skills, Pathway Humanity"
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
            Practical steps you can use today to rebuild self-trust, reduce overwhelm, and create steady momentum.
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
            When life feels unstable—money stress, family pressure, changing relationships, job uncertainty—confidence
            can feel like the first thing to disappear. You start second-guessing decisions, avoiding hard conversations,
            and questioning whether you’re “behind” in life.
          </p>

          <p>
            Here’s a reframe that matters: <strong>confidence isn’t something you either have or don’t have.</strong>{" "}
            Confidence is built through small experiences of keeping promises to yourself—especially when your life
            doesn’t feel perfect.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 1: Define what “confidence” actually means right now
          </h2>
          <p>
            Most people imagine confidence as being fearless. In real life, confidence looks like this:
          </p>
          <ul>
            <li>
              <strong>Taking the next step</strong> even when you’re unsure.
            </li>
            <li>
              <strong>Handling discomfort</strong> without abandoning yourself.
            </li>
            <li>
              <strong>Recovering from mistakes</strong> without spiraling into shame.
            </li>
          </ul>
          <p>
            If you can do those three things more consistently, your confidence grows automatically—because your brain
            learns, “I can handle life.”
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 2: Build self-trust with “small promises”
          </h2>
          <p>
            Self-trust is the foundation of confidence. If your goals feel overwhelming, shrink them down until they’re
            almost impossible to fail:
          </p>
          <ul>
            <li>
              <strong>2 minutes of movement</strong> after you wake up.
            </li>
            <li>
              <strong>One glass of water</strong> before coffee or energy drinks.
            </li>
            <li>
              <strong>One 10-minute task</strong> you complete fully (not half-done).
            </li>
            <li>
              <strong>One text/call</strong> you’ve been avoiding.
            </li>
          </ul>
          <p>
            When you keep small promises consistently, your brain starts to believe you again. That belief is confidence.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 3: Use a “stability plan” when your mood drops
          </h2>
          <p>
            Confidence gets weaker when you’re depleted—sleep issues, irregular eating, isolation, constant scrolling,
            or high conflict environments. A stability plan is a simple routine you run when you notice you’re slipping.
          </p>
          <p>
            Try this 5–7 minute reset:
          </p>
          <ul>
            <li>
              <strong>Ground your body:</strong> feet on the floor, shoulders down, one slow breath (exhale longer than
              inhale).
            </li>
            <li>
              <strong>Hydrate:</strong> a few sips of water.
            </li>
            <li>
              <strong>Move:</strong> walk for 2 minutes or do 10 squats—anything that changes your state.
            </li>
            <li>
              <strong>Choose one priority:</strong> “What is the next right step I can take today?”
            </li>
          </ul>
          <p>
            Confidence doesn’t require you to feel amazing. It requires you to return to yourself—then act.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 4: Replace “self-criticism” with “next-step language”
          </h2>
          <p>
            When people feel behind, the inner voice can get harsh: “I’m not doing enough,” “I always mess up,” “It’s
            too late.” Those statements feel true, but they don’t help you move.
          </p>
          <p>
            Swap them for language that creates action:
          </p>
          <ul>
            <li>
              Instead of <em>“I can’t do this”</em> → <strong>“What’s one step I can do in 10 minutes?”</strong>
            </li>
            <li>
              Instead of <em>“I’m failing”</em> → <strong>“I’m learning. What’s the lesson?”</strong>
            </li>
            <li>
              Instead of <em>“I’m behind”</em> → <strong>“I’m building. Consistency is my advantage.”</strong>
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 5: Get around people who reflect your best self
          </h2>
          <p>
            Confidence grows in community. Isolation makes problems feel bigger, and it makes setbacks feel permanent.
            You don’t need a huge circle—you need one or two safe people and one consistent support structure.
          </p>
          <ul>
            <li>
              <strong>Mentor check-ins:</strong> short, regular conversations that focus on strengths and next steps.
            </li>
            <li>
              <strong>Peer support:</strong> a space to be honest without judgment.
            </li>
            <li>
              <strong>Practical support:</strong> job readiness, housing navigation, resources, and referrals.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What confidence looks like in real life (examples)
          </h2>
          <p>
            Confidence doesn’t always look like boldness. Sometimes it looks like:
          </p>
          <ul>
            <li>Showing up to a meeting even when your anxiety is high.</li>
            <li>Asking for help before things fall apart.</li>
            <li>Applying for a job you don’t feel “ready” for.</li>
            <li>Choosing a healthier environment, even if it’s uncomfortable at first.</li>
            <li>Trying again after a setback—without shame running the show.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—through practical steps that build stability,
            confidence, and community. We help people move from survival mode into sustainable momentum.
          </p>
          <ul>
            <li>Guided check-ins that reduce isolation and create accountability.</li>
            <li>Skills workshops for coping tools, stress management, and resilience.</li>
            <li>Community partnerships that connect people to resources with less friction.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want Pathway Humanity to bring a confidence-building workshop or support program to your organization?
              Contact us
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255255,0.12)" }} />

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
