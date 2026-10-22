import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqData } from '../data/faq';

const FAQAccordion = () => {
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default
  const { language } = useLanguage();

  const toggleFAQ = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="faq-accordion-wrap">
      {faqData.map((faq, index) => {
        const isOpen = openIds.includes(faq.id);
        const question = language === 'mr' ? faq.questionMr : faq.question;
        const answer = language === 'mr' ? faq.answerMr : faq.answer;

        return (
          <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => toggleFAQ(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              id={`faq-btn-${faq.id}`}
            >
              <div className="faq-q-left">
                <span className="faq-num">0{index + 1}</span>
                <span className="faq-q-text">{question}</span>
              </div>
              <motion.div
                className="faq-icon-wrap"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="faq-answer-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="faq-answer-content">
                    <p>{answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <style>{`
        .faq-accordion-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          max-width: 860px;
          margin: 0 auto;
        }
        .faq-item {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item:hover {
          border-color: var(--border-gold);
        }
        .faq-item.open {
          border-color: var(--accent-gold);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          text-align: left;
          background: none;
          color: var(--text-primary);
          gap: 1rem;
          cursor: pointer;
        }
        .faq-q-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .faq-num {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent-gold);
          flex-shrink: 0;
        }
        .faq-q-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.4;
        }
        .faq-item.open .faq-q-text {
          color: var(--accent-gold);
        }
        .faq-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-gold);
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .faq-item.open .faq-icon-wrap {
          background: var(--accent-gold);
          color: #090909;
        }
        .faq-answer-panel {
          overflow: hidden;
        }
        .faq-answer-content {
          padding: 0 1.5rem 1.5rem 3.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }
        @media (max-width: 640px) {
          .faq-answer-content {
            padding-left: 1.5rem;
          }
        }
        .faq-answer-content p {
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
};

export default FAQAccordion;
