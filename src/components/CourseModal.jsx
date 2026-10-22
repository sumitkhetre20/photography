import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Clock, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { instituteInfo } from '../data/instituteInfo';

const CourseModal = ({ course, isOpen, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!course) return null;

  const title = language === 'mr' ? course.titleMr : course.title;
  const fullDesc = language === 'mr' ? course.fullDescMr : course.fullDesc;
  const topics = language === 'mr' ? course.topicsMr : course.topics;
  const highlights = language === 'mr' ? course.highlightsMr : course.highlights;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="course-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
          <motion.div
            className="course-modal-panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-info">
                <span className="badge-gold">
                  {instituteInfo.duration} {language === 'mr' ? 'अभ्यासक्रम' : 'Course Module'}
                </span>
                <h3 className="modal-course-title">{title}</h3>
              </div>
              <button 
                type="button" 
                className="modal-close-btn" 
                onClick={onClose}
                aria-label={t.courses.modalClose}
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Image banner inside modal */}
              <div className="modal-img-wrap">
                <img src={course.image} alt={title} className="modal-img" />
                <div className="modal-img-overlay">
                  <span className="modal-badge-inst">आयुष्याची फोटोग्राफी</span>
                </div>
              </div>

              <div className="modal-content-grid">
                <div>
                  <h4 className="modal-sec-title">
                    {language === 'mr' ? 'कोर्सचा सारांश' : 'Course Overview'}
                  </h4>
                  <p className="modal-desc-text">{fullDesc}</p>

                  <h4 className="modal-sec-title" style={{ marginTop: '1.5rem' }}>
                    {t.courses.topicsTitle}
                  </h4>
                  <ul className="modal-topics-list">
                    {topics.map((topic, idx) => (
                      <li key={idx} className="topic-item">
                        <CheckCircle2 size={16} className="topic-icon" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-sidebar-card">
                  <h4 className="modal-sec-title">
                    {t.courses.highlightsTitle}
                  </h4>
                  <ul className="modal-highlights-list">
                    {highlights.map((h, idx) => (
                      <li key={idx}>
                        <span className="hl-bullet"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="modal-pricing-box">
                    <div className="pricing-row">
                      <span className="p-label">{language === 'mr' ? 'कोर्स फी:' : 'Full Course Fee:'}</span>
                      <span className="p-val">{instituteInfo.courseFee}</span>
                    </div>
                    <div className="pricing-row">
                      <span className="p-label">{language === 'mr' ? 'सीट बुकिंग:' : 'Booking Deposit:'}</span>
                      <span className="p-val-sub">{instituteInfo.seatBooking}</span>
                    </div>
                    <p className="p-note">
                      {language === 'mr' ? instituteInfo.seatBookingNoteMarathi : instituteInfo.seatBookingNote}
                    </p>
                  </div>

                  <Link 
                    to={`/contact?course=${course.id}`} 
                    className="btn btn-primary btn-block modal-enquire-btn"
                    onClick={onClose}
                  >
                    <span>{t.courses.enquireNow}</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>

            <style>{`
              .course-modal-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1.25rem;
              }
              .course-modal-panel {
                background: #141414;
                border: 1px solid var(--border-gold);
                border-radius: var(--radius-md);
                width: 100%;
                max-width: 860px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 198, 41, 0.15);
                position: relative;
              }
              .modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.5rem 1.75rem 1rem;
                border-bottom: 1px solid var(--border-color);
                position: sticky;
                top: 0;
                background: #141414;
                z-index: 10;
              }
              .modal-header-info {
                display: flex;
                flex-direction: column;
                gap: 0.35rem;
              }
              .modal-course-title {
                font-family: var(--font-heading);
                font-size: 1.5rem;
                color: #FFFFFF;
                line-height: 1.2;
              }
              .modal-close-btn {
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid var(--border-color);
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-secondary);
                transition: all 0.2s ease;
              }
              .modal-close-btn:hover {
                background: var(--accent-gold);
                color: #090909;
                border-color: var(--accent-gold);
              }
              .modal-body {
                padding: 1.5rem 1.75rem 2rem;
              }
              .modal-img-wrap {
                width: 100%;
                height: 240px;
                border-radius: var(--radius-sm);
                overflow: hidden;
                position: relative;
                margin-bottom: 1.75rem;
                border: 1px solid var(--border-color);
              }
              .modal-img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .modal-img-overlay {
                position: absolute;
                bottom: 12px;
                left: 12px;
              }
              .modal-badge-inst {
                background: rgba(9, 9, 9, 0.85);
                backdrop-filter: blur(6px);
                color: var(--accent-gold);
                font-weight: 700;
                font-size: 0.8rem;
                padding: 0.35rem 0.75rem;
                border-radius: var(--radius-sm);
                border: 1px solid var(--border-gold);
              }
              .modal-content-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
              }
              @media (min-width: 768px) {
                .modal-content-grid {
                  grid-template-columns: 1.35fr 1fr;
                }
              }
              .modal-sec-title {
                font-family: var(--font-heading);
                font-size: 1.1rem;
                color: #FFFFFF;
                margin-bottom: 0.85rem;
                letter-spacing: 0.03em;
              }
              .modal-desc-text {
                font-size: 0.95rem;
                color: var(--text-secondary);
                line-height: 1.65;
              }
              .modal-topics-list {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 0.65rem;
              }
              .topic-item {
                display: flex;
                align-items: flex-start;
                gap: 0.65rem;
                font-size: 0.92rem;
                color: var(--text-primary);
                line-height: 1.5;
              }
              .topic-icon {
                color: var(--accent-gold);
                margin-top: 3px;
                flex-shrink: 0;
              }
              .modal-sidebar-card {
                background: #1a1a1a;
                border: 1px solid var(--border-color);
                border-radius: var(--radius-sm);
                padding: 1.5rem;
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
              }
              .modal-highlights-list {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 0.6rem;
              }
              .modal-highlights-list li {
                display: flex;
                align-items: flex-start;
                gap: 0.6rem;
                font-size: 0.88rem;
                color: var(--text-secondary);
              }
              .hl-bullet {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: var(--accent-gold);
                margin-top: 7px;
                flex-shrink: 0;
              }
              .modal-pricing-box {
                background: rgba(255, 198, 41, 0.06);
                border: 1px solid var(--border-gold);
                padding: 1rem;
                border-radius: var(--radius-sm);
              }
              .pricing-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.4rem;
              }
              .p-label {
                font-size: 0.85rem;
                color: var(--text-secondary);
              }
              .p-val {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--accent-gold);
              }
              .p-val-sub {
                font-size: 0.95rem;
                font-weight: 600;
                color: #FFFFFF;
              }
              .p-note {
                font-size: 0.75rem;
                color: var(--text-muted);
                margin-top: 0.5rem;
                line-height: 1.4;
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CourseModal;
