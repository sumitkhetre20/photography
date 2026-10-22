import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FacilityCard = ({ facility, index = 0 }) => {
  const { language, t } = useLanguage();
  const isEven = index % 2 === 0;

  const title = language === 'mr' ? facility.titleMr : facility.title;
  const tag = language === 'mr' ? facility.tagMr : facility.tag;
  const description = language === 'mr' ? facility.descriptionMr : facility.description;
  const features = language === 'mr' ? facility.featuresMr : facility.features;

  return (
    <motion.article 
      className={`facility-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* Image Block */}
      <div className="facility-img-col card-zoom-container camera-crosshair">
        <img 
          src={facility.image} 
          alt={title} 
          className="facility-img card-zoom-img" 
          loading="lazy" 
        />
        <div className="facility-img-overlay">
          <span className="facility-counter">0{index + 1}</span>
        </div>
      </div>

      {/* Content Block */}
      <div className="facility-content-col">
        <div className="facility-tag-wrap">
          <span className="badge-gold">
            <Sparkles size={12} />
            <span>{tag}</span>
          </span>
        </div>

        <h3 className="facility-title">{title}</h3>
        <p className="facility-desc">{description}</p>

        <div className="facility-features-box">
          <h4 className="features-subhead">{t.facilities.featuresTitle}</h4>
          <ul className="features-list">
            {features.map((feature, idx) => (
              <li key={idx} className="feature-item">
                <CheckCircle2 size={16} className="feature-icon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .facility-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.25rem;
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 3.5rem;
          transition: all 0.35s ease;
        }
        .facility-card:hover {
          border-color: var(--border-gold);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
        }
        @media (min-width: 900px) {
          .facility-card {
            grid-template-columns: 1fr 1fr;
            gap: 3.5rem;
            padding: 2.5rem;
            align-items: center;
          }
          .facility-card.layout-reverse .facility-img-col {
            order: 2;
          }
          .facility-card.layout-reverse .facility-content-col {
            order: 1;
          }
        }
        .facility-img-col {
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 320px;
          position: relative;
          border: 1px solid var(--border-color);
        }
        @media (min-width: 900px) {
          .facility-img-col {
            height: 380px;
          }
        }
        .facility-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .facility-img-overlay {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(9, 9, 9, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border-gold);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .facility-counter {
          font-family: var(--font-heading);
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
        .facility-content-col {
          display: flex;
          flex-direction: column;
        }
        .facility-tag-wrap {
          margin-bottom: 0.85rem;
        }
        .facility-title {
          font-family: var(--font-heading);
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .facility-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        .facility-features-box {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid var(--border-color);
          padding-top: 1.25rem;
        }
        .features-subhead {
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--accent-gold);
          margin-bottom: 0.85rem;
        }
        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.5;
        }
        .feature-icon {
          color: var(--accent-gold);
          margin-top: 3px;
          flex-shrink: 0;
        }
      `}</style>
    </motion.article>
  );
};

export default FacilityCard;
