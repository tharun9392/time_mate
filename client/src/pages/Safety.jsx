import React from 'react';
import './Safety.css';

const Safety = () => {
  return (
    <div className="container safety-page">
      <div className="section-header text-center">
        <h2>Cancellation & Policies</h2>
        <p>This section is extremely important. Please read before booking.</p>
      </div>

      <div className="cancellation-policy">
        <h3 style={{marginBottom: '1.5rem', color: 'var(--primary-color)'}}>Cancellation & Rescheduling</h3>
        
        <div className="policy-section">
          <h5>Customer Cancellation</h5>
          <ul className="timeline-list">
            <li><strong>More than 24 hours:</strong> Free cancellation. Full refund if paid.</li>
            <li><strong>12–24 hours before:</strong> Cancellation charge may apply to compensate for reserved time.</li>
            <li><strong>Less than 12 hours:</strong> 50% cancellation fee of the companion booking amount.</li>
            <li><strong>Less than 2 hours / No-show:</strong> Booking fee may be non-refundable.</li>
          </ul>
        </div>
        
        <div className="policy-section">
          <h5>Companion Cancellation</h5>
          <p>If I need to cancel, you will receive a full refund of any prepaid fee. I will contact you ASAP and you can reschedule if you'd like without additional fees.</p>
        </div>
        
        <div className="policy-section">
          <h5>General Rules</h5>
          <p><strong>Late Arrival:</strong> Booked time still counts from original start time unless mutually agreed. (e.g. booked 5-7pm, arrive 5:30pm = ends at 7pm).</p>
          <p><strong>Safety Cancellation:</strong> Either party may cancel immediately if they feel unsafe, uncomfortable, or pressured. No one is required to continue a booking against their wishes.</p>
        </div>
      </div>

      <div className="section-header text-center mt-5" style={{marginTop: '5rem'}}>
        <span className="badge" style={{backgroundColor: 'rgba(211, 47, 47, 0.1)', color: 'var(--error)'}}>Important</span>
        <h3 style={{fontSize: '2rem', marginTop: '1rem'}}>Safety & Boundaries</h3>
      </div>

      <div className="rules-grid">
        <div className="rule-card">
          <h4>✓ What This Is</h4>
          <ul>
            <li>This is a companionship/time-sharing service.</li>
            <li>Meetings should preferably happen in public places.</li>
            <li>The companion fee is calculated by time (₹100/hr).</li>
            <li>The customer pays their own expenses unless otherwise agreed.</li>
            <li>Meeting location should be mutually agreed upon.</li>
          </ul>
        </div>
        
        <div className="rule-card strict">
          <h4>✗ What This Is NOT</h4>
          <ul>
            <li>It is NOT a dating service.</li>
            <li>It is NOT an adult or sexual service.</li>
            <li>No illegal activities.</li>
            <li>No harassment or abusive behavior.</li>
            <li>No dangerous or unsafe activities.</li>
            <li>Do not display or share private personal information publicly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Safety;
