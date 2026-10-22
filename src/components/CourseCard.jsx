import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import CourseModal from './CourseModal';

const CourseCard = ({ course, index = 0 }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { language, t } = useLanguage();

  const title = language === 'mr' ? course.titleMr : course.title;
  const shortDesc = language === 'mr' ? course.shortDescMr : course.shortDesc;
  const topics = language === 'mr' ? course.topicsMr : course.topics;

  return (
    <>
      <motion.article 
        className="course-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
      >
        <div className="course-card-top card-zoom-container">
          <img src={course.image} alt={title} className="course-card-img card-zoom-img" loading="lazy" />
          <div className="course-img-gradient"></div>
          
          {course.featured && (
            <span className="course-featured-badge">
              <Sparkles size={13} />
              <span>{language === 'mr' ? 'प्रमुख कोर्स' : 'Core Module'}</span>
            </span>
          )}

          <div className="course-duration-chip">
            <span>30 {language === 'mr' ? 'दिवस' : 'Days'}</span>
          </div>
        </div>

        <div className="course-card-body">
          <h3 className="course-card-title">{title}</h3>
          <p className="course-card-desc">{shortDesc}</p>

          {/* Topics Preview (First 3) */}
          <div className="course-topics-preview">
            <span className="topics-preview-label">
              {language === 'mr' ? 'प्रमुख घटक:' : 'Key Skills:'}
            </span>
            <ul className="topics-mini-list">
              {topics.slice(0, 3).map((item, idx) => (
                <li key={idx} className="topic-mini-item">
                  <Check size={13} className="check-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="course-card-actions">
            <button
              type="button"
              className="btn-card-details"
              onClick={() => setModalOpen(true)}
              aria-label={`View details for ${title}`}
            >
              <BookOpen size={15} />
              <span>{t.courses.viewDetails}</span>
            </button>
            <Link
              to={`/contact?course=${course.id}`}
              className="btn btn-primary btn-sm course-card-enquire"
            >
              <span>{t.courses.enquireNow}</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </motion.article>

      {/* Course Details Modal */}
      <CourseModal
        course={course}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <style>{`
        .course-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s ease;
          position: relative;
        }
        .course-card:hover {
          border-color: var(--border-gold);
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 198, 41, 0.12);
        }
        .course-card-top {
          width: 100%;
          height: 220px;
          position: relative;
          background: #111;
        }
        .course-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .course-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.1) 0%, rgba(9, 9, 9, 0.8) 100%);
        }
        .course-featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 198, 41, 0.95);
          color: #090909;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        .course-duration-chip {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(14, 14, 14, 0.85);
          backdrop-filter: blur(6px);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .course-card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .course-card-title {
          font-family: var(--font-heading);
          font-size: 1.28rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }
        .course-card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .course-topics-preview {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }
        .topics-preview-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-gold);
          margin-bottom: 0.4rem;
        }
        .topics-mini-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .topic-mini-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .check-gold {
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        .course-card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
        .btn-card-details {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color 0.2s ease;
          padding: 0.4rem 0.2rem;
        }
        .btn-card-details:hover {
          color: var(--accent-gold);
        }
        .course-card-enquire {
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
};

export default CourseCard;
