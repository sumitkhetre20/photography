import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Sparkles, Video, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t, language } = useLanguage();

  const galleryVideos = [
    {
      id: 'cinematic-practical',
      title: 'Cinematic Practicals',
      tag: language === 'mr' ? 'सिनेमॅटोग्राफी' : 'Cinematography',
      desc:
        language === 'mr'
          ? 'थेट शूटिंग सेशन्स, ३-अ‍ॅक्सिस गिम्बल बॅलन्सिंग आणि व्यावसायिक कॅमेरा तंत्राचा सखोल प्रात्यक्षिक सराव.'
          : 'Hands-on motion framing, 3-axis gimbal operation, and professional scene composition filmed during live student practicals.',
      src: '/assets/Gallary/cinematic%20Practical/IMG_8492.MP4',
      badgeIcon: Film,
      ratioBadge: '9:16 Vertical HD'
    },
    {
      id: 'class-memories',
      title: 'Class Memories',
      tag: language === 'mr' ? 'क्लास जीवन' : 'Campus Life',
      desc:
        language === 'mr'
          ? 'विद्यार्थी आणि मार्गदर्शकांमधील जिव्हाळा, लेक्चरमधील संवाद आणि एकत्र शिकण्याच्या अविस्मरणीय आठवणी.'
          : 'Unfiltered smiles, collaborative learning, student milestones, and the vibrant creative camaraderie behind every batch.',
      src: '/assets/Gallary/Class%20Memories/IMG_8491.MP4',
      badgeIcon: Sparkles,
      ratioBadge: '9:16 Vertical HD'
    },
    {
      id: 'drone-practical',
      title: 'Drone Practicals',
      tag: language === 'mr' ? 'एरियल शूटिंग' : 'Aerial Filming',
      desc:
        language === 'mr'
          ? 'रिमोट ट्रान्समिटर कंट्रोल, विहंगम दृश्ये टिपण्याचे तंत्र आणि समुद्रकिनाऱ्यावरील प्रत्यक्ष ड्रोन उड्डाण सराव.'
          : 'Students taking flight with remote transmitter controls, mastering aerial perspectives and cinematic landscape framing.',
      src: '/assets/Gallary/Drone%20Practical/IMG_8494.MP4',
      badgeIcon: Video,
      ratioBadge: '9:16 Vertical HD'
    },
    {
      id: 'student-result',
      title: 'Student Results',
      tag: language === 'mr' ? 'विद्यार्थ्यांचे काम' : 'Student Work',
      desc:
        language === 'mr'
          ? 'आमच्या विद्यार्थ्यांचे अंतिम प्रोजेक्ट प्रेझेंटेशन्स, व्यावसायिक कौशल्य आणि कोर्स दरम्यान तयार केलेले प्रभावी काम.'
          : 'Live output, creative shoot accomplishments, and portfolio achievements created by our academy students.',
      src: '/assets/Gallary/student%20result/IMG_8495.MP4',
      badgeIcon: Award,
      ratioBadge: '9:16 Vertical HD'
    }
  ];

  return (
    <div className="page-gallery">
      {/* SECTION 1: GALLERY HERO */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-bg">
          <img
            src="/images/gallery-outdoor-batch.png"
            alt="Photography Gallery at आयुष्याची फोटोग्राफी"
            className="gallery-hero-bg-img"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="container gallery-hero-container">
          <motion.div
            className="gallery-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.gallery.hero.eyebrow}</span>
            <h1 className="gallery-hero-title">{t.gallery.hero.title}</h1>
            <p className="gallery-hero-subtitle">{t.gallery.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FOUR PREMIUM VIDEO CARDS */}
      <section className="section gallery-videos-section">
        <div className="container">
          <div className="gallery-video-grid">
            {galleryVideos.map((item, idx) => {
              const IconComponent = item.badgeIcon;
              return (
                <motion.div
                  key={item.id}
                  className="gallery-video-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="video-card-frame">
                    <div className="video-viewport">
                      <video
                        src={item.src}
                        controls
                        playsInline
                        preload="metadata"
                        className="gallery-video-player"
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="video-card-info">
                      <div className="video-card-meta">
                        <span className="video-tag-badge">
                          <IconComponent size={13} className="gold-icon" />
                          <span>{item.tag}</span>
                        </span>
                        <span className="video-format-pill">{item.ratioBadge}</span>
                      </div>

                      <h3 className="video-card-title">{item.title}</h3>
                      <p className="video-card-desc">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA TO ENQUIRE */}
      <section className="section section-darker">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'आपली कला विकसित करा' : 'Be Part Of Our Next Batch'}
              </span>
              <h2 className="cta-headline">
                {language === 'mr' ? 'पुढील बॅचमध्ये आपले स्थान निश्चित करा' : 'Create Memories Like These'}
              </h2>
              <p className="cta-subheadline">
                {language === 'mr'
                  ? 'प्रत्यक्ष कॅमेरा अनुभव, आउटडोअर सेशन्स आणि तज्ज्ञांचे मार्गदर्शन मिळवण्यासाठी आजच संपर्क साधा.'
                  : 'Experience real field shoots, studio lighting masterclasses, and hands-on guidance from industry veteran Tushar Pulate.'}
              </p>
              <div className="cta-btn-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>{language === 'mr' ? 'प्रवेशासाठी संपर्क करा' : 'Enquire for Next Batch'}</span>
                  <ArrowRight size={17} />
                </Link>
                <Link to="/courses" className="btn btn-secondary">
                  <span>{language === 'mr' ? 'कोर्सेस पहा' : 'View Course Curriculum'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-gallery .section {
          padding: 4rem 0;
        }
        @media (max-width: 768px) {
          .page-gallery .section {
            padding: 3rem 0;
          }
        }
        .gallery-hero-section {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          padding-top: 130px;
          padding-bottom: 70px;
          overflow: hidden;
        }
        .gallery-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .gallery-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) contrast(1.15);
        }
        .gallery-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.75) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .gallery-hero-container {
          position: relative;
          z-index: 2;
        }
        .gallery-hero-content {
          max-width: 820px;
        }
        .gallery-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.18;
        }
        .gallery-hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* 4-Column Video Gallery Grid */
        .gallery-videos-section {
          background-color: var(--bg-primary);
        }
        .gallery-video-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1360px;
          margin: 0 auto;
        }
        @media (min-width: 640px) {
          .gallery-video-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
            max-width: 900px;
          }
        }
        @media (min-width: 1080px) {
          .gallery-video-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            max-width: 1380px;
          }
        }

        /* Premium Video Card */
        .gallery-video-card {
          border-radius: var(--radius-lg, 18px);
          background: #131313;
          border: 1px solid var(--border-color);
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.35s ease, 
                      box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .gallery-video-card:hover {
          transform: translateY(-5px);
          border-color: var(--border-gold);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.85), 0 0 30px rgba(255, 198, 41, 0.16);
        }
        .video-card-frame {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .video-viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 9 / 16;
          background: #000000;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 198, 41, 0.2);
        }
        .gallery-video-player {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background-color: #000000;
        }
        .video-card-info {
          padding: 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background: linear-gradient(180deg, rgba(22, 22, 22, 0.95) 0%, rgba(16, 16, 16, 0.98) 100%);
        }
        .video-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.65rem;
          gap: 0.5rem;
        }
        .video-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 198, 41, 0.08);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.73rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.22rem 0.6rem;
          border-radius: var(--radius-sm);
        }
        .video-format-pill {
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          font-weight: 500;
        }
        .gold-icon {
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        .video-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: #FFFFFF;
          margin-bottom: 0.45rem;
          line-height: 1.3;
        }
        .video-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        /* CTA Cinematic Banner */
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

        @media (max-width: 480px) {
          .gallery-video-grid {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .video-card-info {
            padding: 1.1rem 1.1rem;
          }
          .video-card-title {
            font-size: 1.1rem;
          }
          .video-card-desc {
            font-size: 0.84rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
