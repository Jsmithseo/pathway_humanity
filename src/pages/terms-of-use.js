import React from "react";
import Head from "next/head";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container } from "reactstrap";

export default function TermsOfUse() {
  return (
    <>
      <Head>
        <title>Terms of Use | Pathway Humanity</title>
      </Head>
      <MainNavBar />

      <Container className="py-5 text-white">
        <h1 className="mb-4">Terms of Use</h1>
        <p>
          Welcome to Pathway Humanity. By accessing or using our website, you agree to comply with and be bound by these Terms of Use.
        </p>

        <h2 className="mt-5">1. Use of Site</h2>
        <p>
          You may browse and use the site for lawful purposes only. Unauthorized use may give rise to a claim for damages.
        </p>

        <h2 className="mt-5">2. Intellectual Property</h2>
        <p>
          All content, logos, and trademarks on this site are the property of Pathway Humanity or its licensors. You may not reproduce or distribute any content without our written permission.
        </p>

        <h2 className="mt-5">3. Disclaimer of Warranties</h2>
        <p>
          The site is provided “as is” without warranties of any kind. We do not guarantee availability, accuracy, or error-free operation.
        </p>

        <h2 className="mt-5">4. Limitation of Liability</h2>
        <p>
          Pathway Humanity will not be liable for any damages arising from your use of the site to the fullest extent permitted by law.
        </p>

        <h2 className="mt-5">5. Changes to Terms</h2>
        <p>
          We may update these Terms periodically. Your continued use after changes constitutes acceptance of the new terms.
        </p>

        <h2 className="mt-5">6. Contact Information</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:info@pathwayhumanity.com">info@pathwayhumanity.com</a>.
        </p>
      </Container>

      <Footer />
    </>
  );
}
