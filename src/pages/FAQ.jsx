import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { instituteInfo } from '../data/instituteInfo';
import FAQAccordion from '../components/FAQAccordion';

const FAQ = () => {
  const { t, language } = useLanguage();

  return (
    <div className="page-faq">
      {/* SECTION 1: FAQ HERO */}
      <section className="faq-hero-section">
        <div className="faq-hero-bg">
          <img 
            src="/images/gallery-classroom-interactive.png" 
            alt="FAQ at Tushar Pulate Institute" 
            className="faq-hero-bg-img"
          />
          <div className="faq-hero-overlay"></div>
        </div>

        <div className="container faq-hero-container">
          <motion.div 
            className="faq-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.faq.hero.eyebrow}</span>
            <h1 className="faq-hero-title">{t.faq.hero.title}</h1>
            <p className="faq-hero-subtitle">{t.faq.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ACCORDION LIST */}
      <section className="section">
        <div className="container">
          <div className="faq-layout">
            <FAQAccordion />

            {/* Direct Help Callout */}
            <div className="faq-support-card">
              <div className="faq-supp-left">
                <HelpCircle size={24} color="#FFC629" />
                <div>
                  <h4 className="faq-supp-title">{t.faq.supportNotice}</h4>
                  <p className="faq-supp-sub">{t.faq.contactSupport}</p>
                </div>
              </div>
              <div className="faq-supp-actions">
                <a 
                  href={`tel:${instituteInfo.phone.replace(/[^0-9+]/g, '')}`} 
                  className="btn btn-primary btn-sm"
                >
                  <Phone size={15} />
                  <span>{language === 'mr' ? 'कॉल करा' : 'Call Desk'}</span>
                </a>
                <a 
                  href={`https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(
                    language === 'mr' 
                      ? 'नमस्कार, मला कोर्सेस आणि ऍडमिशन बद्दल काही शंका विचारायच्या आहेत.' 
                      : 'Hello, I have questions regarding admissions and courses at Tushar Pulate Institute.'
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM CTA */}
      <section className="section section-darker">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'मार्गदर्शन हवे आहे का?' : 'Still Deciding?'}
              </span>
              <h2 className="cta-headline">
                {language === 'mr' ? 'आमच्या मार्गदर्शकांशी बोला' : 'Speak Directly With Our Counselors'}
              </h2>
              <p className="cta-subheadline">
                {language === 'mr' 
                  ? 'आपल्या छंदाला व्यावसायिक रूप देण्यासाठी कोणता कोर्स सर्वात योग्य ठरेल हे जाणून घ्या.'
                  : 'Let us help you understand the batch schedule, fee structure, and hostel availability.'}
              </p>
              <div className="cta-btn-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>{language === 'mr' ? 'प्रवेश अर्ज भरा' : 'Fill Admission Enquiry Form'}</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .faq-hero-section {
          position: relative;
          min-height: 440px;
          display: flex;
          align-items: center;
          padding-top: 130px;
          padding-bottom: 70px;
          overflow: hidden;
        }
        .faq-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .faq-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) contrast(1.15);
        }
        .faq-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.75) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .faq-hero-container {
          position: relative;
          z-index: 2;
        }
        .faq-hero-content {
          max-width: 820px;
        }
        .faq-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          color: #FFFFFF;
          margin-bottom: 1rem;
          line-height: 1.18;
        }
        .faq-hero-subtitle {
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .faq-layout {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        .faq-support-card {
          max-width: 860px;
          margin: 0 auto;
          width: 100%;
          background: #141414;
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-md);
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .faq-supp-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .faq-supp-title {
          font-size: 1.05rem;
          color: #FFFFFF;
          font-weight: 600;
        }
        .faq-supp-sub {
          font-size: 0.9rem;
          color: var(--accent-gold);
        }
        .faq-supp-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
