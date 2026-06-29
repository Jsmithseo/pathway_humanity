import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function MensMentalHealthMonth() {
  const title =
    "Men’s Mental Health Month: Why Support, Honesty, and Community Matter";
  const desc =
    "Men’s Mental Health Month is a reminder that strength includes asking for help, building support systems, and creating space for honest conversations about emotional wellness.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>
        <meta name="description" content={desc} />
        <meta
          name="keywords"
          content="men's mental health month, mental health support for men, emotional wellness, men's wellness, community support, coping skills, depression, anxiety, Pathway Humanity"
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
            Strength is not silence. Strength is knowing when support is needed.
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
            Men’s Mental Health Month is an opportunity to have honest
            conversations about emotional wellness, stress, depression, anxiety,
            trauma, and the pressure many men feel to carry everything alone.
          </p>

          <p>
            For many men, asking for help can feel uncomfortable. Some were taught
            to stay quiet, push through pain, or avoid talking about emotions.
            But silence does not make stress disappear. It often makes it heavier.
          </p>

          <p>
            At Pathway Humanity, we believe mental health support should be
            practical, community-centered, and accessible. Men deserve spaces where
            they can be honest, supported, and encouraged without judgment.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Why men’s mental health matters
          </h2>

          <p>
            Mental health affects every part of life. It can shape how someone
            communicates, works, parents, builds relationships, handles conflict,
            and manages daily responsibilities.
          </p>

          <p>
            When men are struggling emotionally, it may not always look like sadness.
            It can show up as anger, isolation, exhaustion, substance use, avoidance,
            overworking, or feeling disconnected from family and community.
          </p>

          <p>
            That is why awareness matters. The more we talk about men’s mental health,
            the easier it becomes for men to recognize when they need support and
            take steps toward healing.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Silence can become a burden
          </h2>

          <p>
            Many men are used to being seen as providers, protectors, leaders, or
            problem-solvers. Those roles can be meaningful, but they can also create
            pressure to appear strong even when things are difficult.
          </p>

          <p>
            Over time, holding everything inside can lead to emotional burnout.
            People may start withdrawing from others, losing motivation, or feeling
            like they have to manage stress on their own.
          </p>

          <p>
            Real strength includes being honest about what is heavy. It includes
            reaching out, having hard conversations, and allowing trusted people to
            offer support.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Community can help men heal
          </h2>

          <p>
            Healing is not meant to happen in isolation. Supportive relationships
            can help men feel seen, heard, and less alone.
          </p>

          <p>
            Community support can come from many places:
          </p>

          <ul>
            <li>Family members who listen without judgment</li>
            <li>Friends who check in consistently</li>
            <li>Mentors who offer guidance and accountability</li>
            <li>Faith or community groups</li>
            <li>Support groups and wellness programs</li>
            <li>Professional counselors or mental health providers</li>
          </ul>

          <p>
            The important thing is not having a perfect support system. The important
            thing is having people and resources that help someone stay connected
            during difficult seasons.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Practical ways men can support their mental health
          </h2>

          <p>
            Mental health support does not always start with a major life change.
            Sometimes it starts with small, honest steps.
          </p>

          <ul>
            <li>Talk to someone you trust about what you are carrying</li>
            <li>Create a small daily routine that brings structure</li>
            <li>Move your body through walking, stretching, or exercise</li>
            <li>Limit isolation when stress feels heavy</li>
            <li>Pay attention to sleep, food, and substance use</li>
            <li>Write down what you are feeling instead of keeping it inside</li>
            <li>Reach out for professional support when needed</li>
          </ul>

          <p>
            Small steps matter because they create momentum. They remind people that
            support is available and change is possible.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            Supporting the men in our lives
          </h2>

          <p>
            Men’s Mental Health Month is not only for men. It is also a reminder for
            families, friends, workplaces, and communities to create safer spaces for
            honest conversations.
          </p>

          <p>
            Sometimes support starts with simple questions:
          </p>

          <ul>
            <li>How have you really been doing?</li>
            <li>What has been feeling heavy lately?</li>
            <li>Do you feel supported right now?</li>
            <li>Is there anything you need help carrying?</li>
            <li>Would it help to talk through what is going on?</li>
          </ul>

          <p>
            Listening without rushing to judge, fix, or dismiss someone can make a
            meaningful difference.
          </p>

          <h2 className="mt-4 mb-3" style={{ fontSize: "1.7rem" }}>
            How Pathway Humanity can help
          </h2>

          <p>
            Pathway Humanity supports individuals, families, and communities through
            education, mentorship, emotional wellness resources, and community-centered
            programming.
          </p>

          <p>
            Our work is focused on helping people build stability, connection, and
            healthier pathways forward. Men’s Mental Health Month is a reminder that
            support should be available before someone reaches a breaking point.
          </p>

          <ul>
            <li>Workshops focused on emotional wellness and coping skills</li>
            <li>Community-centered support for individuals and families</li>
            <li>Mentorship and positive relationship building</li>
            <li>Programs that encourage stability, healing, and personal growth</li>
          </ul>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{
                color: "#20c997",
                textDecoration: "underline",
              }}
            >
              If your organization is looking for workshops, support resources, or
              community-centered mental health programming, contact Pathway Humanity
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>If someone is in crisis</strong>
            </summary>

            <p style={{ marginTop: "0.5rem" }}>
              If someone is in immediate danger, call emergency services right away.
              If someone is experiencing a mental health crisis, reach out to a local
              crisis line, trusted support person, or emergency care provider.
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

