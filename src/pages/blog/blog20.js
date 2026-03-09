// pages/blog/the-30-minute-reset.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function The30MinuteReset() {
  const title = "The 30-Minute Reset: A Simple Routine to Get Back on Track";
  const desc =
    "When you feel off track—stressed, anxious, or unmotivated—you don’t need a full life overhaul. You need a reset. Here’s a practical 30-minute routine that helps you calm your nervous system, regain clarity, and take your next step.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="reset routine, anxiety relief, stress management, nervous system regulation, resilience, habit building, young adults, recovery support, Pathway Humanity"
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
            A low-pressure reset you can do on the hardest days—no special tools required.
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
            Some days you wake up and everything feels “off.” Your mind is racing, your body feels heavy, and your to-do
            list looks like a wall you can’t climb. When you’re in that state, trying to force productivity usually
            backfires.
          </p>

          <p>
            A better approach is to <strong>reset your system first</strong>. Not forever. Not perfectly. Just enough to
            regain traction.
          </p>

          <p>
            This 30-minute reset is designed for people rebuilding stability—whether that’s in recovery, in transition,
            or simply navigating stress. You can do it at home, outside, or wherever you have a little space.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why resets work (and willpower doesn’t)
          </h2>
          <p>
            When your nervous system is overloaded, your brain prioritizes survival: scan for danger, avoid discomfort,
            conserve energy. That’s why you might feel stuck or numb. A reset routine helps your body signal “I’m safe
            enough to take the next step.”
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            The 30-minute reset (step-by-step)
          </h2>
          <p>
            You don’t need motivation—just a timer. If you only have 10 minutes, do the first two steps.
          </p>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            0–5 minutes: Breathe + posture reset
          </h3>
          <ul>
            <li>
              Sit or stand tall. Relax your shoulders.
            </li>
            <li>
              Breathe in for <strong>4</strong>, out for <strong>6</strong> (longer exhale).
            </li>
            <li>
              Do 8–10 slow breaths.
            </li>
          </ul>
          <p>
            This tells your body to downshift. It’s not a cure—it’s a signal.
          </p>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            5–10 minutes: Hydrate + light fuel
          </h3>
          <ul>
            <li>
              Drink a full glass of water.
            </li>
            <li>
              If you haven’t eaten, have something simple: fruit, yogurt, a sandwich, or whatever is available.
            </li>
          </ul>
          <p>
            Low energy and irritability are often dehydration + under-fueling in disguise.
          </p>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            10–20 minutes: Move your body (gentle but real)
          </h3>
          <p>
            Movement doesn’t have to be intense. It just needs to be enough to change your state.
          </p>
          <ul>
            <li>
              5-minute walk (outside if possible)
            </li>
            <li>
              10 bodyweight squats (or sit-to-stands)
            </li>
            <li>
              30 seconds of stretching: neck, hips, hamstrings
            </li>
            <li>
              10 deep breaths while standing
            </li>
          </ul>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            20–25 minutes: Clear your mental clutter
          </h3>
          <p>
            Write down everything pulling at your attention. Don’t organize it—just dump it.
          </p>
          <ul>
            <li>
              “What’s stressing me out?”
            </li>
            <li>
              “What can wait?”
            </li>
            <li>
              “What is one thing I can do today?”
            </li>
          </ul>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            25–30 minutes: Choose one next step (and finish it)
          </h3>
          <p>
            The goal is momentum. Pick one small, finishable task:
          </p>
          <ul>
            <li>Send one important text/email.</li>
            <li>Clean one surface (desk, bed, counter).</li>
            <li>Schedule one appointment.</li>
            <li>Pack your bag for tomorrow.</li>
          </ul>
          <p>
            Completing one task is how you teach your brain: <strong>“I can move forward.”</strong>
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What this looks like in real life
          </h2>
          <p>
            A reset isn’t dramatic. It’s quiet. It’s doing the basics when your mind wants to shut down. It’s returning
            to yourself without shame.
          </p>
          <ul>
            <li>Less spiraling, more clarity.</li>
            <li>Less avoidance, more “next step.”</li>
            <li>Less pressure, more stability.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—who are rebuilding stability. We provide
            structure, accountability, resources, and community so people can move from survival mode into steady
            momentum.
          </p>
          <ul>
            <li>Guided check-ins and support that reduces isolation.</li>
            <li>Workshops on coping skills, resilience, and life structure.</li>
            <li>Connections to real resources through trusted community partners.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want Pathway Humanity to bring a resilience + reset workshop to your organization? Contact us
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