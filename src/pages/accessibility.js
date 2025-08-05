import React from "react";
import Head from "next/head";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container } from "reactstrap";

export default function Accessibility() {
  return (
    <>
      <Head>
        <title>Accessibility | Pathway Humanity</title>
      </Head>
      <MainNavBar />

      <Container className="py-5 text-white">
        <h1 className="mb-4">Accessibility Statement</h1>
        <p>
          Pathway Humanity is committed to ensuring digital accessibility for people with disabilities. We continually strive to improve the user experience for everyone and apply the relevant accessibility standards.
        </p>
        <h2 className="mt-5">Measures to support accessibility</h2>
        <ul>
          <li>Include clear headings and semantic HTML.</li>
          <li>Provide alt text for all meaningful images.</li>
          <li>Ensure sufficient color contrast throughout the site.</li>
          <li>Enable keyboard navigation for all interactive elements.</li>
          <li>Use ARIA roles and attributes where appropriate.</li>
        </ul>
        <h2 className="mt-5">Feedback</h2>
        <p>
          If you encounter any barriers to accessing content on our website, please contact us at{" "}
          <a href="mailto:info@pathwayhumanity.com">info@pathwayhumanity.com</a> so we can address the issue.
        </p>
      </Container>

      <Footer />
    </>
  );
}
