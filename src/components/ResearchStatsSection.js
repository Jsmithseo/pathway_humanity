import React, { useEffect, useState } from "react";

function AnimatedNumber({ to, duration = 1500, decimals = 0, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = to;
    let range = end - start;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = start + range * progress;
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(step);
  }, [to, duration]);
  return (
    <span>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

export default function ResearchStatsSection() {
  return (
    <section className="research-section">
      <h2 className="research-title">What the Research Says</h2>
      <p className="research-desc">
        Measurement-Based Care is improving the lives of people in care and significantly enhancing clinical outcomes. Take a look for yourself:
      </p>
      <div className="research-cards">
        {/* Card 1 */}
        <div className="research-card stat-green">
          <div className="stat-top stat-bg-1">
            <span className="stat-number">
              <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8593;</span>
              <AnimatedNumber to={42} suffix="%" />
            </span>
          </div>
          <div className="stat-bottom stat-green-bottom">
            <div>
              <span className="stat-label">HIGHER OVERALL IMPROVEMENT IN CLINICAL SYMPTOMS</span>
            </div>
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="User 1" className="stat-img" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="research-card stat-red">
          <div className="stat-top stat-bg-2">
            <span className="stat-number" style={{ color: "#A11919" }}>
              <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8593;</span>
              <AnimatedNumber to={3.5} decimals={1} suffix="x" />
            </span>
          </div>
          <div className="stat-bottom stat-red-bottom">
            <div>
              <span className="stat-label">HIGHER LIKELIHOOD THAT A CLIENT EXPERIENCES RELIABLE CHANGE</span>
            </div>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 2" className="stat-img" />
          </div>
        </div>
        {/* Card 3 */}
        <div className="research-card stat-purple">
          <div className="stat-top stat-bg-3">
            <span className="stat-number" style={{ color: "#393B95" }}>
              <span style={{ fontSize: "2.1rem", marginRight: 4 }}>&#8595;</span>
              <AnimatedNumber to={40} suffix="%" />
            </span>
          </div>
          <div className="stat-bottom stat-purple-bottom">
            <div>
              <span className="stat-label">REDUCTION IN NO-SHOW & CANCELLATION RATES</span>
            </div>
            <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="User 3" className="stat-img" />
          </div>
        </div>
      </div>
      {/* ...Your existing CSS here... */}
      <style jsx>{`
        /* Paste the same CSS from the previous solution here */
        .research-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 80px 20px 60px 20px;
          text-align: center;
        }
        .research-title {
          font-size: 2.4rem;
          font-weight: 500;
          margin-bottom: 14px;
        }
        .research-desc {
          font-size: 1.18rem;
          color: #232323;
          max-width: 760px;
          margin: 0 auto 60px auto;
        }
        .research-cards {
          display: flex;
          gap: 36px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .research-card {
          background: #f7e6d1;
          border-radius: 0;
          flex: 1 1 340px;
          max-width: 350px;
          min-width: 250px;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 1px 10px rgba(0,0,0,0.04);
        }
        .stat-top {
          height: 130px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 2.7rem;
          font-weight: 600;
          padding-left: 32px;
          padding-top: 8px;
          background: #f7e6d1;
          color: #1a7c43;
        }
        .stat-bg-1 { background: #f7e6d1; }
        .stat-bg-2 { background: #e2e7f7; }
        .stat-bg-3 { background: #f7e6f7; }

        .stat-bottom {
          display: flex;
          align-items: flex-end;
          padding: 0;
        }
        .stat-green-bottom {
          background: #166943;
          color: #fff;
        }
        .stat-red-bottom {
          background: #A11919;
          color: #fff;
        }
        .stat-purple-bottom {
          background: #393B95;
          color: #fff;
        }
        .stat-label {
          display: block;
          font-size: 1.04rem;
          font-weight: 600;
          text-align: left;
          padding: 28px 0 22px 20px;
          max-width: 180px;
        }
        .stat-img {
          height: 86px;
          width: 86px;
          border-radius: 0;
          object-fit: cover;
          margin-left: auto;
        }
        /* Middle card overrides */
        .stat-red .stat-top {
          background: #e2e7f7;
          color: #A11919;
        }
        .stat-purple .stat-top {
          background: #f7e6f7;
          color: #393B95;
        }
        @media (max-width: 1100px) {
          .research-cards {
            gap: 22px;
          }
        }
        @media (max-width: 900px) {
          .research-cards {
            flex-direction: column;
            align-items: center;
            gap: 28px;
          }
          .research-card {
            max-width: 420px;
            width: 100%;
          }
          .stat-img { height: 62px; width: 62px; }
        }
      `}</style>
    </section>
  );
}
