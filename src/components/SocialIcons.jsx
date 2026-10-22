import React from 'react';
import { instituteInfo } from '../data/instituteInfo';

export const WhatsAppIcon = ({ size = 28, className = '' }) => (
  <svg 
    viewBox="0 0 32 32" 
    width={size} 
    height={size} 
    className={`social-svg-icon ${className}`}
    style={{ display: 'block', flexShrink: 0 }}
  >
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path 
      d="M23.3 8.7C21.4 6.8 18.8 5.7 16 5.7c-5.7 0-10.3 4.6-10.3 10.3 0 1.8.5 3.6 1.4 5.1L5.6 26.4l5.4-1.4c1.5.8 3.2 1.3 5 1.3h0c5.7 0 10.3-4.6 10.3-10.3 0-2.8-1.1-5.3-3-7.3zM16 24.6h0c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.9-1.4-1.4-3-1.4-4.7 0-4.7 3.9-8.6 8.6-8.6 2.3 0 4.5.9 6.1 2.5 1.6 1.6 2.5 3.8 2.5 6.1 0 4.7-3.8 8.7-8.4 8.7zm4.7-6.5c-.3-.1-1.5-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.2.2-.3.3-.4.1-.2 0-.3 0-.5s-.6-1.5-.8-2c-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" 
      fill="#FFFFFF"
    />
  </svg>
);

export const InstagramIcon = ({ size = 28, className = '' }) => (
  <svg 
    viewBox="0 0 32 32" 
    width={size} 
    height={size} 
    className={`social-svg-icon ${className}`}
    style={{ display: 'block', flexShrink: 0 }}
  >
    <defs>
      <radialGradient id="igGradient" cx="0.2" cy="1" r="1">
        <stop offset="0%" stopColor="#FFDD55"/>
        <stop offset="25%" stopColor="#FF543E"/>
        <stop offset="50%" stopColor="#C837AB"/>
        <stop offset="100%" stopColor="#4B53D3"/>
      </radialGradient>
    </defs>
    <rect width="32" height="32" rx="7.5" fill="url(#igGradient)"/>
    <path 
      d="M16 8.5c2.4 0 2.7 0 3.7.1 2.5.1 3.7 1.3 3.8 3.8.1 1 .1 1.3.1 3.7s0 2.7-.1 3.7c-.1 2.5-1.3 3.7-3.8 3.8-1 .1-1.3.1-3.7.1s-2.7 0-3.7-.1c-2.5-.1-3.7-1.3-3.8-3.8-.1-1-.1-1.3-.1-3.7s0-2.7.1-3.7c.1-2.5 1.3-3.7 3.8-3.8 1-.1 1.3-.1 3.7-.1zm0 2.2c-2.4 0-2.7 0-3.6.1-1.6.1-2.2.7-2.3 2.3-.1.9-.1 1.2-.1 3.6s0 2.7.1 3.6c.1 1.6.7 2.2 2.3 2.3.9.1 1.2.1 3.6.1s2.7 0 3.6-.1c1.6-.1 2.2-.7 2.3-2.3.1-.9.1-1.2.1-3.6s0-2.7-.1-3.6c-.1-1.6-.7-2.2-2.3-2.3-.9-.1-1.2-.1-3.6-.1zm0 3.6a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4zm0 2.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.4-3.4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" 
      fill="#FFFFFF"
    />
  </svg>
);

export const YouTubeIcon = ({ size = 28, className = '' }) => (
  <svg 
    viewBox="0 0 32 32" 
    width={size} 
    height={size} 
    className={`social-svg-icon ${className}`}
    style={{ display: 'block', flexShrink: 0 }}
  >
    <rect width="32" height="32" rx="7.5" fill="#FF0000"/>
    <path 
      d="M24.8 11.2c-.3-1-1-1.8-2-2.1C21 8.6 16 8.6 16 8.6s-5 0-6.8.5c-1 .3-1.7 1.1-2 2.1C6.7 13 6.7 16 6.7 16s0 3 .5 4.8c.3 1 1 1.8 2 2.1 1.8.5 6.8.5 6.8.5s5 0 6.8-.5c1-.3 1.7-1.1 2-2.1.5-1.8.5-4.8.5-4.8s0-3-.5-4.8zM14.1 19.3v-6.6L19.9 16l-5.8 3.3z" 
      fill="#FFFFFF"
    />
  </svg>
);

export const SocialMediaBar = ({ size = 28, showLabels = false, className = '' }) => {
  const whatsappUrl = `https://wa.me/${instituteInfo.whatsappNumber}?text=${encodeURIComponent(
    'नमस्कार, मला आयुष्याची फोटोग्राफी इन्स्टिट्यूटबद्दल माहिती हवी आहे.'
  )}`;

  return (
    <div className={`social-media-bar ${className}`}>
      {/* WhatsApp Direct Contact Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="social-brand-link whatsapp-glow"
        title="Chat on WhatsApp (+91 84599 12189)"
        aria-label="Direct WhatsApp Contact"
      >
        <WhatsAppIcon size={size} />
        {showLabels && <span className="social-link-text">WhatsApp</span>}
      </a>

      {/* Instagram Institute */}
      <a 
        href={instituteInfo.socials.instagramInstitute.url}
        target="_blank" 
        rel="noopener noreferrer"
        className="social-brand-link instagram-glow"
        title="Follow on Instagram (@aayushyachi_photography)"
        aria-label="Instagram Profile"
      >
        <InstagramIcon size={size} />
        {showLabels && <span className="social-link-text">Instagram</span>}
      </a>

      {/* YouTube Channel */}
      <a 
        href={instituteInfo.socials.youtube.url}
        target="_blank" 
        rel="noopener noreferrer"
        className="social-brand-link youtube-glow"
        title="Watch on YouTube (@Aayushyachi_Photography)"
        aria-label="YouTube Channel"
      >
        <YouTubeIcon size={size} />
        {showLabels && <span className="social-link-text">YouTube</span>}
      </a>

      <style>{`
        .social-media-bar {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
        }
        .social-brand-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border-radius: 8px;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease;
          line-height: 1;
        }
        .social-brand-link:hover {
          transform: translateY(-3px) scale(1.08);
        }
        .whatsapp-glow:hover {
          filter: drop-shadow(0 4px 12px rgba(37, 211, 102, 0.55));
        }
        .instagram-glow:hover {
          filter: drop-shadow(0 4px 12px rgba(225, 48, 108, 0.55));
        }
        .youtube-glow:hover {
          filter: drop-shadow(0 4px 12px rgba(255, 0, 0, 0.55));
        }
        .social-link-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #FFFFFF;
        }
      `}</style>
    </div>
  );
};
