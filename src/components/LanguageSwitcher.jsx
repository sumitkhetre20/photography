import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`lang-switcher-wrap ${className}`} role="group" aria-label="Language selection">
      <div className="lang-switcher">
        <Globe size={15} className="lang-icon" />
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          aria-pressed={language === 'en'}
        >
          English
        </button>
        <span className="lang-sep">|</span>
        <button
          type="button"
          onClick={() => setLanguage('mr')}
          className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
          aria-pressed={language === 'mr'}
        >
          मराठी
        </button>
      </div>

      <style>{`
        .lang-switcher-wrap {
          display: inline-flex;
          align-items: center;
        }
        .lang-switcher {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          transition: border-color 0.2s ease;
        }
        .lang-switcher:hover {
          border-color: var(--accent-gold);
        }
        .lang-icon {
          color: var(--accent-gold);
          opacity: 0.9;
        }
        .lang-btn {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.15rem 0.35rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .lang-btn:hover {
          color: var(--text-primary);
        }
        .lang-btn.active {
          color: #090909;
          background: var(--accent-gold);
        }
        .lang-sep {
          color: var(--border-color);
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
