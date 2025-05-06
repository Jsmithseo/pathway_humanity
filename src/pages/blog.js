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
