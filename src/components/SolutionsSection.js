import React from 'react';

export default function SolutionsSection() {
  return (
    <section className="solutions-section">
      <h2 className="solutions-title">Solutions that Matter</h2>
      <p className="solutions-desc">
        Measurement-Based Care powers everything we do. Across all types of clinical settings, to the workplace or campus, our best-in-class technology strengthens the entire ecosystem of behavioral health services.
      </p>
      <div className="solutions-cards">
        <div className="solution-card intake rounded p-4">
          <h3>Client Intake</h3>
          <hr />
          <p>
            Intake and waitlist management, simplified. A custom platform that fits your organization’s workflow. Automate your intake process to remove procedural tasks and leverage client-reported data to prioritize care for those who need it most.
          </p>
          <a href="#" className="learn-more">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
        <div className="solution-card mbc rounded p-4">
          <h3>MBC Platform</h3>
          <hr />
          <p>
            Measurement-Based Care, easier than ever before. Capture high-quality data from clients throughout treatment to help inform clinical decision making, increase engagement, and improve outcomes.
          </p>
          <a href="#" className="learn-more">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
        <div className="solution-card pop-health rounded p-10">
          <h3>Population Health</h3>
          <hr />
          <p>
            Every resource, all in one place. A stepped-care hub for the campus, workplace, and more. Provide your community immediate access to wellness resources and care options. Leverage usage and outcome data to improve the support you offer.
          </p>
          <a href="#" className="learn-more">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        .solutions-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 70px 20px 50px 20px;
          text-align: center;
        }
        .solutions-title {
          font-size: 2.5rem;
          font-weight: 500;
          margin-bottom: 18px;
        }
        .solutions-desc {
          max-width: 700px;
          margin: 0 auto 60px auto;
          font-size: 1.18rem;
          color: #232323;
        }
        .solutions-cards {
          display: flex;
          gap: 34px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .solution-card {
          background: #fff;
          color: #fff;
          flex: 1 1 330px;
          max-width: 380px;
          min-width: 280px;
          padding: 38px 30px 32px 30px;
          border-radius: 0;
          box-shadow: 0 1px 10px rgba(0,0,0,0.05);
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 350px;
        }
        .solution-card.intake {
          background: #14C9D6;
        }
        .solution-card.mbc {
          background: #65B32E;
        }
        .solution-card.pop-health {
          background: #1C7ACB;
        }
        .solution-card h3 {
          font-size: 2rem;
          margin-bottom: 10px;
          font-weight: 400;
        }
        .solution-card hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.4);
          margin: 0 0 20px 0;
          width: 100%;
        }
        .solution-card p {
          color: #fff;
          font-size: 1.12rem;
          line-height: 1.58;
          margin-bottom: 35px;
        }
        .learn-more {
          color: #fff;
          font-weight: bold;
          font-size: 1.08rem;
          text-decoration: none;
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          transition: text-decoration 0.2s;
        }
        .learn-more:hover {
          text-decoration: underline;
        }
        .arrow {
          margin-left: 8px;
          font-size: 1.2em;
          transition: margin-left 0.15s;
        }
        .learn-more:hover .arrow {
          margin-left: 13px;
        }
        @media (max-width: 1100px) {
          .solutions-cards {
            gap: 22px;
          }
        }
        @media (max-width: 900px) {
          .solutions-cards {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }
          .solution-card {
            max-width: 420px;
          }
        }
      `}</style>
    </section>
  );
}
