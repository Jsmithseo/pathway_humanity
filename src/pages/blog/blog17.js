// pages/blog/reset-your-nervous-system-simple-tools-for-stressful-days.js
import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function ResetYourNervousSystemSimpleToolsForStressfulDays() {
  const title = "Reset Your Nervous System: Simple Tools for Stressful Days";
  const desc =
    "When stress spikes, your brain needs simple, repeatable tools—not pressure. Here are practical resets for anxiety, overwhelm, and burnout, especially for young adults.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="stress management, anxiety tools, nervous system regulation, grounding techniques, burnout recovery, young adults, mental health support, Pathway Humanity"
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
            A practical set of resets you can use in real life—work, school, family stress, and everything in between.
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
            Some days, stress doesn’t feel like a thought—it feels like a full-body experience. Your chest is tight,
            your mind is racing, and even small tasks start to feel heavy. When that happens, “just be positive” isn’t
            helpful. Your nervous system doesn’t need motivation. It needs a reset.
          </p>

          <p>
            The goal isn’t to eliminate stress completely. The goal is to build a toolkit you can use when stress shows
            up—so you can calm down, regain clarity, and take the next right step.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            First, name what’s happening (this lowers intensity)
          </h2>
          <p>
            When you’re overwhelmed, your brain can interpret everything as urgent. A simple reframe helps:
            <strong> “My nervous system is activated. I’m not broken. I’m having a stress response.”</strong>
          </p>
          <p>
            This is powerful because it separates <em>you</em> from the moment. You’re not “failing.” You’re reacting
            to pressure—and pressure can be managed.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            The 60-second reset: breathe like you mean it
          </h2>
          <p>
            Try this for one minute:
          </p>
          <ul>
            <li>
              Inhale through your nose for <strong>4 seconds</strong>.
            </li>
            <li>
              Exhale slowly for <strong>6–8 seconds</strong>.
            </li>
            <li>
              Repeat <strong>5–8 cycles</strong>.
            </li>
          </ul>
          <p>
            Longer exhales send a “we’re safe” signal to your body. You don’t need perfect breathing—just slower out
            than in.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Grounding when anxiety is loud: the “5–4–3–2–1” method
          </h2>
          <p>
            When your mind jumps into worst-case scenarios, grounding pulls you back into the present:
          </p>
          <ul>
            <li>
              <strong>5</strong> things you can see
            </li>
            <li>
              <strong>4</strong> things you can feel (feet on the floor, hands on your legs)
            </li>
            <li>
              <strong>3</strong> things you can hear
            </li>
            <li>
              <strong>2</strong> things you can smell
            </li>
            <li>
              <strong>1</strong> thing you can taste (or one thing you’re grateful for)
            </li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Reduce the load: turn a “mountain” into a 10-minute task
          </h2>
          <p>
            Overwhelm often comes from trying to solve your whole life at once. Instead, cut the task down to a tiny
            unit of progress:
          </p>
          <ul>
            <li>
              “I’ll work on this for <strong>10 minutes</strong>, then reassess.”
            </li>
            <li>
              “I’ll do the <strong>first step only</strong> (open the laptop, write the first line, make the call).”
            </li>
            <li>
              “I’ll choose the <strong>next right action</strong>, not the perfect plan.”
            </li>
          </ul>
          <p>
            Tiny progress rebuilds confidence. Confidence makes the next step easier. That’s momentum.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            A quick “stability routine” you can repeat anywhere
          </h2>
          <p>
            Use this 5–7 minute routine when your day feels unstable:
          </p>
          <ul>
            <li>
              <strong>Water:</strong> drink a glass of water (or a few sips if you can’t).
            </li>
            <li>
              <strong>Body check:</strong> relax your shoulders, unclench your jaw, take one slow breath.
            </li>
            <li>
              <strong>Move:</strong> 10 squats or a 2-minute walk—anything to change your state.
            </li>
            <li>
              <strong>One priority:</strong> write down the one thing that matters most today.
            </li>
          </ul>
          <p>
            It’s not about being productive. It’s about returning to yourself.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Support is a strategy, not a weakness
          </h2>
          <p>
            If you’re carrying a lot—school pressure, work stress, family responsibilities, relationship issues—it’s
            normal to feel stretched thin. The strongest move is building support before things escalate:
          </p>
          <ul>
            <li>Talk to a trusted person and be specific about what you need.</li>
            <li>Join a group or community where you can be seen and encouraged.</li>
            <li>Use professional support (therapy, coaching, case management) when possible.</li>
          </ul>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>
          <p>
            Pathway Humanity supports individuals—especially young adults—through practical steps that build stability,
            confidence, and community. We focus on tools that work in real life, not just “good advice” that’s hard to
            apply.
          </p>
          <ul>
            <li>Guided check-ins that reduce isolation and help you stay on track.</li>
            <li>Skills workshops for coping tools, stress management, and resilience.</li>
            <li>Community partnerships that connect people to resources with less friction.</li>
          </ul>

          <p className="mt-3">
            <Link href="/contact" style={{ color: "#20c997", textDecoration: "underline" }}>
              Want Pathway Humanity to bring a stress reset workshop or support program to your organization? Contact us
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
