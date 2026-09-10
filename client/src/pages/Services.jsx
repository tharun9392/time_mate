import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const servicesList = [
  {
    title: "Travel Companion",
    desc: "Going somewhere alone? I'll accompany you.",
    icon: "🗺️",
    activityValue: "Travel"
  },
  {
    title: "Coffee Companion",
    desc: "Want coffee and conversation?",
    icon: "☕",
    activityValue: "Coffee"
  },
  {
    title: "Food Companion",
    desc: "Breakfast, lunch or dinner — you don't have to eat alone.",
    icon: "🍴",
    activityValue: "Lunch"
  },
  {
    title: "City Explorer",
    desc: "Explore places, streets and attractions together.",
    icon: "🏙️",
    activityValue: "Exploring"
  },
  {
    title: "Shopping Companion",
    desc: "Need company while shopping?",
    icon: "🛍️",
    activityValue: "Shopping"
  },
  {
    title: "Conversation",
    desc: "Want someone to talk with? Choose conversation mode.",
    icon: "💬",
    activityValue: "Conversation"
  },
  {
    title: "Quiet Company",
    desc: "Don't feel like talking? That's completely okay.",
    icon: "🤫",
    activityValue: "Quiet Company"
  },
  {
    title: "Events",
    desc: "Going to an exhibition, event or activity alone?",
    icon: "🎟️",
    activityValue: "Movie/Event"
  },
  {
    title: "Cinema & Movies",
    desc: "Want company to watch the latest blockbuster?",
    icon: "🍿",
    activityValue: "Movie/Event"
  },
  {
    title: "Other Activities",
    desc: "Have something else in mind? Just let me know!",
    icon: "✨",
    activityValue: "Other"
  }
];

const Services = () => {
  return (
    <div className="services-container container">
      <div className="section-header text-center" style={{marginTop: '4rem'}}>
        <span className="badge">What I Offer</span>
        <h2>Whatever your plan is</h2>
        <p>I provide my time and company for various activities.</p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, idx) => (
          <Link to={`/book?activity=${encodeURIComponent(service.activityValue)}`} key={idx} className="service-card" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
