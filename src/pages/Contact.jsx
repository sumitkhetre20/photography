import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { instituteInfo } from '../data/instituteInfo';
import { coursesData } from '../data/courses';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon } from '../components/SocialIcons';

const Contact = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');

  // Pre-fill course from query parameter if present
  useEffect(() => {
    const queryCourse = searchParams.get('course');
    if (queryCourse) {
      const match = coursesData.find(c => c.id === queryCourse);
      if (match) {
        setFormData(prev => ({ ...prev, course: match.id }));
      }
    }
  }, [searchParams]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = t.contact.form.errors.nameRequired;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = t.contact.form.errors.phoneRequired;
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phone = t.contact.form.errors.phoneInvalid;
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t.contact.form.errors.emailInvalid;
    }

    if (!formData.course) {
      errs.course = t.contact.form.errors.courseRequired;
    }

    if (!formData.message.trim()) {
      errs.message = t.contact.form.errors.messageRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Find course name in selected language
    const selectedCourseObj = coursesData.find(c => c.id === formData.course);
    const courseTitle = selectedCourseObj 
      ? (language === 'mr' ? selectedCourseObj.titleMr : selectedCourseObj.title)
      : (formData.course === 'all' 
          ? (language === 'mr' ? 'संपूर्ण ३० दिवसांचा मास्टर कोर्स' : 'Complete 30-Day Master Course') 
          : formData.course);

    // Build the formatted WhatsApp message
    const messageLines = [
      language === 'mr' 
        ? `*नवीन प्रवेश चौकशी - आयुष्याची फोटोग्राफी*` 
        : `*New Admission Enquiry - Tushar Pulate Institute*`,
      `---------------------------------`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Mobile:* ${formData.phone}`,
      formData.email.trim() ? `✉️ *Email:* ${formData.email}` : null,
      `🎓 *Selected Course:* ${courseTitle}`,
      `📝 *Message / Query:* ${formData.message}`,
      `---------------------------------`,
      `_Sent from ayushyachiphotography.com_`
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waLink = `https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;

    setWhatsAppUrl(waLink);
    setSubmitted(true);

    // Explicitly open WhatsApp link
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="page-contact">
      {/* SECTION 1: CONTACT HERO */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img 
            src="/images/quote-tushar.jpg" 
            alt="Contact आयुष्याची फोटोग्राफी" 
            className="contact-hero-bg-img"
          />
          <div className="contact-hero-overlay"></div>
        </div>

        <div className="container contact-hero-container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">{t.contact.hero.eyebrow}</span>
            <h1 className="contact-hero-title">{t.contact.hero.title}</h1>
            <p className="contact-hero-subtitle">{t.contact.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FORM & INFORMATION 2-COLUMN SECTION */}
      <section className="section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* COLUMN 1: ADMISSION ENQUIRY FORM */}
            <motion.div 
              className="contact-form-card"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h2 className="form-card-title">{t.contact.form.title}</h2>
              <p className="form-card-subtitle">{t.contact.form.subtitle}</p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={44} color="#FFC629" className="success-icon" />
                  <h3 className="success-heading">{t.contact.form.successTitle}</h3>
                  <p className="success-desc">{t.contact.form.successDesc}</p>
                  
                  {whatsAppUrl && (
                    <a 
                      href={whatsAppUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-block"
                      style={{ marginTop: '1.25rem', gap: '0.6rem' }}
                    >
                      <WhatsAppIcon size={22} />
                      <span>{t.contact.form.openWhatsAppBtn}</span>
                    </a>
                  )}

                  <button 
                    type="button" 
                    className="btn btn-secondary btn-block" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', course: '', message: '' });
                    }}
                    style={{ marginTop: '0.85rem' }}
                  >
                    <span>{language === 'mr' ? 'नवीन अर्ज भरा' : 'Submit Another Enquiry'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="admission-form">
                  {/* Field 1: Full Name */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      {t.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  {/* Field 2 & 3: Mobile & Email */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                        placeholder={t.contact.form.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Field 4: Select Course */}
                  <div className="form-group">
                    <label htmlFor="course" className="form-label">
                      {t.contact.form.courseLabel}
                    </label>
                    <select
                      id="course"
                      className={`form-select ${errors.course ? 'input-error' : ''}`}
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      required
                    >
                      <option value="">-- {t.contact.form.courseDefault} --</option>
                      <option value="all">{t.contact.form.allCoursesOption}</option>
                      {coursesData.map((course) => (
                        <option key={course.id} value={course.id}>
                          {language === 'mr' ? course.titleMr : course.title}
                        </option>
                      ))}
                    </select>
                    {errors.course && <span className="error-text">{errors.course}</span>}
                  </div>

                  {/* Field 5: Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block submit-btn">
                    <Send size={17} />
                    <span>{t.contact.form.submitBtn}</span>
                  </button>

                  <p className="form-disclaimer-note">
                    {t.contact.form.whatsappNotice}
                  </p>
                </form>
              )}
            </motion.div>

            {/* COLUMN 2: INSTITUTE CONTACT INFO & DETAILS */}
            <motion.div 
              className="contact-info-col"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className="contact-info-card">
                <span className="section-eyebrow">{t.contact.info.title}</span>
                <h3 className="institute-official-name">{instituteInfo.name}</h3>
                <span className="institute-official-brand">{instituteInfo.nameMarathi}</span>

                <div className="contact-details-list">
                  {/* Phone */}
                  <div className="c-detail-item">
                    <div className="c-detail-icon-box">
                      <Phone size={20} color="#FFC629" />
                    </div>
                    <div>
                      <span className="c-detail-label">{t.contact.info.phoneTitle}</span>
                      <a href={`tel:${instituteInfo.phone.replace(/[^0-9+]/g, '')}`} className="c-detail-val link-gold">
                        {instituteInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="c-detail-item">
                    <div className="c-detail-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', borderColor: 'rgba(37, 211, 102, 0.4)' }}>
                      <WhatsAppIcon size={24} />
                    </div>
                    <div>
                      <span className="c-detail-label">WhatsApp Helpline</span>
                      <a 
                        href={`https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(
                          language === 'mr' 
                            ? 'नमस्कार, मला आयुष्याची फोटोग्राफी इन्स्टिट्यूटच्या ऍडमिशन बद्दल माहिती हवी आहे.' 
                            : 'Hello, I want to enquire about admission at Tushar Pulate Institute.'
                        )}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="c-detail-val"
                        style={{ color: '#25D366', fontWeight: 600 }}
                      >
                        +91 84599 12189 (Chat Directly on WhatsApp)
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="c-detail-item">
                    <div className="c-detail-icon-box">
                      <MapPin size={20} color="#FFC629" />
                    </div>
                    <div>
                      <span className="c-detail-label">{t.contact.info.addressTitle}</span>
                      <p className="c-detail-val">
                        {language === 'mr' ? instituteInfo.addressMarathi : instituteInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social channels */}
                <div className="contact-socials-box">
                  <span className="c-detail-label">{t.contact.info.socialTitle}</span>
                  <div className="contact-social-pills">
                    <a 
                      href={instituteInfo.socials.instagramInstitute.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="c-social-pill"
                    >
                      <InstagramIcon size={22} />
                      <span>{instituteInfo.socials.instagramInstitute.handle}</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a 
                      href={instituteInfo.socials.instagramFounder.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="c-social-pill"
                    >
                      <InstagramIcon size={22} />
                      <span>Founder: {instituteInfo.socials.instagramFounder.handle}</span>
                      <ArrowUpRight size={14} />
                    </a>

                    <a 
                      href={instituteInfo.socials.youtube.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="c-social-pill"
                    >
                      <YouTubeIcon size={22} />
                      <span>{instituteInfo.socials.youtube.handle}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAPS EMBED */}
              <div className="contact-map-card">
                <div className="map-header">
                  <span className="map-title">{t.contact.mapTitle}</span>
                  <a 
                    href={instituteInfo.mapDirectionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="map-ext-link"
                  >
                    <span>{t.contact.info.directionsBtn}</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
                <div className="map-embed-wrapper">
                  <iframe
                    title="Tushar Pulate Institute Location - Parshwa Capital Pune"
                    src={instituteInfo.mapEmbedUrl}
                    width="100%"
                    height="210"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT CTA */}
      <section className="section section-darker">
        <div className="container">
          <div className="cta-cinematic-banner">
            <div className="cta-content">
              <span className="section-eyebrow">
                {language === 'mr' ? 'थेट संवाद' : 'Direct Assistance'}
              </span>
              <h2 className="cta-headline">{t.contact.cta.title}</h2>
              <p className="cta-subheadline">{t.contact.cta.subtitle}</p>
              <div className="cta-btn-row">
                <a 
                  href={`tel:${instituteInfo.phone.replace(/[^0-9+]/g, '')}`} 
                  className="btn btn-primary"
                >
                  <Phone size={17} />
                  <span>{t.contact.cta.callBtn}</span>
                </a>
                <a 
                  href={`https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(
                    language === 'mr' 
                      ? 'नमस्कार, मला प्रवेश प्रक्रियेबद्दल जाणून घ्यायचे आहे.' 
                      : 'Hello, I would like to enquire about admission.'
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <WhatsAppIcon size={18} />
                  <span>{t.contact.cta.whatsappBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Page Spacing Harmonization */
        .page-contact .section {
          padding: 3.25rem 0;
        }
        @media (max-width: 768px) {
          .page-contact .section {
            padding: 2.25rem 0;
          }
        }

        .contact-hero-section {
          position: relative;
          min-height: 380px;
          display: flex;
          align-items: center;
          padding-top: 115px;
          padding-bottom: 50px;
          overflow: hidden;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .contact-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.35) contrast(1.15);
        }
        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.75) 0%, rgba(9, 9, 9, 0.95) 100%);
        }
        .contact-hero-container {
          position: relative;
          z-index: 2;
        }
        .contact-hero-content {
          max-width: 820px;
        }
        .contact-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          line-height: 1.18;
        }
        .contact-hero-subtitle {
          font-size: clamp(1.02rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* 2-Column Layout */
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (min-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 2.25rem;
          }
        }

        /* Form Card - Compressed & Space Efficient */
        .contact-form-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.6rem 1.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }
        .form-card-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          color: #FFFFFF;
          margin-bottom: 0.3rem;
          line-height: 1.25;
        }
        .form-card-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.15rem;
        }
        .admission-form {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.85rem;
        }
        @media (min-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr 1fr;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: 0.02em;
        }
        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          background: #111111;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: #FFFFFF;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-select {
          cursor: pointer;
        }
        .form-select option {
          background: #191919;
          color: #FFFFFF;
        }
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: var(--accent-gold);
          box-shadow: 0 0 0 2px rgba(255, 198, 41, 0.2);
        }
        .input-error {
          border-color: #ff5252 !important;
        }
        .error-text {
          font-size: 0.75rem;
          color: #ff6b6b;
          margin-top: 0.15rem;
        }
        .submit-btn {
          margin-top: 0.35rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.95rem;
          font-weight: 700;
        }
        .form-disclaimer-note {
          font-size: 0.74rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-top: 0.35rem;
          text-align: center;
        }

        /* Success Box */
        .form-success-box {
          background: rgba(255, 198, 41, 0.05);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-sm);
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .success-icon {
          margin: 0 auto 0.85rem;
        }
        .success-heading {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }
        .success-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Column 2: Info Card - Compressed */
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }
        .contact-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.6rem 1.75rem;
        }
        .institute-official-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: #FFFFFF;
          margin-top: 0.3rem;
          margin-bottom: 0.15rem;
          line-height: 1.25;
        }
        .institute-official-brand {
          display: block;
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--accent-gold);
          margin-bottom: 1.15rem;
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 1.25rem;
        }
        .c-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .c-detail-icon-box {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: rgba(255, 198, 41, 0.1);
          border: 1px solid var(--border-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .c-detail-label {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
        }
        .c-detail-val {
          font-size: 0.9rem;
          color: #FFFFFF;
          line-height: 1.45;
        }
        .link-gold {
          color: var(--accent-gold);
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .link-gold:hover {
          color: #FFF;
          text-decoration: underline;
        }
        .contact-socials-box {
          border-top: 1px solid var(--border-color);
          padding-top: 1.15rem;
        }
        .contact-social-pills {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-top: 0.5rem;
        }
        .c-social-pill {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          padding: 0.45rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }
        .c-social-pill:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          background: rgba(255, 198, 41, 0.08);
          transform: translateX(3px);
        }

        /* Map Card */
        .contact-map-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .map-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }
        .map-title {
          font-family: var(--font-heading);
          font-size: 0.98rem;
          color: #FFFFFF;
        }
        .map-ext-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent-gold);
          transition: color 0.2s ease;
        }
        .map-ext-link:hover {
          color: #FFF;
        }
        .map-embed-wrapper {
          width: 100%;
          line-height: 0;
        }

        /* CTA Cinematic Banner - Compressed */
        .cta-cinematic-banner {
          background: linear-gradient(145deg, #181818 0%, #101010 100%);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-lg);
          padding: 2.5rem 1.75rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-elevation);
        }
        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }
        .cta-headline {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 3.2vw, 2.35rem);
          color: #FFFFFF;
          margin-bottom: 0.65rem;
          line-height: 1.25;
        }
        .cta-subheadline {
          font-size: 0.98rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.55;
        }
        .cta-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .contact-form-card,
          .contact-info-card {
            padding: 1.25rem 1rem;
          }
          .form-card-title {
            font-size: 1.3rem;
          }
          .submit-btn {
            padding: 0.7rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
