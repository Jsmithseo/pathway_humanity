import React from 'react';

export default function ClientsAndPatientsSection() {
  return (
    <section className="clients-patients-section">
      <div className="left">
        <span className="subtitle">MEASUREMENT-BASED CARE FOR...</span>
        <h2>Clients and Patients</h2>
        <p>
          The more engaged a person is in their care process, the more likely they are to improve.
          Our solutions allow clients, patients and people to track symptom changes and visualize their results,
          empowering them to better understand their mental health and collaborate throughout the care process.
        </p>
        <a className="learn-link" href="#">Learn More <span className="arrow">→</span></a>
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="right">
        <div className="image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
            alt="Clients and Patients"
            className="main-img"
          />
          <div className="at-risk">
            <span className="label">AT RISK PATIENTS</span>
            <span className="number">3</span>
          </div>
          <div className="therapist-note">
            <div className="therapist-pic">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Therapist"
              />
            </div>
            <div className="note-text">
              <span className="note-label">THERAPIST NOTE</span>
              <p>
                Based on your assessment response this week, it looks like you experienced increased anxiety around social events. Do you want to talk about that?
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .clients-patients-section {
          display: flex;
          min-height: 520px;
          background: #f6ebdb;
          justify-content: space-between;
          align-items: stretch;
          width: 100%;
        }
        .left {
          flex: 1.2;
          padding: 64px 48px 48px 7vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .subtitle {
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-size: 0.92rem;
          color: #232323;
          font-weight: 500;
          margin-bottom: 22px;
        }
        .left h2 {
          font-size: 2.6rem;
          font-weight: 500;
          margin-bottom: 22px;
          color: #232323;
        }
        .left p {
          font-size: 1.18rem;
          line-height: 1.5;
          color: #232323;
          margin-bottom: 34px;
          max-width: 570px;
        }
        .learn-link {
          color: #1a7c43;
          font-weight: bold;
          font-size: 1.15rem;
          text-decoration: none;
          margin-bottom: 32px;
          display: inline-flex;
          align-items: center;
          transition: text-decoration 0.2s;
        }
        .learn-link:hover {
          text-decoration: underline;
        }
        .arrow {
          margin-left: 8px;
          font-size: 1.25em;
        }
        .carousel-dots {
          display: flex;
          gap: 7px;
          margin-top: auto;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          background: #c5d2b7;
        }
        .dot.active {
          background: #1a7c43;
        }

        .right {
          flex: 1.3;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: #fff;
          padding: 0;
        }
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-height: 520px;
        }
        .main-img {
          width: 100%;
          max-width: 550px;
          height: 520px;
          object-fit: cover;
          border-radius: 0;
          margin-right: 0;
        }
        .at-risk {
          position: absolute;
          top: 28px;
          left: 38px;
          background: #1a7c43;
          padding: 19px 33px 14px 20px;
          border-radius: 0 0 12px 0;
          color: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
        }
        .at-risk .label {
          font-size: 0.95rem;
          font-weight: 400;
          letter-spacing: 0.7px;
          display: block;
          margin-bottom: 5px;
          text-transform: uppercase;
          opacity: 0.92;
        }
        .at-risk .number {
          font-size: 2.3rem;
          font-weight: 600;
        }
        .therapist-note {
          position: absolute;
          bottom: 32px;
          left: 170px;
          background: #fff;
          padding: 16px 25px 16px 68px;
          border-radius: 8px;
          min-width: 310px;
          box-shadow: 0 2px 14px rgba(100,100,100,0.11);
          display: flex;
          align-items: flex-start;
        }
        .therapist-pic {
          position: absolute;
          left: -50px;
          top: 14px;
          width: 54px;
          height: 54px;
          border-radius: 7px;
          overflow: hidden;
          background: #eee;
          border: 2px solid #fff;
          box-shadow: 0 1px 8px rgba(0,0,0,0.08);
        }
        .therapist-pic img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .note-text {
          margin-left: 18px;
        }
        .note-label {
          font-size: 0.98rem;
          color: #1a7c43;
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
        }
        .note-text p {
          margin: 0;
          color: #232323;
          font-size: 1.07rem;
        }
        @media (max-width: 1100px) {
          .left { padding-left: 3vw; }
          .main-img { max-width: 420px; height: 380px; }
          .image-wrapper { min-height: 380px; }
        }
        @media (max-width: 900px) {
          .clients-patients-section {
            flex-direction: column;
          }
          .left, .right {
            flex: 1 1 100%;
            padding: 38px 8vw 24px 8vw;
          }
          .image-wrapper {
            justify-content: center;
            min-height: 290px;
          }
          .main-img {
            max-width: 100vw;
            height: 230px;
          }
          .at-risk {
            top: 12px; left: 20px; padding: 10px 18px 8px 13px;
          }
          .therapist-note {
            bottom: 10px; left: 60px; min-width: 220px; padding: 12px 13px 12px 55px;
          }
          .therapist-pic { left: -40px; top: 9px; width: 38px; height: 38px; }
        }
      `}</style>
    </section>
  );
}
