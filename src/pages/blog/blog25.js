import React from "react";
import Head from "next/head";
import MainNavbar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { Container } from "reactstrap";
import Link from "next/link";

export default function DigitalLiteracyAndWorkforceReadiness() {
  const title =
    "Digital Literacy: Preparing Youth and Adults for Today’s Workforce";
  const desc =
    "Digital literacy helps youth and adults build confidence, access employment opportunities, communicate professionally, and navigate an increasingly technology-driven workforce.";

  return (
    <>
      <Head>
        <title>{title} | Pathway Humanity</title>

        <meta name="description" content={desc} />

        <meta
          name="keywords"
          content="digital literacy, workforce readiness, technology skills, job readiness, youth employment, career development, computer skills, professional development, Pathway Humanity"
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
          style={{
            fontSize: "2.5rem",
            lineHeight: "1.3",
            color: "#fff",
          }}
        >
          {title}

          <span
            style={{
              display: "block",
              fontSize: "1.15rem",
              opacity: 0.9,
              marginTop: "0.75rem",
            }}
          >
            Technology skills are no longer optional. They are part of how
            people learn, work, communicate, and create opportunities.
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
            Technology has become part of nearly every stage of the employment
            process. People use digital tools to search for jobs, create
            resumes, submit applications, attend interviews, communicate with
            employers, complete training, and perform daily workplace tasks.
          </p>

          <p>
            For people who have not had consistent access to technology,
            navigating these responsibilities can feel overwhelming. A lack of
            digital experience can become a barrier even when someone has the
            motivation, talent, and willingness to work.
          </p>

          <p>
            At Pathway Humanity, we believe digital literacy is an important
            part of workforce development. When people understand how to use
            technology confidently and responsibly, they gain greater access to
            education, employment, resources, and long-term opportunity.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            What is digital literacy?
          </h2>

          <p>
            Digital literacy is the ability to use technology to find
            information, communicate, solve problems, complete tasks, and make
            informed decisions.
          </p>

          <p>
            It includes more than knowing how to use a phone or browse social
            media. Workplace digital literacy may involve:
          </p>

          <ul>
            <li>Using computers, tablets, and mobile devices</li>
            <li>Creating and managing an email account</li>
            <li>Writing professional emails and messages</li>
            <li>Completing online employment applications</li>
            <li>Creating and updating a digital resume</li>
            <li>Participating in virtual meetings and interviews</li>
            <li>Using workplace scheduling and communication platforms</li>
            <li>Protecting personal information online</li>
            <li>Evaluating whether online information is trustworthy</li>
          </ul>

          <p>
            These skills may appear simple to someone who uses technology every
            day, but they can be significant obstacles for people who have not
            received support or hands-on instruction.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Why digital skills matter in the workforce
          </h2>

          <p>
            Many employers expect candidates to complete the entire hiring
            process online. Applications, assessments, background checks,
            onboarding documents, scheduling, and workplace communication may
            all happen through digital platforms.
          </p>

          <p>
            Without basic technology skills, qualified candidates may struggle
            to complete an application, upload documents, respond to an
            employer, or attend a virtual interview.
          </p>

          <p>
            Digital literacy helps remove those barriers. It allows people to
            participate more fully in the employment process and present
            themselves with greater confidence and professionalism.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Technology access and technology confidence are different
          </h2>

          <p>
            Having access to a smartphone does not always mean someone feels
            comfortable using workplace technology.
          </p>

          <p>
            A person may know how to text, use social media, and watch videos,
            but still feel uncertain about creating a resume, managing files,
            using a spreadsheet, joining a video meeting, or communicating with
            an employer.
          </p>

          <p>
            That is why digital literacy programs should provide practical,
            hands-on experience. People need space to ask questions, make
            mistakes, practice skills, and learn without embarrassment or
            judgment.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Digital literacy can build confidence
          </h2>

          <p>
            Learning technology is not only about completing tasks. It can also
            help people feel more independent and prepared.
          </p>

          <p>
            When someone learns how to create an email, submit an application,
            build a resume, or participate in a virtual interview, they begin to
            see that they are capable of navigating systems that once felt
            intimidating.
          </p>

          <p>
            That confidence can carry into other areas of life, including
            education, financial management, communication, and personal goal
            setting.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Essential digital skills for job seekers
          </h2>

          <p>
            Digital workforce readiness can begin with a few foundational
            skills.
          </p>

          <ul>
            <li>
              Creating a professional email address and checking it regularly
            </li>

            <li>
              Writing clear and respectful messages to employers
            </li>

            <li>
              Creating a resume using a computer or online document platform
            </li>

            <li>
              Saving, naming, uploading, and attaching documents correctly
            </li>

            <li>
              Searching for legitimate employment opportunities online
            </li>

            <li>
              Completing online applications accurately and completely
            </li>

            <li>
              Preparing for video interviews and virtual meetings
            </li>

            <li>
              Using calendars, reminders, and scheduling tools
            </li>

            <li>
              Recognizing scams and protecting sensitive information
            </li>
          </ul>

          <p>
            These skills help job seekers remain organized, responsive, and
            prepared throughout the hiring process.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Preparing young people for a changing economy
          </h2>

          <p>
            Young people are entering a workforce where technology continues to
            change quickly. Even jobs that were once considered primarily
            hands-on may now require digital scheduling, online training,
            inventory systems, mobile applications, or electronic
            communication.
          </p>

          <p>
            Youth workforce programs can help young people prepare by giving
            them early exposure to the tools they may encounter in employment.
          </p>

          <p>
            This can include resume development, online job searches, email
            etiquette, digital portfolios, interview practice, basic coding,
            content creation, workplace software, and responsible use of
            artificial intelligence.
          </p>

          <p>
            The goal is not to prepare youth for one specific platform. The goal
            is to help them become adaptable, curious, and confident when
            learning new technology.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Responsible use of artificial intelligence
          </h2>

          <p>
            Artificial intelligence tools are becoming more common in
            education, job searches, business, and everyday communication.
            These tools can help people brainstorm, organize information,
            improve writing, and learn new concepts.
          </p>

          <p>
            However, users still need critical thinking skills. Information
            generated by technology should be reviewed for accuracy, relevance,
            privacy, and appropriate use.
          </p>

          <p>
            Digital literacy includes understanding that technology can be
            helpful without assuming that every answer it provides is correct.
            People should learn how to use digital tools as support while still
            applying their own judgment and voice.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            Digital safety is part of workforce readiness
          </h2>

          <p>
            As people spend more time online, it is important to understand how
            to protect personal information.
          </p>

          <p>
            Job seekers should be cautious about employment scams, suspicious
            links, requests for money, and employers asking for sensitive
            information too early in the hiring process.
          </p>

          <p>Helpful digital safety habits include:</p>

          <ul>
            <li>Using strong and unique passwords</li>
            <li>Avoiding suspicious links and attachments</li>
            <li>Confirming that an employer or organization is legitimate</li>
            <li>Protecting Social Security and banking information</li>
            <li>Using secure internet connections when possible</li>
            <li>Reviewing privacy settings on accounts and devices</li>
            <li>Logging out of shared or public computers</li>
          </ul>

          <p>
            Digital confidence should always be paired with digital
            responsibility.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            How organizations can support digital inclusion
          </h2>

          <p>
            Schools, employers, nonprofits, libraries, and community
            organizations can help close the digital skills gap by making
            technology education more accessible.
          </p>

          <p>Support can include:</p>

          <ul>
            <li>Providing access to computers and reliable internet</li>
            <li>Offering beginner-friendly technology workshops</li>
            <li>Helping participants create resumes and email accounts</li>
            <li>Providing practice with online applications</li>
            <li>Offering mock virtual interviews</li>
            <li>Teaching digital safety and privacy</li>
            <li>Connecting participants with ongoing training resources</li>
          </ul>

          <p>
            The most effective programs meet people where they are. They avoid
            assumptions and provide support based on each participant’s current
            experience and goals.
          </p>

          <h2
            className="mt-4 mb-3"
            style={{ fontSize: "1.7rem" }}
          >
            How Pathway Humanity can help
          </h2>

          <p>
            Pathway Humanity supports individuals and communities through
            workforce development, mentorship, education, emotional wellness,
            and practical skill-building programs.
          </p>

          <p>
            Our goal is to help people build the confidence, knowledge, and
            support systems needed to move toward greater stability and
            opportunity.
          </p>

          <p>
            Digital literacy and workforce readiness programming may include:
          </p>

          <ul>
            <li>Basic computer and technology instruction</li>
            <li>Email setup and professional communication</li>
            <li>Resume and cover letter development</li>
            <li>Online job search and application support</li>
            <li>Virtual interview preparation</li>
            <li>Digital safety and privacy education</li>
            <li>Career exploration and professional development</li>
            <li>Youth mentorship and technology workshops</li>
          </ul>

          <p className="mt-3">
            <Link
              href="/contact"
              style={{
                color: "#20c997",
                textDecoration: "underline",
              }}
            >
              If your school, organization, or community group is interested in
              digital literacy or workforce readiness programming, contact
              Pathway Humanity
            </Link>
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />

          <details>
            <summary>
              <strong>A reminder for people learning technology</strong>
            </summary>

            <p style={{ marginTop: "0.5rem" }}>
              You do not need to learn everything at once. Digital confidence
              develops through practice. Every new skill makes the next step
              easier.
            </p>
          </details>

          <p
            className="mt-4"
            style={{
              fontSize: "0.95rem",
              opacity: 0.85,
            }}
          >
            This post is for educational and informational purposes and is
            intended to support digital inclusion, workforce readiness, and
            community education.
          </p>
        </article>
      </Container>

      <Footer />
    </>
  );
}