import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";

export default function FearlessYoungAthlete() {
  return (
    <>
      <Head>
        <title>Chapter 1: The Fearless Young Athlete</title>
        <meta name="description" content="Tools and assignments to help young athletes overcome fear and build confidence." />
      </Head>

      <MainNavbar />

      <Container className="py-5 blog-content">
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h1 className="mb-4 text-center">Chapter 1: The Fearless Young Athlete</h1>

            <p>
              There are certain places a young athlete must go into to find success. There are some emotions you must surrender to,
              then be pulled into almost against your feelings. It will seem awkward at first, until your awareness grows.
              Belief is the code. Reflection is your path. You have to take control. Letting go is how you begin.
              Letting go of your fear.
            </p>

            <h2 className="mt-5">The Fearless Athlete</h2>
            <p>
              Before reading any more, please get a brand new notebook. This will become your success journal.
              In the following pages, chapters and worksheets you will find the tools to be successful on your journey.
              Stop here until you have your new journal. This is very important.
            </p>

            <h3 className="mt-4">Assignment Number 1</h3>
            <ol>
              <li>
                Open your journal to page 1. Write this question at the top of page 1:
                <strong> Why do you play your sport?</strong>
              </li>
              <li>
                Go to page 2. At the top, write:
                <strong> What made you want to get involved in your sport?</strong>
              </li>
              <li>
                Turn to page 3. Write:
                <strong> What are the reasons you still play/train/compete now?</strong>
              </li>
              <li>
                Page 4: Write:
                <strong> What do you like/dislike about your sport involvement?</strong>
              </li>
            </ol>
            <p>
              Once you’ve done this, give yourself a positive thought. You have begun your journey.
              As you write your ideas, remember: <em>Your answers are not as important as how you think.</em>
            </p>

            <h3 className="mt-4">Assignment Number 2</h3>
            <p>
              Over the next few hours or days, answer the questions as honestly as possible.
              Notice emotions and patterns as you prepare your answers.
              There are no wrong answers—just give it your best.
              Your focus follows your thoughts. You are on your way, and your answers will evolve with your focus.
            </p>

            <h2 className="mt-5">Understanding Fear in Sports</h2>
            <p>
              Fear is a natural response to uncertainty and high stakes. Fears arise when you encounter the unknown.
              There are two types of fears:
            </p>
            <ul>
              <li><strong>Rational Fears:</strong> Thoughts of pain, injury, or safety.</li>
              <li><strong>Irrational Fears:</strong> Fears of failure, losing, judgment, or letting others down.</li>
            </ul>
            <p>
              These fears can either block you or fuel your motivation. The fears themselves aren’t the problem;
              how you respond to them is.
            </p>

            <h2 className="mt-5">Becoming a Fearless Young Athlete</h2>
            <p>
              Fearless athletes embrace challenges rather than avoid them. See the fear, feel the pressure,
              then view it as a chance to grow. Tell yourself <em>"I can do this."</em>
              Daily practice builds control, preparation, and confidence.
              The biggest source of fear is the unknown.
            </p>

            <h2 className="mt-5">Why Overcome Your Fears?</h2>
            <ul>
              <li>Fear is the source of negative self-talk.</li>
              <li>Fear increases feelings of pressure.</li>
              <li>Fear creates tension that hinders your skills.</li>
            </ul>
            <p>
              Fearlessness offers advantages both on and off the field.
              It’s not about no fear—it’s about pushing forward despite it.
              You will seek challenges as opportunities to grow,
              make better decisions, bounce back from setbacks,
              and become stronger with a growth mindset.
            </p>

            <h2 className="mt-5">Reflect & Grow</h2>
            <p>
              Revisit your first four journal questions. Write more about your thoughts, feelings, and fears.
              Notice how this document grows alongside you. Give yourself a positive thought—you’ve got this.
            </p>

            <hr className="my-5" />
              <div className="text-center">
                <h4>Want to build resilience in your young athlete?</h4>
                <p>Reach out to learn how ABC Mental Toughness can support their growth.</p>
                <Button color="primary" href="/contact">Contact Us</Button>
              </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
