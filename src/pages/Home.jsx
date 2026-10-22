import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, ChevronDown, Award, PlayCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { facilitiesData } from '../data/facilities';
import { instituteInfo } from '../data/instituteInfo';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const { t, language } = useLanguage();

  const featuredCourses = coursesData.filter(c => c.featured);
  const featuredFacilities = facilitiesData.slice(0, 2);

  return (
    <div className="page-home">
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="hero-section">
        {/* Hero Background with Cinematic Vignette & Overlay */}
        <div className="hero-bg-wrapper">
          <img 
            src="/images/about-banner.png" 
            alt="आयुष्याची फोटोग्राफी - Tushar Pulate Institute" 
            className="hero-bg-img"
          />
          <div className="hero-overlay-dark"></div>
          <div className="hero-overlay-radial"></div>
          <div className="hero-grid-lines"></div>
        </div>

        {/* Hero Content */}
        <div className="container hero-container">
          <div className="hero-content">
            {/* Camera Crosshair Accent */}
            <motion.div 
              className="hero-eyebrow-chip"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="chip-dot"></span>
              <span>{t.home.hero.eyebrow}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              {t.home.hero.heading}
            </motion.h1>

            {/* Marathi Secondary Brand Heading */}
            <motion.h2 
              className="hero-brand-name text-gold-gradient"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              {t.home.hero.brandHeading}
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {t.home.hero.desc}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link to="/courses" className="btn btn-primary">
                <span>{t.home.hero.btnCourses}</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/about" className="btn btn-secondary">
                <span>{t.home.hero.btnAbout}</span>
                <ArrowUpRight size={17} />
              </Link>
            </motion.div>

            {/* Certification / Quick Info Bar */}
            <motion.div 
              className="hero-quick-bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="quick-info-item">
                <span className="qi-val">{instituteInfo.duration}</span>
                <span className="qi-label">{language === 'mr' ? 'सखोल कालावधी' : 'Intensive Duration'}</span>
              </div>
              <div className="qi-divider"></div>
              <div className="quick-info-item">
                <span className="qi-val">{instituteInfo.courseFee}</span>
                <span className="qi-label">{language === 'mr' ? 'एकूण कोर्स फी' : 'Full Course Fee'}</span>
              </div>
              <div className="qi-divider"></div>
              <div className="quick-info-item">
                <span className="qi-val-cert">ISO 9001:2015</span>
                <span className="qi-label">{language === 'mr' ? 'आणि IAF प्रमाणित' : '& IAF Certified'}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span className="scroll-text">{t.home.hero.scrollDown}</span>
          <ChevronDown size={18} className="scroll-chevron animate-bounce-slow" />
        </div>
      </section>

      {/* SECTION 2: SHORT INSTITUTE INTRODUCTION */}
      <section className="section section-intro">
        <div className="container">
          <div className="intro-grid">
            {/* Visual Column: Quote Image from Assets */}
            <motion.div 
              className="intro-image-wrapper card-zoom-container camera-crosshair"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/images/quote-tushar.jpg" 
                alt="कला कोणतीही असो जीव ओतून काम केल्याशिवाय कलाकार घडत नसतो..! - तुषार पुलाटे" 
                className="intro-quote-img card-zoom-img" 
              />
              <div className="intro-badge-overlay">
                <span className="badge-gold">
                  <Sparkles size={13} />
                  <span>{t.home.intro.badge}</span>
                </span>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              className="intro-text-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">{t.home.intro.eyebrow}</span>
              <h2 className="section-title intro-title">{t.home.intro.title}</h2>
              <p className="intro-desc-p">{t.home.intro.desc}</p>

              {/* Quote Block */}
              <div className="intro-quote-box">
                <p className="quote-text-marathi">“{t.home.quote.text}”</p>
                {language === 'en' && (
                  <p className="quote-text-en">{t.home.quote.translation}</p>
                )}
                <div className="quote-author-line">
                  <span className="quote-author">— {t.home.quote.author}</span>
                  <span className="quote-author-role">({t.home.quote.role})</span>
                </div>
              </div>

              <div className="intro-action-wrap">
                <Link to="/about" className="btn btn-outline-gold">
                  <span>{t.home.intro.btn}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED COURSES PREVIEW */}
      <section className="section section-darker">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.home.featuredCourses.eyebrow}</span>
            <h2 className="section-title">{t.home.featuredCourses.title}</h2>
            <p className="section-subtitle">{t.home.featuredCourses.subtitle}</p>
            <div className="gold-divider"></div>
          </div>

          <div className="featured-courses-grid">
            {featuredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>

          <div className="section-bottom-action">
            <Link to="/courses" className="btn btn-primary">
              <span>{t.home.featuredCourses.viewAll}</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FACILITIES PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{t.home.facilitiesPreview.eyebrow}</span>
            <h2 className="section-title">{t.home.facilitiesPreview.title}</h2>
            <p className="section-subtitle">{t.home.facilitiesPreview.subtitle}</p>
            <div className="gold-divider"></div>
          </div>

          <div className="facilities-preview-grid">
            {featuredFacilities.map((facility, idx) => {
              const title = language === 'mr' ? facility.titleMr : facility.title;
              const tag = language === 'mr' ? facility.tagMr : facility.tag;
              const desc = language === 'mr' ? facility.descriptionMr : facility.description;

              return (
                <motion.div 
                  key={facility.id} 
                  className="facility-preview-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className="f-preview-img-box card-zoom-container">
                    <img src={facility.image} alt={title} className="f-preview-img card-zoom-img" loading="lazy" />
                    <span className="f-preview-badge">{tag}</span>
                  </div>
                  <div className="f-preview-body">
                    <h3 className="f-preview-title">{title}</h3>
                    <p className="f-preview-desc">{desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="section-bottom-action">
            <Link to="/facilities" className="btn btn-outline-gold">
              <span>{t.home.facilitiesPreview.viewAll}</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CINEMATIC CTA */}
      <section className="section section-cta">
        <div className="container">
          <motion.div 
            className="cta-cinematic-banner"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-glow-circle"></div>
            <div className="cta-content">
              <span className="section-eyebrow">{language === 'mr' ? 'प्रवेश सुरू' : 'Admissions Open'}</span>
              <h2 className="cta-headline">{t.home.cta.title}</h2>
              <p className="cta-subheadline">{t.home.cta.subtitle}</p>
              
              <div className="cta-btn-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>{t.home.cta.btnAdmission}</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/courses" className="btn btn-secondary">
                  <span>{t.home.cta.btnCourses}</span>
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <p className="cta-contact-note">
                {language === 'mr' 
                  ? 'थेट हेल्पलाइन: +91 84599 12189 | पार्श्व कॅपिटल, चऱ्होली बुद्रुक, पुणे'
                  : 'Helpline: +91 84599 12189 | Parshwa Capital, Charholi Budruk, Pune'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 60px;
          overflow: hidden;
        }
        .hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.65) contrast(1.15);
          transform: scale(1.03);
        }
        .hero-overlay-dark {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.7) 0%, rgba(9, 9, 9, 0.85) 60%, rgba(9, 9, 9, 1) 100%);
        }
        .hero-overlay-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 20%, rgba(9, 9, 9, 0.8) 80%);
        }
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255, 198, 41, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 198, 41, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.6;
        }
        .hero-container {
          position: relative;
          z-index: 2;
        }
        .hero-content {
          max-width: 820px;
        }
        .hero-eyebrow-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 198, 41, 0.12);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-gold);
          box-shadow: 0 0 8px var(--accent-gold);
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 6vw, 4.4rem);
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.12;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }
        .hero-brand-name {
          font-size: clamp(2rem, 5vw, 3.8rem);
          font-weight: 800;
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }
        .hero-description {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 700px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        .hero-quick-bar {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          background: rgba(20, 20, 20, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1.5rem;
          width: fit-content;
        }
        @media (max-width: 640px) {
          .hero-quick-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            width: 100%;
          }
          .qi-divider {
            display: none;
          }
        }
        .quick-info-item {
          display: flex;
          flex-direction: column;
        }
        .qi-val {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent-gold);
        }
        .qi-val-cert {
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
        }
        .qi-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .qi-divider {
          width: 1px;
          height: 32px;
          background: var(--border-color);
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-muted);
          z-index: 2;
        }
        .scroll-text {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .scroll-chevron {
          color: var(--accent-gold);
        }

        /* Intro Section */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr 1.25fr;
            gap: 4rem;
          }
        }
        .intro-image-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border-color);
          max-height: 520px;
          background: #111;
        }
        .intro-quote-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .intro-badge-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
        }
        .intro-title {
          text-align: left;
          margin-bottom: 1.25rem;
        }
        .intro-desc-p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }
        .intro-quote-box {
          background: rgba(255, 198, 41, 0.05);
          border-left: 3px solid var(--accent-gold);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 2rem;
        }
        .quote-text-marathi {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--accent-gold);
          line-height: 1.4;
          margin-bottom: 0.4rem;
        }
        .quote-text-en {
          font-size: 0.95rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .quote-author-line {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
        }
        .quote-author {
          font-weight: 700;
          color: #FFFFFF;
        }
        .quote-author-role {
          color: var(--text-muted);
        }
        .intro-action-wrap {
          display: flex;
        }

        /* Featured Courses Grid */
        .featured-courses-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .featured-courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .featured-courses-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .section-bottom-action {
          margin-top: 3.5rem;
          display: flex;
          justify-content: center;
        }

        /* Facilities Preview Grid */
        .facilities-preview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .facilities-preview-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .facility-preview-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.35s ease;
        }
        .facility-preview-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
        }
        .f-preview-img-box {
          height: 240px;
          position: relative;
        }
        .f-preview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .f-preview-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(14, 14, 14, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .f-preview-body {
          padding: 1.5rem;
        }
        .f-preview-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }
        .f-preview-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA Section */
        .section-cta {
          padding-top: 2rem;
          padding-bottom: 6rem;
        }
        .cta-cinematic-banner {
          background: linear-gradient(135deg, #181818 0%, #101010 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 4.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 198, 41, 0.1);
        }
        .cta-glow-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 198, 41, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }
        .cta-headline {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .cta-subheadline {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          line-height: 1.6;
        }
        .cta-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .cta-contact-note {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};

export default Home;
