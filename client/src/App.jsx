import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Calendar, MapPin, Clock, ShieldAlert, Heart, Star, User } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookMe from './pages/BookMe';
import Safety from './pages/Safety';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <header className="navbar">
          <div className="navbar-content">
            <Link to="/" className="brand">
              <Clock className="brand-logo" size={32} />
              <span className="brand-name">TimeMate</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/safety" className="nav-link">Safety & Rules</Link>
              <Link to="/book" className="nav-btn primary">Book My Time</Link>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="mobile-nav">
              <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="mobile-nav-link" onClick={toggleMenu}>Services</Link>
              <Link to="/safety" className="mobile-nav-link" onClick={toggleMenu}>Safety & Rules</Link>
              <Link to="/book" className="mobile-nav-link primary" onClick={toggleMenu}>Book My Time</Link>
            </nav>
          )}
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/book" element={<BookMe />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-col">
              <h4>TimeMate</h4>
              <p>Your time. Your plan. Good company.</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link to="/services">Services</Link>
              <Link to="/safety">Safety Policy</Link>
              <Link to="/book">Book Me</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <p>WhatsApp: +91 9701378064</p>
              <p>Instagram: _tharun.123</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} TimeMate. All rights reserved.</p>
            <p className="disclaimer">This is a companionship service, NOT a dating, adult, or professional service.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
