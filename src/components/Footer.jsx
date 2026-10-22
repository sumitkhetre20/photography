import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { instituteInfo } from '../data/instituteInfo';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon } from './SocialIcons';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-top-accent"></div>
      <div className="container footer-content">
        <div className="footer-compact-wrap">
          {/* Left Block: Brand Logo & ISO Badge */}
          <div className="footer-brand-block">
            <Link to="/" className="footer-brand-link" aria-label="आयुष्याचं फोटोग्राफी - Journey From Nothing To Everything">
              <BrandLogo size="footer" />
            </Link>
            <div className="footer-cert-badge">
              <Award size={15} color="#FFC629" />
              <span>{t.footer.certificationNotice}</span>
            </div>
          </div>

          {/* Right Block: Direct Contact & Official Social Icons */}
          <div className="footer-contact-block">
            {/* Quick Contact Row */}
            <div className="footer-contact-items">
              <a href={`tel:${instituteInfo.phone.replace(/[^0-9+]/g, '')}`} className="footer-quick-link">
                <Phone size={15} className="text-gold" />
                <span>{instituteInfo.phone}</span>
              </a>

              <div className="footer-address-text">
                <MapPin size={15} className="text-gold flex-shrink-0" />
                <span>{language === 'mr' ? instituteInfo.addressMarathi : instituteInfo.address}</span>
              </div>
            </div>

            {/* Official Social Media Buttons */}
            <div className="footer-social-row">
              <span className="footer-social-label">
                {language === 'mr' ? 'अधिकृत सोशल मीडिया:' : 'Official Socials:'}
              </span>
              <div className="footer-social-buttons">
                {/* WhatsApp */}
                <a 
                  href={`https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(
                    language === 'mr' 
                      ? 'नमस्कार, मला ऍडमिशन बद्दल थेट बोलायचे आहे.' 
                      : 'Hello, I want to chat directly regarding photography admission.'
                  )}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill-btn whatsapp-hover"
                  title="Direct WhatsApp Helpline (+91 84599 12189)"
                  aria-label="Direct WhatsApp Chat"
                >
                  <WhatsAppIcon size={20} />
                  <span>WhatsApp</span>
                </a>

                {/* Instagram Institute */}
                <a 
                  href={instituteInfo.socials.instagramInstitute.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill-btn instagram-hover"
                  aria-label="Instagram Institute"
                  title="Instagram: @aayushyachi_photography"
                >
                  <InstagramIcon size={20} />
                  <span>Instagram</span>
                </a>

                {/* YouTube Channel */}
                <a 
                  href={instituteInfo.socials.youtube.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-pill-btn youtube-hover"
                  aria-label="YouTube Channel"
                  title="YouTube: @Aayushyachi_Photography"
                >
                  <YouTubeIcon size={20} />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar (Compressed) */}
        <div className="footer-bottom-compact">
          <p className="copyright-text">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="disclaimer-text">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #0b0b0b;
          border-top: 1px solid var(--border-color);
          position: relative;
          color: var(--text-secondary);
        }
        .footer-top-accent {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--accent-gold) 50%, transparent 100%);
        }
        .footer-content {
          padding-top: 2rem;
          padding-bottom: 1.25rem;
        }
        .footer-compact-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 900px) {
          .footer-compact-wrap {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 2.5rem;
          }
        }
        .footer-brand-block {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-width: 340px;
        }
        .footer-brand-link {
          display: inline-block;
          text-decoration: none;
        }
        .footer-brand-link .brand-logo-svg {
          height: 54px;
          max-width: 220px;
          width: auto;
          color: #FFFFFF;
          transition: transform 0.25s ease, filter 0.25s ease, color 0.25s ease;
        }
        .footer-brand-link:hover .brand-logo-svg {
          transform: scale(1.02);
          color: var(--accent-gold);
          filter: drop-shadow(0 0 10px rgba(255, 198, 41, 0.4));
        }
        @media (max-width: 640px) {
          .footer-brand-link .brand-logo-svg {
            height: 44px;
            max-width: 190px;
          }
        }
        .footer-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 198, 41, 0.08);
          border: 1px solid var(--border-gold);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          color: var(--accent-gold);
          font-weight: 600;
          width: fit-content;
        }
        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 900px) {
          .footer-contact-block {
            align-items: flex-end;
          }
        }
        .footer-contact-items {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem 1.5rem;
          font-size: 0.88rem;
        }
        .footer-quick-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .footer-quick-link:hover {
          color: var(--accent-gold);
        }
        .footer-address-text {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: var(--text-muted);
          font-size: 0.84rem;
        }
        .footer-social-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-social-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .footer-social-buttons {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .social-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          font-weight: 600;
          color: #FFFFFF;
          transition: all 0.25s ease;
        }
        .social-pill-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.08);
        }
        .whatsapp-hover:hover {
          border-color: #25D366;
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.3);
        }
        .instagram-hover:hover {
          border-color: #E1306C;
          box-shadow: 0 0 10px rgba(225, 48, 108, 0.3);
        }
        .youtube-hover:hover {
          border-color: #FF0000;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
        }
        .footer-bottom-compact {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        @media (min-width: 768px) {
          .footer-bottom-compact {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
