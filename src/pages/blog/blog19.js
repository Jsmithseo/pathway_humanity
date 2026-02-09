// pages/blog/build-better-habits-when-youre-overwhelmed.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function BuildBetterHabitsWhenYoureOverwhelmed() {
  const title = "Build Better Habits When You’re Overwhelmed";
  const desc =
    "When life feels heavy, you don’t need motivation—you need a simple system. Here are practical ways to build habits that stick, reduce stress, and create steady progress, especially for young adults navigating transition and uncertainty.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="healthy habits, behavior change, overwhelm, stress management, routines, young adults, resilience, accountability, Pathway Humanity"
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
            A practical, low-pressure system for building routines when your energy is low and your mind is full.
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
            When you’re overwhelmed, the usual advice can feel impossible: “be consistent,” “wake up early,” “stay
            motivated.” But overwhelm isn’t a character flaw—it’s often a signal that your nervous system is overloaded.
          </p>

          <p>
            Here’s the good news: <strong>you don’t need motivation to build better habits.</strong> You need a simple
            system that works on your worst days—not just your best days.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            1) Start with stability, not perfection
          </h2>
          <p>
            If your life feels chaotic (stress, money pressure, housing uncertainty, family conflict), a “perfect routine”
            is unrealistic. The goal is stability—small actions you can repeat even when you’re tired.
          </p>
          <p>
            A stable baseline usually comes from:
          </p>
          <ul>
            <li>
              <strong>Sleep support:</strong> consistent wind-down and a realistic bedtime window.
            </li>
            <li>
              <strong>Nutrition basics:</strong> simple meals and hydration.
            </li>
            <li>
              <strong>Movement:</strong> short bursts that reset your mood.
            </li>
            <li>
              <strong>Connection:</strong> one person you can check in with.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            2) Use “minimum habits” (so you don’t quit)
          </h2>
          <p>
            When you aim too big, the habit breaks and your brain learns “I can’t stick to anything.” Instead, set a
            minimum version that is nearly impossible to fail.
          </p>
          <ul>
            <li>
              Instead of “work out” → <strong>2 minutes of movement</strong>
            </li>
            <li>
              Instead of “eat clean” → <strong>one balanced meal</strong>
            </li>
            <li>
              Instead of “journal every day” → <strong>write 1 sentence</strong>
            </li>
            <li>
              Instead of “clean the whole room” → <strong>10 items put away</strong>
            </li>
          </ul>
          <p>
            The minimum habit keeps the streak alive. Once you start, you often do more—but even if you don’t, you still
            win.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            3) Stack habits onto things you already do
          </h2>
          <p>
            Habit stacking is simple: attach a new habit to an existing habit. That way you don’t rely on memory or
            motivation.
          </p>
          <ul>
            <li>
              After I brush my teeth → <strong>I drink a glass of water</strong>
            </li>
            <li>
              After I sit on my bed → <strong>I set a 10-minute timer and do one task</strong>
            </li>
            <li>
              After I make coffee → <strong>I review my “one priority” for the day</strong>
            </li>
            <li>
              After I get in the car/bus → <strong>I take 3 slow breaths</strong>
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            4) Make it easier than you think it should be
          </h2>
          <p>
            Most people fail habits because the habit is too hard to start. Reduce friction:
          </p>
          <ul>
            <li>
              Put your workout clothes next to the bed.
            </li>
            <li>
              Keep healthy snacks visible and easy to grab.
            </li>
            <li>
              Turn your phone screen grayscale at night.
            </li>
            <li>
              Use one simple checklist, not five apps.
            </li>
          </ul>
          <p>
            If the habit is hard to start, it won’t survive stress. Make “starting” as easy as possible.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            5) Track the habit, not your mood
          </h2>
          <p>
            Overwhelm can make you feel like nothing is improving. Tracking creates proof. Keep it simple:
          </p>
          <ul>
            <li>
              Use a calendar and mark an “X” when you do the minimum habit.
            </li>
            <li>
              Track only 1–3 habits at a time.
            </li>
            <li>
              Aim for “most days,” not every day.
            </li>
          </ul>
          <p>
            When you see progress on paper, it’s easier to trust yourself again.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            6) Use a reset plan for tough days
          </h2>
          <p>
            Tough days will happen. A reset plan keeps you from spiraling. Here’s a 5-minute reset:
          </p>
          <ul>
            <li>
              <strong>1 minute:</strong> slow breathing (longer exhale than inhale)
            </li>
            <li>
              <strong>1 minute:</strong> drink water
            </li>
            <li>
              <strong>2 minutes:</strong> walk, stretch, or bodyweight movement
            </li>
            <li>
              <strong>1 minute:</strong> choose one next step (one task you can finish)
            </li>
          </ul>
          <p>
            You’re not trying to fix your whole life in one day—you’re trying to return to stability.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What “better habits” look like in real life
          </h2>
          <p>
            Progress can be quiet. It might look like:
          </p>
          <ul>
            <li>Going to bed 20 minutes earlier.</li>
            <li>Keeping one daily commitment to yourself.</li>
            <li>Asking for support before you’re in crisis.</li>
            <li>Completing one small task fully.</li>
            <li>Returning to your routine after a setback—without shame.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—by helping them build stability, healthy
            routines, and community. We make it easier to move from survival mode into steady momentum.
          </p>
          <ul>
            <li>Guided check-ins that reduce isolation and build accountability.</li>
            <li>Workshops on coping skills, stress management, and resilience.</li>
            <li>Connections to resources through community partnerships.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want Pathway Humanity to bring a habits + resilience workshop to your organization? Contact us
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
