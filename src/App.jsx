import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="site-app">
        <Navbar />
        <main className="main-viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <style>{`
        .site-app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--bg-primary);
          position: relative;
        }
        .main-viewport {
          flex: 1 0 auto;
        }
      `}</style>
    </LanguageProvider>
  );
}

export default App;
