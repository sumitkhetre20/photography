import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Lightbox = ({ items, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || currentIndex < 0 || currentIndex >= items.length) return null;

  const currentItem = items[currentIndex];
  const title = language === 'mr' ? currentItem.titleMr : currentItem.title;
  const caption = language === 'mr' ? currentItem.captionMr : currentItem.caption;
  const categoryLabel = language === 'mr' ? currentItem.categoryLabelMr : currentItem.categoryLabel;

  return (
    <AnimatePresence>
      <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        {/* Top Controls */}
        <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
          <div className="lightbox-counter-badge">
            <Camera size={15} color="#FFC629" />
            <span>
              {currentIndex + 1} {t.gallery.lightbox.counter} {items.length}
            </span>
          </div>
          <button 
            type="button" 
            className="lightbox-close-btn" 
            onClick={onClose}
            aria-label={t.gallery.lightbox.close}
          >
            <X size={24} />
          </button>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          className="lightbox-nav-btn btn-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label={t.gallery.lightbox.prev}
        >
          <ChevronLeft size={30} />
        </button>

        {/* Image & Caption Container */}
        <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
          <motion.div
            key={currentItem.id}
            className="lightbox-image-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <img src={currentItem.image} alt={title} className="lightbox-img" />
          </motion.div>

          {/* Caption Box */}
          <div className="lightbox-caption-box">
            <span className="lightbox-cat-tag">{categoryLabel}</span>
            <h3 className="lightbox-title">{title}</h3>
            {caption && <p className="lightbox-caption">{caption}</p>}
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="lightbox-nav-btn btn-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label={t.gallery.lightbox.next}
        >
          <ChevronRight size={30} />
        </button>

        <style>{`
          .lightbox-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(5, 5, 5, 0.96);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 2500;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }
          .lightbox-top-bar {
            position: absolute;
            top: 20px;
            left: 24px;
            right: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 10;
          }
          .lightbox-counter-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--border-gold);
            padding: 0.4rem 0.85rem;
            border-radius: var(--radius-full);
            color: var(--accent-gold);
            font-size: 0.85rem;
            font-weight: 600;
          }
          .lightbox-close-btn {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--border-color);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            transition: all 0.2s ease;
          }
          .lightbox-close-btn:hover {
            background: var(--accent-gold);
            color: #090909;
            border-color: var(--accent-gold);
          }
          .lightbox-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(20, 20, 20, 0.8);
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            transition: all 0.2s ease;
            z-index: 10;
          }
          .lightbox-nav-btn:hover {
            background: var(--accent-gold);
            color: #090909;
            border-color: var(--accent-gold);
          }
          .btn-prev {
            left: 20px;
          }
          .btn-next {
            right: 20px;
          }
          @media (max-width: 640px) {
            .lightbox-nav-btn {
              width: 40px;
              height: 40px;
            }
            .btn-prev {
              left: 8px;
            }
            .btn-next {
              right: 8px;
            }
          }
          .lightbox-stage {
            max-width: 1000px;
            width: 100%;
            max-height: 85vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .lightbox-image-box {
            max-height: 65vh;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
          }
          .lightbox-img {
            max-height: 65vh;
            max-width: 100%;
            object-fit: contain;
          }
          .lightbox-caption-box {
            margin-top: 1.25rem;
            text-align: center;
            max-width: 750px;
          }
          .lightbox-cat-tag {
            display: inline-block;
            font-size: 0.72rem;
            font-weight: 700;
            color: var(--accent-gold);
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.35rem;
          }
          .lightbox-title {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            color: #FFFFFF;
            margin-bottom: 0.35rem;
          }
          .lightbox-caption {
            font-size: 0.92rem;
            color: var(--text-secondary);
            line-height: 1.5;
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
};

export default Lightbox;
