import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button } from "reactstrap";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Raising Awareness in Youth Soccer | ABC Mental Toughness</title>
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1 className="text-center mb-4">
          The #1 Thing Holding Back Youth Soccer Players
        </h1>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <div className="blog-content">

              <p><strong>Soccer Parents,</strong></p>

              <p>
                I get asked all the time, "What's the number one thing my young athlete can do to improve their game"? Well, I can tell you right now, it's not some crazy high intensity workout. It's not going to some elite ID camp. It's not more private, one-on-one skills training.
              </p>

              <p>
                Some of these things can certainly help, but after working at the club, college, professional, and international level, I can tell you that the number one way for your young athlete to improve is probably something you've never considered before.
              </p>

              <p><strong>Because what I've seen over and over is mistaking activity for progress.</strong></p>

              <p>
                More training, more skills camps, more private coaching.
              </p>

              <p>
                Here's the truth... It's not the volume of what they're doing that's going to change anything. If you look closely, you'll REALLY see what's holding them back. It's not fitness or speed. It's not defending, finishing, or passing. It's the hesitation. The constant guessing. The simple decisions that somehow turn complex. Their already small window is closing. Opportunities are passing.
              </p>

              <p>
                <strong>The number one way for your young athlete to improve is to raise their level of AWARENESS.</strong> Awareness starts it all. To see patterns. To use patterns. To create patterns. A young athlete's awareness, both of themselves and of their surroundings, is like a secret weapon for peak performance.
              </p>

              <p>
                There are subtle cues, and small actions and behaviors that they have to learn to function effectively on the field. Without awareness, they might struggle with decision-making, focus, and emotional regulation, especially under pressure.
              </p>

              <p>
                Today's player has not been taught how to positively respond to adversity, which means their first instinct is to avoid the exact challenges that are the bridge to their potential—to being able to act on their talent. In our soccer culture, every player ends up losing because they eventually find the environment that they cannot overcome on their own.
              </p>

              <hr className="my-5" />
              <div className="text-center">
                <h4>Want to develop your athlete’s awareness and mental edge?</h4>
                <p>Reach out to learn how ABC Mental Toughness can help unlock their full potential.</p>
                <Button color="primary" href="/contact">Contact Us</Button>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
