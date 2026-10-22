import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { galleryCategories, galleryItems } from '../data/gallery';
import Lightbox from './Lightbox';

const GalleryGrid = ({ limit = 0 }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { language, t } = useLanguage();

  const filteredItems = useMemo(() => {
    let items = galleryItems;
    if (activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }
    if (limit > 0) {
      return items.slice(0, limit);
    }
    return items;
  }, [activeCategory, limit]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-section-wrapper">
      {/* Category Filter Pills (shown when no limit) */}
      {limit === 0 && (
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery categories">
          {galleryCategories.map((cat) => {
            const label = language === 'mr' ? cat.labelMr : cat.label;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`filter-pill ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div layout className="gallery-grid">
        <AnimatePresence>
          {filteredItems.map((item, index) => {
            const title = language === 'mr' ? item.titleMr : item.title;
            const categoryLabel = language === 'mr' ? item.categoryLabelMr : item.categoryLabel;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: (index % 4) * 0.05 }}
                className="gallery-item-card card-zoom-container"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View photo: ${title}`}
              >
                <img
                  src={item.image}
                  alt={title}
                  className="gallery-img card-zoom-img"
                  loading="lazy"
                />

                <div className="gallery-item-overlay">
                  <div className="gallery-overlay-badge">
                    <Camera size={14} color="#FFC629" />
                    <span>{categoryLabel}</span>
                  </div>

                  <div className="gallery-overlay-bottom">
                    <h4 className="gallery-item-title">{title}</h4>
                    <span className="gallery-zoom-hint">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      <style>{`
        .gallery-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-bottom: 2.75rem;
        }
        .filter-pill {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .filter-pill:hover {
          border-color: var(--accent-gold);
          color: var(--text-primary);
        }
        .filter-pill.active {
          background: var(--accent-gold);
          color: #090909;
          border-color: var(--accent-gold);
          box-shadow: 0 4px 15px rgba(255, 198, 41, 0.35);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .gallery-item-card {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #121212;
          height: 280px;
          border: 1px solid var(--border-color);
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .gallery-item-card:hover {
          border-color: var(--border-gold);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.2) 0%, rgba(9, 9, 9, 0.85) 100%);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        .gallery-item-card:hover .gallery-item-overlay {
          opacity: 1;
          background: linear-gradient(180deg, rgba(9, 9, 9, 0.1) 0%, rgba(9, 9, 9, 0.92) 100%);
        }
        .gallery-overlay-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(14, 14, 14, 0.8);
          border: 1px solid var(--border-gold);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          align-self: flex-start;
          backdrop-filter: blur(4px);
        }
        .gallery-overlay-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .gallery-item-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: #FFFFFF;
          line-height: 1.3;
        }
        .gallery-zoom-hint {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 198, 41, 0.9);
          color: #090909;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .gallery-item-card:hover .gallery-zoom-hint {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default GalleryGrid;
