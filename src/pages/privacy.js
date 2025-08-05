import React from "react";
import Head from "next/head";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container } from "reactstrap";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Pathway Humanity</title>
      </Head>
      <MainNavBar />

      <Container className="py-5 text-white">
        <h1 className="mb-4">Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how Pathway Humanity collects, uses, discloses, and safeguards your information when you visit our website.
        </p>

        <h2 className="mt-5">Information We Collect</h2>
        <ul>
          <li>Personal data you voluntarily provide (e.g., name, email, resume).</li>
          <li>Usage data and cookies to improve site performance.</li>
        </ul>

        <h2 className="mt-5">How We Use Your Information</h2>
        <ul>
          <li>To process job applications and communicate with you.</li>
          <li>To personalize and enhance your experience on our site.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="mt-5">Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share information with third-party service providers who assist us in website operations, under strict confidentiality agreements.
        </p>

        <h2 className="mt-5">Your Choices</h2>
        <p>
          You can opt out of marketing communications at any time by contacting us at{" "}
          <a href="mailto:info@pathwayhumanity.com">infoy@pathwayhumanity.com</a>.
        </p>

        <h2 className="mt-5">Contact Us</h2>
        <p>
          If you have questions about this policy, please email us at{" "}
          <a href="mailto:info@pathwayhumanity.com">info@pathwayhumanity.com</a>.
        </p>
      </Container>

      <Footer />
    </>
  );
}
