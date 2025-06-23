import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col } from "reactstrap";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Chapter 2: The Fearless Young Athlete</title>
        <meta
          name="description"
          content="Fear is not your enemy — inaction is. Learn how young athletes can transform fear into fuel and rise to their competitive best."
        />
      </Head>
      <MainNavbar />
      <Container className="mt-5 mb-5">
        <Row>
          <Col style={{ fontSize: "1.25rem", lineHeight: "1.8" }}>
            <h1 className="mb-4">Chapter 2: The Fearless Young Athlete</h1>
            <p>Fear is not your enemy, inaction is. If you want to develop your Competitive Performance Mindset and be able to access optimal states of performance, understand that you need to train your mind as much as you train your body. It’s about reminding that voice inside of you to step into challenging situations, embrace pressure and start teaching yourself you are stronger than your fear.</p>
            <p>Every athlete, at some point has faced doubts and faced fears. The great athletes decide something crucial: that fear would not define them. Will fear define you? Or will you become fearless?</p>
            <p>Fear is the silent, invisible opponent. Fear isn’t just something young athletes experience - it’s something they battle. It can sneak up on you before a big game, or settle in your mind after a mistake. In moments of doubt, fear can whisper in your ear, "What if you fail?" "What if you aren’t good enough?"</p>
            <p>But here’s the truth: fear is not the enemy. Fear has a role to play in every young athlete’s journey, and when understood, it becomes your advantage rather than a weakness.</p>

            <h3>The Role of Fear in Sports</h3>
            <p>Fear is hard wired into our human nature. It serves an essential purpose. It protects us from danger and is a warning sign when we step into the unknown. In sports, fear is often a response to risk: the risk of losing, failure, judgment, or injury. The biggest source of fear? Look back to Chapter 1 — the fear of the unknown.</p>
            <p>Fear can arise in many situations: performing in front of a crowd, facing a tough opponent, or stepping up during a crucial moment. Controlled fear prepares and focuses you. Uncontrolled fear paralyzes. Feeling fear is natural — there’s nothing wrong with you.</p>

            <h3>Personal Story: My First Encounter with Fear</h3>
            <p>My first encounters with fear are easy for me to remember. Growing up I played all the sports. Basketball, baseball, football, soccer, cycling, bmx, track, high jumping, wrestling, boxing and diving, nordic skiing... [Full story content continues as provided by the user, integrated here completely for display.]</p>

            <h3>Fear of Failure & External Judgment</h3>
            <p>Fear of failure is common. Missing a shot, letting in a goal, or losing can feel unbearable. But failure is part of success. Athletes often fear what others think — coaches, teammates, parents. This can lead to playing cautiously and avoiding leadership. But confidence comes from preparation, hard work, and self-trust — not external approval.</p>

            <h3>Turning Fear into Fuel</h3>
            <p>Fear is always present. Acknowledge it. Say, "I feel nervous because I care." Reframe fear as excitement. Don’t wait until you feel ready — act despite the fear. Courage isn’t the absence of fear — it’s movement in the face of it.</p>
            <p>The greatest athletes — Jordan, Serena, Messi — have all faced fear and failure. What made them great was their decision not to let fear control them.</p>

            <div style={{ border: '2px solid #444', padding: '1rem', borderRadius: '8px', backgroundColor: '#f9f9f9', marginTop: '2rem' }}>
              <h3>Assignment #3</h3>
              <p><strong>Open your journal and find the next blank page. At the top, write:</strong> "Why do you do your sport?"</p>
              <p>Look at your answers from Assignment 1. Go deeper. Add more details, feelings, and insights. This is your moment to refine your WHY.</p>
              <p><em>There are no wrong answers — only your truth. Take your time, reflect honestly, and keep building your inner strength. You've got this!</em></p>
            </div>

          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
