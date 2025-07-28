import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardImg } from "reactstrap";

const posts = [
  {
    id: 1,
    title: "The top 10 negative self - talk barriers leading to performance plateaus and how to overcome them.",
    excerpt: "Discover techniques for building mental resilience and reframing negative thoughts in competitive environments.",
    slug: "/blog/blog1",
    image: "/images/blog1.jpg" // Add your blog image here
  },
  {
    id: 2,
    title: "The #1 Thing Holding Back Youth Soccer Players (And It's Not What You Think)",
    excerpt: "Learn why awareness—not more training—is the key to unlocking your young athlete’s full potential on the field.",
    slug: "/blog/blog2",
    image: "/images/blog2.jpg"
  },
  {
    id: 3,
    title: "Stress, Emotions, and Coping in Youth Sports",
    excerpt: "Explore how mental stress impacts young athletes and why emotional regulation and coping strategies are essential for youth sports success.",
    slug: "/blog/blog3",
    image: "/images/blog3.jpg"
  },
  {
    id: 4,
    title: "Grit Mindset: Prioritizing Process, Strength, and Achievement",
    excerpt: "Most people chase the trophy without truly embracing the grind—yet real growth happens when you prioritize daily effort over instant success.",
    slug: "/blog/blog4",
    image: "/images/blog4.jpg"
  },
  {
    id: 5,
    title: "Chapter 1: The Fearless Young Athlete",
    excerpt: "A fearless young athlete learns to surrender emotions, embrace self-reflection, and let go of fear. Use these hands-on assignments to build confidence, overcome mental barriers, and thrive both on and off the field.",
    slug: "/blog/blog5",
    image: "/images/blog5.jpg"
  },
  {
    id: 6,
    title: "Chapter 2: The Fearless Young Athlete",
    excerpt: "Fear isn’t the enemy—inactivity is. In this chapter, young athletes learn to understand, manage, and transform fear into fuel. Includes a powerful personal story and a guided journaling assignment to help athletes reconnect with their WHY.",
    slug: "/blog/blog6",
    image: "/images/blog6.jpg"
  },
  {
    id: 7,
    title: "Tips for Tryouts: How to Stand Out and Make the Team",
    excerpt: "Have you ever been in a situation where you desperately wanted to make a team, but you had to go through a grueling tryout period? In the tryout, you are accompanied by 40 or 50 players with the exact same goal.",
    slug: "/blog/blog7",
    image: "/images/blog7.jpg"
  },
  {
    id: 8,
    title: "R.A.C.E. Formula for Mental Toughness",
    excerpt: "Discover the R.A.C.E. Formula — a proven method for building mental toughness in athletes and performers. Learn how to overcome mental blocks, silence negative thoughts, and unlock your ideal performance state.",
    slug: "/blog/blog8",
    image: "/images/blog8.jpg"
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ABC Mental Toughness</title>
      </Head>
      <MainNavbar />
      <Container className="py-5">
        <h1 className="text-center mb-4">ABC Mental Toughness Blog</h1>
        <Row>
          {posts.map((post) => (
            <Col md="4" className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm">
                {post.image && <CardImg top width="100%" src={post.image} alt={post.title} />}
                <CardBody>
                  <CardTitle tag="h5">{post.title}</CardTitle>
                  <CardText>{post.excerpt}</CardText>
                  <Button color="primary" href={post.slug}>Read More</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
