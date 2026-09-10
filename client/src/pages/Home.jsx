import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Coffee, ShoppingBag, Heart, Shield, Clock } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="badge">TimeMate Companion Service</span>
            <h1 className="hero-title">Don't Travel Alone.<br/>Book <span className="highlight">Good Company.</span></h1>
            <p className="hero-subtitle">
              Going somewhere alone? Want someone to join you for coffee, food, travel, exploring, or simply spending time together? Book my time whenever you need company.
            </p>
            
            <div className="hero-pricing">
              <span className="price">₹100</span>
              <span className="unit">/ hour</span>
            </div>
            <p className="pricing-note">Simple hourly pricing. You choose the activity, date and duration.</p>
            
            <div className="hero-actions">
              <Link to="/book" className="btn btn-primary btn-large">Book My Time</Link>
              <Link to="/services" className="btn btn-secondary btn-large">Check Availability</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>How It Works</h2>
            <p>Four simple steps to book a companion for your day</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Choose</h3>
              <p>Choose what you want company for (coffee, travel, shopping, etc)</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Select</h3>
              <p>Select your preferred date, time and duration.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Book</h3>
              <p>Send a booking request and wait for confirmation.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Meet</h3>
              <p>Once accepted, connect and meet at the agreed public location.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
