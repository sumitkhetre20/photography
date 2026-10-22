import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Sparkles, Camera, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { instituteInfo } from '../data/instituteInfo';
import aboutUsVideo from '../../Assets/About/about_us _video.MP4';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="page-about">
      {/* SECTION 1: ABOUT HERO */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img
            src="/images/about-banner.png"
            alt="Tushar Pulate Institute of Photography & Film Making"
            className="about-hero-bg-img"
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.about.hero.eyebrow}</span>
            <h1 className="about-hero-title">{t.about.hero.title}</h1>
            <p className="about-hero-subtitle">{t.about.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: OFFICIAL INSTITUTE INTRODUCTION & POSITIONING */}
      <section className="section section-darker">
        <div className="container">
          <div className="about-intro-grid">
            <motion.div
              className="about-intro-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">{t.about.intro.eyebrow}</span>
              <h2 className="section-title text-left">{t.about.intro.title}</h2>
              <div className="gold-divider left-aligned"></div>

              <p className="about-paragraph">{t.about.intro.desc1}</p>
              <p className="about-paragraph">{t.about.intro.desc2}</p>

              {/* Promotional Heading (Conservative presentation per prompt) */}
              <div className="positioning-card">
                <span className="pos-badge">
                  <Sparkles size={14} />
                  <span>{language === 'mr' ? 'उद्दिष्ट व ध्येय' : 'Core Vision'}</span>
                </span>
                <h3 className="pos-title">{t.about.positioning.title}</h3>
                <h4 className="pos-sub">{t.about.positioning.subtitle}</h4>
                <p className="pos-desc">{t.about.positioning.desc}</p>
              </div>
            </motion.div>

            {/* Visual Column: Class & Students at Screening Hall */}
            <motion.div
              className="about-intro-visual card-zoom-container camera-crosshair"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src="/images/gallery-classroom-interactive.png"
                alt="Students learning at Tushar Pulate Institute"
                className="about-intro-img card-zoom-img"
              />
              <div className="about-visual-overlay">
                <span className="badge-gold">
                  {language === 'mr' ? '३० दिवस सखोल प्रात्यक्षिक' : '30-Day Practical Intensive'}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: INSTITUTE & FOUNDER VIDEO SHOWCASE */}
      <section className="section about-video-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">
              {t.about.videoShowcase?.eyebrow || 'Discover Our Institute'}
            </span>
            <h2 className="section-title">
              {t.about.videoShowcase?.title || 'Inside आयुष्याची फोटोग्राफी'}
            </h2>
            <p className="section-subtitle">
              {t.about.videoShowcase?.desc ||
                'Take an inside look at our institute through this introduction video, showcasing our courses, professional studio, editing labs, practical training, facilities, and overall learning experience.'}
            </p>
            <div className="gold-divider"></div>
          </div>

          <motion.div
            className="about-video-card-container"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-video-frame">
              <div className="about-video-glow-effect"></div>
              <div className="about-video-inner">
                <video
                  src={aboutUsVideo}
                  controls
                  playsInline
                  preload="metadata"
                  className="about-portrait-video"
                >
                  <source src={aboutUsVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>


          </motion.div>
        </div>
      </section>

      {/* SECTION 3: FOUNDER PROFILE (TUSHAR PULATE) */}
      <section className="section section-founder">
        <div className="container">
          <div className="founder-grid">
            {/* Founder Image */}
            <motion.div
              className="founder-img-col card-zoom-container camera-crosshair"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/tushar-instructor.jpg"
                alt="Tushar Pulate - Founder & Instructor"
                className="founder-img card-zoom-img"
              />
              <div className="founder-tagline-chip">
                <span>{instituteInfo.tagline}</span>
              </div>
            </motion.div>

            {/* Founder Text */}
            <motion.div
              className="founder-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">{t.about.founder.eyebrow}</span>
              <h2 className="founder-name">{t.about.founder.name}</h2>
              <span className="founder-role">{t.about.founder.role}</span>
              <div className="gold-divider left-aligned"></div>

              <p className="founder-bio">{t.about.founder.bio1}</p>
              <p className="founder-bio">{t.about.founder.bio2}</p>

              {/* Quote from local asset */}
              <div className="founder-quote-banner">
                <p className="fq-quote">
                  “कला कोणतीही असो जीव ओतून काम केल्याशिवाय कलाकार घडत नसतो..!”
                </p>
                <span className="fq-sig">— {instituteInfo.founder}</span>
              </div>

              <div className="founder-action-wrap">
                <Link to="/contact" className="btn btn-primary">
                  <span>{t.about.founder.enquireBtn}</span>
                  <ArrowRight size={17} />
                </Link>
                <a
                  href={instituteInfo.socials.instagramFounder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <span>Instagram: {instituteInfo.socials.instagramFounder.handle}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CERTIFICATION SECTION (ISO 9001:2015 & IAF) */}
      <section className="section section-darker">
        <div className="container">
          <motion.div
            className="certification-banner"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="cert-left">
              <div className="cert-badge-box">
                <ShieldCheck size={36} color="#FFC629" />
              </div>
              <div className="cert-text-info">
                <span className="section-eyebrow">{t.about.certification.eyebrow}</span>
                <h3 className="cert-title">{t.about.certification.title}</h3>
                <p className="cert-desc">{t.about.certification.desc}</p>
                <p className="cert-disclaimer">{t.about.certification.disclaimer}</p>
              </div>
            </div>
            <div className="cert-visual-card">
              <img
                src="/images/about-banner.png"
                alt="ISO 9001:2015 and IAF certification on brochure"
                className="cert-brochure-preview"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: LEARNING APPROACH (7 PILLARS) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.about.learningApproach.eyebrow}</span>
            <h2 className="section-title">{t.about.learningApproach.title}</h2>
            <p className="section-subtitle">{t.about.learningApproach.subtitle}</p>
            <div className="gold-divider"></div>
          </div>

          <div className="pillars-grid">
            {t.about.learningApproach.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="pillar-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <div className="pillar-num-badge">0{idx + 1}</div>
                <div className="pillar-card-content">
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-desc">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ABOUT PAGE CTA */}
      <section className="section section-cta">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'प्रवेशाची पहिली पायरी' : 'Take The First Step'}
              </span>
              <h2 className="cta-headline">{t.about.cta.title}</h2>
              <p className="cta-subheadline">{t.about.cta.subtitle}</p>
              <div className="cta-btn-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>{t.about.cta.btn}</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/courses" className="btn btn-secondary">
                  <span>{language === 'mr' ? 'कोर्सेसची यादी' : 'View All Courses'}</span>
                  <BookOpen size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Page About Spacing Harmonization */
        .page-about .section {
          padding: 3.75rem 0;
        }
        @media (max-width: 768px) {
          .page-about .section {
            padding: 2.75rem 0;
          }
        }
        .page-about .section-header {
          margin-bottom: 2.25rem;
        }

        /* Hero */
        .about-hero-section {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          padding-top: 120px;
          padding-bottom: 60px;
          overflow: hidden;
        }
        .about-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .about-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(0.4) contrast(1.1);
        }
        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.8) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .about-hero-container {
          position: relative;
          z-index: 2;
        }
        .about-hero-content {
          max-width: 800px;
        }
        .about-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 5vw, 4rem);
          color: #FFFFFF;
          margin-bottom: 0.85rem;
          line-height: 1.18;
        }
        .about-hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Intro */
        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .about-intro-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 3.5rem;
          }
        }
        .left-aligned {
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 1.5rem;
        }
        .about-paragraph {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .positioning-card {
          background: rgba(255, 198, 41, 0.05);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-sm);
          padding: 1.35rem 1.5rem;
          margin-top: 1.5rem;
        }
        .pos-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          margin-bottom: 0.5rem;
        }
        .pos-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }
        .pos-sub {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-gold);
          margin-bottom: 0.65rem;
        }
        .pos-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .about-intro-visual {
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          height: 380px;
          border: 1px solid var(--border-color);
        }
        .about-intro-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-visual-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
        }

        /* Founder */
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .founder-grid {
            grid-template-columns: 1fr 1.3fr;
            gap: 3.5rem;
          }
        }
        .founder-img-col {
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 440px;
          position: relative;
          border: 1px solid var(--border-color);
          background: #111;
        }
        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .founder-tagline-chip {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(9, 9, 9, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-gold);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          color: var(--accent-gold);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }
        .founder-name {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }
        .founder-role {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--accent-gold);
          letter-spacing: 0.05em;
        }
        .founder-bio {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .founder-quote-banner {
          background: #161616;
          border-left: 3px solid var(--accent-gold);
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .fq-quote {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1.4;
          margin-bottom: 0.35rem;
        }
        .fq-sig {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .founder-action-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Certification */
        .certification-banner {
          background: #161616;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 2rem 2.25rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: center;
        }
        @media (min-width: 860px) {
          .certification-banner {
            grid-template-columns: 1.4fr 1fr;
            padding: 2.5rem 3rem;
          }
        }
        .cert-left {
          display: flex;
          gap: 1.25rem;
        }
        .cert-badge-box {
          width: 58px;
          height: 58px;
          border-radius: var(--radius-sm);
          background: rgba(255, 198, 41, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cert-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }
        .cert-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 0.65rem;
        }
        .cert-disclaimer {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .cert-visual-card {
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-color);
          max-height: 190px;
        }
        .cert-brochure-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: right center;
        }

        /* Compressed 7-Pillars Framework */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
          max-width: 1140px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.95rem;
          }
        }
        @media (min-width: 1024px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          .pillar-card:last-child:nth-child(3n + 1) {
            grid-column: 2;
          }
        }
        .pillar-card {
          background: rgba(22, 22, 22, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1.1rem 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.95rem;
          transition: all 0.25s ease;
        }
        .pillar-card:hover {
          background: rgba(28, 28, 28, 0.95);
          border-color: var(--border-gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 198, 41, 0.1);
        }
        .pillar-num-badge {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: rgba(255, 198, 41, 0.1);
          border: 1px solid rgba(255, 198, 41, 0.35);
          color: var(--accent-gold);
          font-family: var(--font-heading);
          font-size: 0.92rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }
        .pillar-card-content {
          flex: 1;
          min-width: 0;
        }
        .pillar-card-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: #FFFFFF;
          margin-bottom: 0.3rem;
          line-height: 1.3;
        }
        .pillar-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Portrait Video Showcase */
        .about-video-section {
          position: relative;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.95) 0%, rgba(15, 15, 15, 1) 50%, rgba(9, 9, 9, 0.95) 100%);
          padding: 3.75rem 0;
          overflow: hidden;
        }
        .about-video-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          max-width: 380px;
          width: 100%;
        }
        .about-video-frame {
          position: relative;
          width: 100%;
          border-radius: var(--radius-lg, 20px);
          padding: 5px;
          background: linear-gradient(145deg, rgba(255, 198, 41, 0.55) 0%, rgba(35, 35, 35, 0.9) 50%, rgba(255, 198, 41, 0.35) 100%);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 198, 41, 0.18);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .about-video-frame:hover {
          box-shadow: 0 24px 60px -8px rgba(0, 0, 0, 0.95), 0 0 45px rgba(255, 198, 41, 0.28);
        }
        .about-video-glow-effect {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 75%;
          height: 48px;
          background: radial-gradient(ellipse at center, rgba(255, 198, 41, 0.35) 0%, rgba(255, 198, 41, 0) 75%);
          filter: blur(16px);
          pointer-events: none;
          z-index: 0;
        }
        .about-video-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          border-radius: calc(var(--radius-lg, 20px) - 3px);
          overflow: hidden;
          background-color: #000000;
          border: 1px solid rgba(255, 198, 41, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }
        .about-portrait-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background-color: #000000;
          border-radius: inherit;
        }
        .about-video-caption {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 198, 41, 0.06);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full, 9999px);
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-align: center;
        }
        .gold-sparkle-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        @media (max-width: 480px) {
          .about-video-card-container {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .about-video-caption {
            font-size: 0.78rem;
            padding: 0.4rem 0.9rem;
          }
        }

        /* CTA Cinematic Banner Spacing */
        .cta-cinematic-banner {
          background: linear-gradient(145deg, #181818 0%, #101010 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-elevation);
        }
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }
        .cta-headline {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }
        .cta-subheadline {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }
        .cta-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};

export default About;
