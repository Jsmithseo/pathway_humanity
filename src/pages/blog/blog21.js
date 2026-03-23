// pages/blog/the-2-minute-bridge.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function The2MinuteBridge() {
  const title = "The 2-Minute Bridge: A Small Habit That Breaks Avoidance";
  const desc =
    "When you’re stuck in procrastination, anxiety, or shutdown, you don’t need a big plan—you need a bridge. This simple 2-minute routine helps you start, lower overwhelm, and build momentum one small step at a time.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="avoidance, procrastination, anxiety, small habits, momentum, recovery support, young adults, nervous system, coping skills, Pathway Humanity"
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
            A low-pressure way to start when your brain says, “not today.”
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
            There’s a specific kind of stuck that feels like you’re glued to the floor.
            You know what you should do—send the email, make the call, clean your space,
            apply for the job, show up—but your body feels like it’s resisting.
          </p>

          <p>
            That’s not laziness. That’s often <strong>avoidance</strong>—your nervous system trying
            to protect you from discomfort, shame, or fear.
          </p>

          <p>
            When you’re in that state, long to-do lists and “just be disciplined” advice can
            actually make things worse. Instead, you need a bridge: a tiny action that lowers
            the threat level and makes starting feel possible.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why the first 2 minutes matter
          </h2>
          <p>
            The beginning is the hardest part because your brain is predicting pain:
            “This is going to be hard. I’ll fail. I’m behind. People will judge me.”
            The prediction creates tension, and the tension creates avoidance.
          </p>

          <p>
            A 2-minute bridge works because it flips the question from{" "}
            <em>“Can I finish this?”</em> to <em>“Can I just begin?”</em>
            You’re not proving you can change your whole life—you’re proving you can move.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            The 2-Minute Bridge (step-by-step)
          </h2>
          <p>
            Set a timer for 2 minutes. The only rule is: <strong>stop when the timer ends</strong>
            (unless you naturally want to keep going). This keeps your brain from panicking.
          </p>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            Step 1: Name the “wall” (10 seconds)
          </h3>
          <ul>
            <li>
              Say it out loud or write it: <strong>“I’m avoiding ____ because ____.”</strong>
            </li>
            <li>
              Examples: “because I’m scared of rejection,” “because I feel behind,” “because
              I don’t know where to start.”
            </li>
          </ul>
          <p>
            Naming it reduces the fog. You’re turning an invisible threat into a specific, workable problem.
          </p>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            Step 2: Make it smaller (20 seconds)
          </h3>
          <p>
            Ask: <strong>“What’s the smallest version of this task?”</strong> Not the “best” version—just the smallest.
          </p>
          <ul>
            <li>Open the laptop (not “finish the application”).</li>
            <li>Find the document (not “write the whole essay”).</li>
            <li>Write one sentence (not “make it perfect”).</li>
            <li>Put shoes on (not “go run 3 miles”).</li>
          </ul>

          <h3 className="mt-4 mb-2" style={{ fontSize: "1.25rem" }}>
            Step 3: Do the smallest action (2 minutes)
          </h3>
          <p>
            Then do exactly one tiny action until the timer ends. Examples:
          </p>
          <ul>
            <li>Write the first line of the email.</li>
            <li>Make the subject line.</li>
            <li>Put three items away.</li>
            <li>Search for one resource / one phone number.</li>
            <li>Text someone: “Can you help me with ____?”</li>
          </ul>

          <p>
            When the timer ends, you win. If you continue, it’s because you choose to—not because you’re forcing yourself.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            What to do when you still don’t want to start
          </h2>
          <p>
            If even 2 minutes feels too hard, your system might be overloaded. Try this quick adjustment:
          </p>
          <ul>
            <li>
              Do <strong>3 slow breaths</strong> (in 4, out 6) and relax your shoulders.
            </li>
            <li>
              Change your environment: stand up, step outside, or move to a different room.
            </li>
            <li>
              Lower the bar again: make the goal <strong>30 seconds</strong>.
            </li>
          </ul>
          <p>
            The goal is not to “fix yourself.” The goal is to reduce resistance enough to move.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why this matters for recovery and stability
          </h2>
          <p>
            In recovery, transition, or any season of rebuilding, avoidance can become a cycle:
            overwhelm → shutdown → guilt → more overwhelm. The bridge interrupts that loop.
          </p>

          <ul>
            <li>
              It builds self-trust: <strong>“I do what I say I’ll do—small or big.”</strong>
            </li>
            <li>
              It reduces shame because the win is achievable.
            </li>
            <li>
              It creates momentum, and momentum changes identity.
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—who are rebuilding stability.
            We help people move from survival mode into steady momentum through structure, accountability,
            and real community resources.
          </p>
          <ul>
            <li>Guided check-ins that reduce isolation and increase follow-through.</li>
            <li>Workshops on coping skills, resilience, and life structure.</li>
            <li>Connections to trusted partners for housing, employment, and support.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want Pathway Humanity to bring a resilience + habit-building workshop to your organization? Contact us
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