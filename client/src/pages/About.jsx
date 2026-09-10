import React from 'react';

const About = () => {
  return (
    <div className="container" style={{padding: '5rem 1.5rem'}}>
      <div className="section-header">
        <span className="badge">About Me</span>
        <h2 style={{fontSize: '3rem', marginBottom: '1.5rem'}}>Hi, I'm Tharun.</h2>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
        <div style={{flex: '1 1 280px', fontSize: '1.125rem', color: '#444'}}>
          <p style={{marginBottom: '1.5rem'}}>
            I started this service for people who sometimes want company while travelling, exploring, eating, having coffee, attending events, or simply spending some time outside alone.
          </p>
          
          <p style={{marginBottom: '1.5rem'}}>
            <strong>You decide what you want to do. I simply give you my time and company.</strong>
          </p>

          <div style={{background: 'white', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-color)', margin: '2rem 0', boxShadow: 'var(--shadow-md)'}}>
            <p style={{marginBottom: '1rem', fontStyle: 'italic'}}>"If you want to talk, I'll talk."</p>
            <p style={{fontStyle: 'italic'}}>"If you prefer quiet company, that's completely fine too."</p>
          </div>

          <p style={{marginBottom: '1.5rem'}}>
            I believe that no one should have to miss out on experiences just because they don't want to go alone. By booking my time, you get a reliable, friendly, and respectful companion for whatever platonic activity you have planned.
          </p>
        </div>
        
        <div style={{flex: '1 1 300px', display: 'flex', justifyContent: 'center'}}>
          <div style={{position: 'relative', width: '100%', maxWidth: '350px'}}>
            <div style={{position: 'absolute', inset: '-10px', background: 'var(--accent-color)', borderRadius: 'var(--border-radius-lg)', transform: 'rotate(6deg)', opacity: '0.2', zIndex: -1}}></div>
            <img src="/tharun-profile.png" alt="Tharun" style={{width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)', border: '4px solid white'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
