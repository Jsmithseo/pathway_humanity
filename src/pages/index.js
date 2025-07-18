import MainNavBar from '../components/MainNavBar';
import SolutionsSection from '../components/SolutionsSection';
import ClientsAndPatientsSection from "../components/ClientsAndPatientsSection";
import ResearchStatsSection from "../components/ResearchStatsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <MainNavBar />

      <section className="hero">
        <div className="hero-content">
          <h1>Pathway Humanity: Nurturing Well-being and Empowering Futures</h1>
          <p>Pathway Humanity is a dedicated social purpose corporation committed to providing comprehensive mental illness and substance use disorder treatment.</p>
          <a className="btn" href="#">Learn More</a>
        </div>
      </section>
      <SolutionsSection/>
      <ClientsAndPatientsSection/>
      <ResearchStatsSection/>





      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; }
        a { text-decoration: none; color: inherit; }
        /* Navbar and logo styles are in your MainNavBar component */

        /* HERO SECTION */
        .hero {
          min-height: 500px;
          display: flex;
          align-items: center;
          background-image: url('/images/hero_image.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #e9f6fa;
        }
        a.ms-3.fw-bold.btn.btn-success {
          background-color: #65b32e;
        }
        .hero-content {
          background: rgba(255,255,255,0.85);
          padding: 48px 32px;
          border-radius: 10px;
          max-width: 540px;
          margin-left: 6vw;
          box-shadow: 0 6px 32px rgba(0,0,0,0.08);
          text-align: left;
        }
        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #203354;
        }
        .hero-content p {
          font-size: 1.25rem;
          margin-bottom: 32px;
          color: #222;
        }
        .hero-content .btn {
          background: #1d7acb;
          color: #fff;
          padding: 12px 24px;
          border-radius: 4px;
          font-weight: bold;
          text-decoration: none;
          transition: background 0.2s;
          border: none;
        }
        .hero-content .btn:hover {
          background: #005b7a;
        }
        /* REST OF YOUR EXISTING STYLES */
        section { padding: 60px 40px; }
        .section-title { font-size: 32px; margin-bottom: 20px; color: #0078A8; text-align: center; }
        .about p { max-width: 800px; margin: auto; margin-bottom: 16px; }
        .features { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .feature { background: #fff; border-radius: 6px; padding: 20px; flex: 1; min-width: 240px; max-width: 300px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .feature h3 { font-size: 20px; margin-bottom: 12px; color: #1D2C3A; }
        .feature ul { list-style: disc; margin-left: 20px; }
        .stories-cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .story-card { background: #fff; border-radius: 6px; padding: 20px; flex: 1; min-width: 240px; max-width: 300px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); text-align: center; }
        .story-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 15px; }
        .story-card h3 { font-size: 18px; margin-bottom: 10px; }
        .testimonials-cards { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        .testimonial-card { background: #fff; border-radius: 6px; padding: 20px; flex: 1; min-width: 240px; max-width: 300px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
        .testimonial-card p { font-style: italic; margin-bottom: 10px; }
        .testimonial-card span { display: block; font-weight: bold; text-align: right; }
        .faq ul { max-width: 800px; margin: auto; list-style: none; }
        .faq li { margin-bottom: 16px; }
        .newsletter { background: #F9F9F9; text-align: center; }
        .newsletter input { padding: 10px; width: 300px; max-width: 80%; border: 1px solid #ccc; margin-right: 10px; border-radius: 4px; }
        .newsletter button { padding: 10px 20px; border: none; background: #00B8D4; color: #fff; border-radius: 4px; cursor: pointer; }
        .map img { width: 100%; height: auto; border-radius: 6px; max-width: 800px; }
        .gallery { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .gallery img { width: 120px; height: 100px; object-fit: cover; border-radius: 4px; }
        .stats { background: #F9F9F9; display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; padding: 60px 40px; }
        .stats div { text-align: center; }
        .stats div span { display: block; font-size: 24px; font-weight: bold; color: #0078A8; }
        footer { padding: 60px 40px; }
        .footer-cols { display: flex; flex-wrap: wrap; gap: 40px; }
        .footer-col { flex: 1; min-width: 200px; }
        .footer-col h4 { margin-bottom: 12px; font-size: 16px; color: #fff; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin: 8px 0; }
        .footer-col a { color: #fff; font-size: 14px; }
        .footer-bottom { text-align: center; padding-top: 20px; font-size: 14px; border-top: 1px solid #555; margin-top: 40px; }
        @media (max-width: 768px) {
          .hero-content {
            margin-left: 0;
            padding: 32px 12px;
            max-width: 100%;
          }
          .hero {
            min-height: 340px;
            padding: 0 0 24px 0;
          }
          .hero-content h1 { font-size: 1.5rem; }
          section { padding: 40px 20px; }
          .features, .stories-cards, .testimonials-cards { flex-direction: column; gap: 20px; }
          .newsletter input { margin-bottom: 10px; margin-right: 0; width: 100%; }
          .footer-cols { flex-direction: column; }
        }
      `}</style>
      <Footer/>
    </>
  );
}
