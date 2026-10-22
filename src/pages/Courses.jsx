import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, BookmarkCheck, Search, Info, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { coursesData } from '../data/courses';
import { instituteInfo } from '../data/instituteInfo';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = coursesData.filter((c) => {
    const title = language === 'mr' ? c.titleMr : c.title;
    const desc = language === 'mr' ? c.shortDescMr : c.shortDesc;
    const query = searchTerm.toLowerCase();
    return title.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
  });

  return (
    <div className="page-courses">
      {/* SECTION 1: COURSES HERO */}
      <section className="courses-hero-section">
        <div className="courses-hero-bg">
          <img 
            src="/images/gallery-theory-aperture.png" 
            alt="Courses at Tushar Pulate Institute" 
            className="courses-hero-bg-img"
          />
          <div className="courses-hero-overlay"></div>
        </div>

        <div className="container courses-hero-container">
          <motion.div 
            className="courses-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.courses.hero.eyebrow}</span>
            <h1 className="courses-hero-title">{t.courses.hero.title}</h1>
            <p className="courses-hero-subtitle">{t.courses.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DURATION, FEES & SEAT BOOKING BANNER */}
      <section className="course-pricing-banner-section">
        <div className="container">
          <motion.div 
            className="pricing-overview-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="pricing-grid">
              {/* Duration item */}
              <div className="pricing-block">
                <div className="pricing-icon-box">
                  <Calendar size={24} color="#FFC629" />
                </div>
                <div>
                  <span className="p-block-label">{t.courses.banner.durationLabel}</span>
                  <span className="p-block-val">{t.courses.banner.durationVal}</span>
                  <span className="p-block-note">{t.courses.banner.durationNote}</span>
                </div>
              </div>

              {/* Total Fee item */}
              <div className="pricing-block">
                <div className="pricing-icon-box">
                  <DollarSign size={24} color="#FFC629" />
                </div>
                <div>
                  <span className="p-block-label">{t.courses.banner.feeLabel}</span>
                  <span className="p-block-val text-gold">{t.courses.banner.feeVal}</span>
                  <span className="p-block-note">{t.courses.banner.feeNote}</span>
                </div>
              </div>

              {/* Seat Booking item */}
              <div className="pricing-block">
                <div className="pricing-icon-box">
                  <BookmarkCheck size={24} color="#FFC629" />
                </div>
                <div>
                  <span className="p-block-label">{t.courses.banner.bookingLabel}</span>
                  <span className="p-block-val">{t.courses.banner.bookingVal}</span>
                  <span className="p-block-note">{t.courses.banner.bookingNote}</span>
                </div>
              </div>
            </div>

            {/* Information Notice Bar */}
            <div className="pricing-notice-bar">
              <Info size={16} className="notice-icon" />
              <span>{t.courses.banner.importantNotice}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: COURSE CATALOGUE GRID */}
      <section className="section">
        <div className="container">
          {/* Search & Counter Bar */}
          <div className="catalogue-toolbar">
            <span className="courses-count-pill">
              <Sparkles size={14} />
              <span>{t.courses.allCoursesCount}</span>
            </span>

            <div className="course-search-box">
              <Search size={17} className="search-icon" />
              <input
                type="text"
                placeholder={t.courses.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="course-search-input"
                aria-label="Search courses"
              />
            </div>
          </div>

          {/* 3-Column Grid on Desktop */}
          <div className="courses-catalogue-grid">
            {filteredCourses.map((course, idx) => (
              <CourseCard key={course.id} course={course} index={idx} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="courses-empty-state">
              <p>{language === 'mr' ? 'कोणताही कोर्स सापडला नाही.' : 'No courses match your search criteria.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: COURSES CTA */}
      <section className="section section-darker">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'अनामत सीट बुकिंग' : 'Reserve Your Seat'}
              </span>
              <h2 className="cta-headline">
                {language === 'mr' ? 'मर्यादित जागा उपलब्ध आहेत' : 'Limited Seats Per Batch'}
              </h2>
              <p className="cta-subheadline">
                {language === 'mr' 
                  ? 'प्रत्येक विद्यार्थ्याला वैयक्तिक लक्ष व प्रत्यक्ष कॅमेरा प्रॅक्टिस मिळण्यासाठी बॅचमधील जागा मर्यादित असतात. आजच ₹५,००० भरून आपली सीट आरक्षित करा.'
                  : 'To ensure hands-on camera access, personalized attention, and dedicated editing workstations, batch seats are kept strictly limited. Reserve your seat today with ₹5,000.'}
              </p>
              <div className="cta-btn-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>{language === 'mr' ? 'सीट बुकिंगसाठी संपर्क करा' : 'Enquire & Book Seat'}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .courses-hero-section {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          padding-top: 130px;
          padding-bottom: 70px;
          overflow: hidden;
        }
        .courses-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .courses-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) contrast(1.1);
        }
        .courses-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.75) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .courses-hero-container {
          position: relative;
          z-index: 2;
        }
        .courses-hero-content {
          max-width: 820px;
        }
        .courses-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.18;
        }
        .courses-hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Pricing overview banner */
        .course-pricing-banner-section {
          margin-top: -30px;
          position: relative;
          z-index: 5;
        }
        .pricing-overview-card {
          background: #141414;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 198, 41, 0.1);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        .pricing-block {
          display: flex;
          align-items: flex-start;
          gap: 1.15rem;
        }
        .pricing-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: rgba(255, 198, 41, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .p-block-label {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.2rem;
        }
        .p-block-val {
          display: block;
          font-size: 1.6rem;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }
        .text-gold {
          color: var(--accent-gold);
        }
        .p-block-note {
          display: block;
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .pricing-notice-bar {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .notice-icon {
          color: var(--accent-gold);
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Catalogue Toolbar */
        .catalogue-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .courses-count-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 198, 41, 0.08);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.84rem;
          font-weight: 700;
          padding: 0.45rem 1rem;
          border-radius: var(--radius-full);
        }
        .course-search-box {
          position: relative;
          min-width: 280px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .course-search-input {
          width: 100%;
          background: #141414;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          padding: 0.65rem 1rem 0.65rem 2.6rem;
          color: #FFFFFF;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .course-search-input:focus {
          border-color: var(--accent-gold);
        }

        /* 3-Column Grid */
        .courses-catalogue-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .courses-catalogue-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .courses-catalogue-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .courses-empty-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--text-muted);
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default Courses;
