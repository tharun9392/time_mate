import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './BookMe.css';

const BookMe = () => {
  const [formData, setFormData] = useState({
    activity: '',
    date: '',
    time: '',
    duration: 1,
    location: '',
    conversation: 'talk',
    notes: '',
    agreedToSafety: false,
    agreedToCancellation: false
  });

  const locationHook = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const activityParam = params.get('activity');
    if (activityParam) {
      setFormData(prev => ({ ...prev, activity: activityParam }));
    }
  }, [locationHook]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const [isLocating, setIsLocating] = useState(false);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
        setFormData(prev => ({ ...prev, location: mapsLink }));
        setIsLocating(false);
      }, () => {
        alert("Unable to retrieve your location. Please ensure location services are enabled.");
        setIsLocating(false);
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  const calculateTotal = () => {
    return formData.duration * 100;
  };

  const formatWhatsAppMessage = () => {
    const text = `Hello Tharun, I would like to book your time.

Activity: ${formData.activity}
Date: ${formData.date}
Time: ${formData.time}
Duration: ${formData.duration} hours
Location: ${formData.location}
Conversation preference: ${formData.conversation}
Notes: ${formData.notes}

Total estimated fee: ₹${calculateTotal()}`;

    return encodeURIComponent(text);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!formData.agreedToSafety || !formData.agreedToCancellation) {
      alert("Please agree to the Safety and Cancellation policies to proceed.");
      return;
    }
    
    // Fallback to whatsapp booking for now
    const url = `https://wa.me/919701378064?text=${formatWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  return (
    <div className="container booking-page">
      <div className="section-header text-center">
        <span className="badge">Book Me</span>
        <h2>Reserve My Time</h2>
        <p>₹100 per hour. Simple, transparent pricing.</p>
      </div>

      <div className="booking-layout">
        <form className="booking-form glass-card" onSubmit={handleBooking}>
          <div className="form-group">
            <label>1. Select Activity</label>
            <select name="activity" required value={formData.activity} onChange={handleChange}>
              <option value="">Choose an activity...</option>
              <option value="Travel">Travel</option>
              <option value="Coffee">Coffee</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Shopping">Shopping</option>
              <option value="Exploring">Exploring</option>
              <option value="Movie/Event">Movie/Event</option>
              <option value="Conversation">Conversation</option>
              <option value="Quiet Company">Quiet Company</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>2. Date</label>
              <input type="date" name="date" required value={formData.date} onChange={handleChange} />
            </div>
            <div className="form-group half">
              <label>3. Time</label>
              <input type="time" name="time" required value={formData.time} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>4. Duration (hours)</label>
            <select name="duration" required value={formData.duration} onChange={handleChange}>
              {[1,2,3,4,5].map(hr => (
                <option key={hr} value={hr}>{hr} hour{hr > 1 ? 's' : ''}</option>
              ))}
            </select>
            <small>₹100 × {formData.duration} hour{formData.duration > 1 ? 's' : ''} = ₹{calculateTotal()}</small>
          </div>

          <div className="form-group">
            <label style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <span>5. Meeting Location (Public)</span>
              <button type="button" onClick={getCurrentLocation} disabled={isLocating} className="btn-locate" style={{background: 'transparent', border: 'none', color: 'var(--accent-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', fontWeight: '600'}}>
                <MapPin size={16} /> {isLocating ? 'Locating...' : 'Use Current Location'}
              </button>
            </label>
            <input type="text" name="location" required placeholder="e.g., Block 1, Google Maps Link, or Area name" value={formData.location} onChange={handleChange} />
            <small>Please choose a public place.</small>
          </div>

          <div className="form-group">
            <label>6. Conversation Preference</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="conversation" value="talk" checked={formData.conversation === 'talk'} onChange={handleChange} />
                <span>Talk <small>("I'd like to have conversations")</small></span>
              </label>
              <label className="radio-label">
                <input type="radio" name="conversation" value="some" checked={formData.conversation === 'some'} onChange={handleChange} />
                <span>Some Talk <small>("Comfortable with some chat")</small></span>
              </label>
              <label className="radio-label">
                <input type="radio" name="conversation" value="quiet" checked={formData.conversation === 'quiet'} onChange={handleChange} />
                <span>Quiet Company <small>("I don't feel like talking much")</small></span>
              </label>
              <label className="radio-label">
                <input type="radio" name="conversation" value="other" checked={formData.conversation === 'other'} onChange={handleChange} />
                <span>Other <small>("Open to whatever vibes naturally")</small></span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>7. Notes (Optional)</label>
            <textarea name="notes" placeholder="Anything I should know about your plan?" rows="3" value={formData.notes} onChange={handleChange}></textarea>
          </div>

          <div className="agreements">
            <label className="checkbox-label">
              <input type="checkbox" name="agreedToSafety" required checked={formData.agreedToSafety} onChange={handleChange} />
              <span>I have read and agree to the Safety & Boundaries Policy.</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="agreedToCancellation" required checked={formData.agreedToCancellation} onChange={handleChange} />
              <span>I have read and agree to the Cancellation & Rescheduling Policy.</span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-large btn-block mt-4">
            Request Booking via WhatsApp
          </button>
        </form>

        <div className="booking-summary glass-card">
          <h3>Booking Summary</h3>
          <div className="summary-item">
            <span>Hourly Rate</span>
            <span>₹100/hr</span>
          </div>
          <div className="summary-item">
            <span>Duration</span>
            <span>{formData.duration} hour{formData.duration > 1 ? 's' : ''}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-item total">
            <span>Companion Fee</span>
            <span>₹{calculateTotal()}</span>
          </div>
          <div className="customer-expenses">
            <small>* Customer pays their own expenses and any mutually agreed expenses.</small>
          </div>

          <div className="policy-mini">
            <h4>Cancellation Policy</h4>
            <ul>
              <li><strong>24+ hours:</strong> Free cancellation</li>
              <li><strong>12–24 hours:</strong> Cancellation charge may apply</li>
              <li><strong>Less than 12 hours:</strong> 50% cancellation fee</li>
              <li><strong>Less than 2 hours / No-show:</strong> Booking fee may be non-refundable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMe;
