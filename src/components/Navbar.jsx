import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SocialMediaBar } from './SocialIcons';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/courses', label: t.nav.courses },
    { to: '/facilities', label: t.nav.facilities },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/faq', label: t.nav.faq },
    { to: '/contact', label: t.nav.contact }
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo & Brand Typography */}
          <Link to="/" className="navbar-brand" aria-label="आयुष्याचं फोटोग्राफी - Journey From Nothing To Everything">
            <BrandLogo size="navbar" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `nav-link nav-link-animated ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div className="navbar-actions">
            <SocialMediaBar size={25} className="nav-social-bar" />
            <LanguageSwitcher />
            <Link to="/contact" className="btn btn-primary btn-sm nav-enquire-btn">
              <span>{t.nav.enquireNow}</span>
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} color="#FFC629" /> : <Menu size={26} color="#FFFFFF" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="container mobile-menu-content">
              <div className="mobile-menu-top">
                <span className="mobile-menu-label">Menu</span>
                <LanguageSwitcher />
              </div>
              <div className="mobile-social-connect">
                <span className="mobile-social-heading">
                  {language === 'mr' ? 'सोशल मीडिया व थेट संपर्क:' : 'Direct Social Contact:'}
                </span>
                <SocialMediaBar size={28} showLabels={true} className="mobile-social-bar" />
              </div>
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `mobile-nav-link ${isActive ? 'active' : ''}`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mobile-menu-footer">
                <Link
                  to="/contact"
                  className="btn btn-primary btn-block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{t.nav.enquireNow}</span>
                  <ArrowUpRight size={18} />
                </Link>
                <p className="mobile-phone-hint">Direct helpline: +91 84599 12189</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.1rem 0;
          transition: all 0.3s ease;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.85) 0%, rgba(9, 9, 9, 0) 100%);
        }
        .navbar-header.scrolled {
          background: rgba(14, 14, 14, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        }
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .navbar-brand .brand-logo-svg {
          height: 48px;
          max-width: 220px;
          width: auto;
          color: #FFFFFF;
          transition: transform 0.25s ease, filter 0.25s ease, color 0.25s ease;
        }
        .navbar-brand:hover .brand-logo-svg {
          transform: scale(1.03);
          color: var(--accent-gold);
          filter: drop-shadow(0 0 10px rgba(255, 198, 41, 0.4));
        }
        @media (max-width: 640px) {
          .navbar-brand .brand-logo-svg {
            height: 38px;
            max-width: 170px;
          }
        }
        .desktop-nav {
          display: none;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 1.6rem;
          list-style: none;
        }
        .nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: var(--accent-gold);
        }
        .nav-link.active {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .nav-social-bar {
          display: none;
        }
        @media (min-width: 480px) {
          .nav-social-bar {
            display: inline-flex;
          }
        }
        .btn-sm {
          padding: 0.55rem 1.2rem;
          font-size: 0.85rem;
        }
        .nav-enquire-btn {
          display: none;
        }
        .mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem;
          border-radius: var(--radius-sm);
        }
        @media (min-width: 1024px) {
          .desktop-nav {
            display: block;
          }
          .nav-enquire-btn {
            display: inline-flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 68px;
          left: 0;
          width: 100%;
          background: rgba(14, 14, 14, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          z-index: 999;
          padding: 1.5rem 0 2rem;
          max-height: calc(100vh - 68px);
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
        }
        .mobile-menu-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 0.85rem;
        }
        .mobile-social-connect {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-social-heading {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--accent-gold);
          font-weight: 700;
        }
        .mobile-social-bar {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .mobile-menu-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .mobile-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0.5rem;
          font-size: 1.15rem;
          font-weight: 500;
          color: var(--text-primary);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--accent-gold);
          background: rgba(255, 198, 41, 0.08);
          padding-left: 1rem;
        }
        .mobile-menu-footer {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }
        .btn-block {
          width: 100%;
        }
        .mobile-phone-hint {
          text-align: center;
          margin-top: 0.85rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
};

export default Navbar;
