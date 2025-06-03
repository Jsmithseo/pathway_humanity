import React from "react";
import Head from "next/head";
import MainNavbar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";



const posts = [
    {
      id: 1,
      title: "The top 10 negative self - talk barriers leading to performance plateaus and how to overcome them.",
      excerpt: "Discover techniques for building mental resilience and reframing negative thoughts in competitive environments.",
      slug: "/blog/blog1"
      
    },
    {
        id: 2,
        title: "The #1 Thing Holding Back Youth Soccer Players (And It's Not What You Think)",
        excerpt: "Learn why awareness—not more training—is the key to unlocking your young athlete’s full potential on the field.",
        slug: "/blog/blog2"
      },
      {
        id: 3,
        title: "Stress, Emotions, and Coping in Youth Sports",
        excerpt: "Explore how mental stress impacts young athletes and why emotional regulation and coping strategies are essential for youth sports success.",
        slug: "/blog/blog3"
      },
      {
        id: 4,
        title: "Grit Mindset: Prioritizing Process, Strength, and Achievement",
        excerpt: "Most people chase the trophy without truly embracing the grind—yet real growth happens when you prioritize daily effort over instant success.",
        slug: "/blog/blog4"
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
      <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
   
        
        

      <Footer />
    </>
  );
}
