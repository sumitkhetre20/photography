import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { facilitiesData } from '../data/facilities';
import { instituteInfo } from '../data/instituteInfo';
import FacilityCard from '../components/FacilityCard';

const Facilities = () => {
  const { t, language } = useLanguage();

  return (
    <div className="page-facilities">
      {/* SECTION 1: FACILITIES HERO */}
      <section className="facilities-hero-section">
        <div className="facilities-hero-bg">
          <img 
            src="/images/studio.jpg" 
            alt="Shooting Studio at आयुष्याची फोटोग्राफी" 
            className="facilities-hero-bg-img"
          />
          <div className="facilities-hero-overlay"></div>
        </div>

        <div className="container facilities-hero-container">
          <motion.div 
            className="facilities-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.facilities.hero.eyebrow}</span>
            <h1 className="facilities-hero-title">{t.facilities.hero.title}</h1>
            <p className="facilities-hero-subtitle">{t.facilities.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL ALTERNATING FACILITIES LIST */}
      <section className="section">
        <div className="container">
          <div className="facilities-list-wrap">
            {facilitiesData.map((facility, idx) => (
              <FacilityCard key={facility.id} facility={facility} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CAMPUS LOCATION & VISIT CTA */}
      <section className="section section-darker">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'कॅम्पस भेट' : 'Campus Visit'}
              </span>
              <h2 className="cta-headline">{t.facilities.enquireCta.title}</h2>
              <p className="cta-subheadline">{t.facilities.enquireCta.subtitle}</p>

              <div className="campus-address-chip">
                <MapPin size={16} className="text-gold" />
                <span>
                  {language === 'mr' ? instituteInfo.addressMarathi : instituteInfo.address}
                </span>
              </div>

              <div className="cta-btn-row" style={{ marginTop: '1.75rem' }}>
                <Link to="/contact" className="btn btn-primary">
                  <span>{t.facilities.enquireCta.btn}</span>
                  <ArrowRight size={17} />
                </Link>
                <a 
                  href={instituteInfo.mapDirectionsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <span>{language === 'mr' ? 'मॅपवर लोकेशन पहा' : 'View on Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .facilities-hero-section {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          padding-top: 130px;
          padding-bottom: 70px;
          overflow: hidden;
        }
        .facilities-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .facilities-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) contrast(1.15);
        }
        .facilities-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.75) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .facilities-hero-container {
          position: relative;
          z-index: 2;
        }
        .facilities-hero-content {
          max-width: 820px;
        }
        .facilities-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.18;
        }
        .facilities-hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .facilities-list-wrap {
          margin-top: 1rem;
        }
        .campus-address-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 198, 41, 0.08);
          border: 1px solid var(--border-gold);
          color: #FFFFFF;
          font-size: 0.92rem;
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          max-width: 90%;
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Facilities;
