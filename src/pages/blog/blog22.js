// pages/blog/when-everything-feels-urgent.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function WhenEverythingFeelsUrgent() {
  const title = "When Everything Feels Urgent: How to Calm Down and Choose Your Next Step";
  const desc =
    "When life feels overwhelming, every problem can feel like an emergency. This post offers a simple framework to calm your nervous system, reduce mental overload, and choose your next step with more clarity.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="overwhelm, anxiety, emotional regulation, nervous system, mental health support, young adults, coping skills, clarity, recovery support, Pathway Humanity"
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
            A simple way to slow the spiral and move forward with more clarity.
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
            There are seasons in life when everything feels important at once.
            The text you need to send. The bill you need to pay. The job you need
            to apply for. The relationship you need to repair. The habit you need
            to fix. The future you need to figure out.
          </p>

          <p>
            When too many things feel urgent, the mind starts to race and the body
            starts to tighten. You may feel pressure to solve everything
            immediately, but instead of becoming more productive, you get stuck,
            scattered, or shut down.
          </p>

          <p>
            That does not mean you are weak or incapable. It usually means your
            system is overloaded. And when your system is overloaded, clarity does
            not come from pushing harder. It comes from slowing down enough to
            regain your footing.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why everything starts to feel like an emergency
          </h2>
          <p>
            When stress builds up, the nervous system can start treating multiple
            problems like immediate threats. That is when everything blends
            together. Small things feel huge. Decisions feel heavier. Even basic
            tasks can feel emotionally expensive.
          </p>

          <p>
            In that state, your brain is not necessarily seeing clearly. It is
            reacting quickly. That is why people often jump from one worry to the
            next without actually resolving anything. The mind is trying to escape
            pressure, but it ends up multiplying it.
          </p>

          <p>
            The answer is not to ignore your responsibilities. The answer is to
            sort them in a calmer state so you can respond instead of react.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 1: Pause the mental pileup
          </h2>
          <p>
            Before you solve anything, pause. Sit down. Breathe slowly. Put both
            feet on the floor. Give yourself one minute where the only job is to
            come back into your body.
          </p>

          <p>
            Try this:
          </p>
          <ul>
            <li>Breathe in for 4 seconds</li>
            <li>Breathe out for 6 seconds</li>
            <li>Repeat 5 times</li>
          </ul>

          <p>
            This does not magically erase your problems, but it can lower the
            internal alarm enough for your mind to become more organized.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 2: Separate the real from the emotional
          </h2>
          <p>
            Once you slow down, ask yourself:
            <strong> What actually needs attention today?</strong>
          </p>

          <p>
            Not everything that feels urgent is truly urgent. Some things are
            emotionally loud, but not time-sensitive. Some things do matter, but
            they do not need to be solved in this exact moment.
          </p>

          <p>
            A helpful way to sort it:
          </p>
          <ul>
            <li><strong>Immediate:</strong> needs action today</li>
            <li><strong>Important:</strong> matters, but can be scheduled</li>
            <li><strong>Emotional noise:</strong> feels heavy, but does not require immediate action</li>
          </ul>

          <p>
            This step matters because overwhelm often comes from treating all
            three categories like they are the same.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 3: Choose one next step, not ten
          </h2>
          <p>
            When you are overwhelmed, the goal is not to build the perfect life
            plan in one afternoon. The goal is to choose the next right step.
          </p>

          <p>
            Ask:
            <strong> What is the one action that would create the most relief, clarity, or momentum right now?</strong>
          </p>

          <p>Examples:</p>
          <ul>
            <li>Send the one email you have been avoiding</li>
            <li>Call to confirm an appointment</li>
            <li>Write down your bills instead of panicking about them</li>
            <li>Text someone you trust and let them know you are having a hard day</li>
            <li>Clean one surface so your environment feels less chaotic</li>
          </ul>

          <p>
            Often, progress begins when you stop trying to carry everything at once.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Step 4: Let structure reduce stress
          </h2>
          <p>
            One reason people stay overwhelmed is because everything remains in
            their head. Structure creates relief. When tasks are written down,
            placed on a calendar, or broken into parts, life becomes more workable.
          </p>

          <p>
            Structure can look like:
          </p>
          <ul>
            <li>A short daily checklist</li>
            <li>A morning reset routine</li>
            <li>A weekly plan for appointments and priorities</li>
            <li>A set time to respond to messages instead of reacting all day</li>
          </ul>

          <p>
            You do not need to become a different person overnight. You just need
            a few simple systems that help your life feel more held together.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What to remember when you are overwhelmed
          </h2>
          <ul>
            <li>You do not have to solve everything today.</li>
            <li>You are allowed to slow down before making decisions.</li>
            <li>Clarity usually comes after regulation, not before it.</li>
            <li>Small steps count, especially when life feels heavy.</li>
            <li>Support is not weakness. It is often the turning point.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports people who are working to rebuild
            stability, confidence, and forward movement. Whether someone is
            navigating mental health challenges, life transition, or a season of
            emotional overload, support matters.
          </p>

          <ul>
            <li>Workshops that build practical coping skills</li>
            <li>Supportive structure for individuals and families</li>
            <li>Community-centered guidance that helps people regain momentum</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              If your organization is looking for support, workshops, or community-centered mental health resources, contact Pathway Humanity
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>
            <p style={{ marginTop: "0.5rem" }}>
              In the U.S., call or text <strong>988</strong> to reach the Suicide &amp; Crisis Lifeline.
              If there is immediate danger, call 911. Stay with the person if it is safe to do so
              and seek emergency help.
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