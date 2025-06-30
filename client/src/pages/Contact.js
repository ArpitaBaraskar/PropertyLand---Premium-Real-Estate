import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Get in touch with our team - we're here to help you find your perfect property
        </p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
          {/* Contact Information */}
          <div>
            <h2 style={{marginBottom: '2rem', color: '#2c5aa0'}}>Get In Touch</h2>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                📍 Office Address
              </h3>
              <p style={{color: '#666', marginLeft: '1.5rem'}}>
                123 Property Street<br/>
                Los Angeles, CA 90210<br/>
                United States
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                📞 Phone
              </h3>
              <p style={{color: '#666', marginLeft: '1.5rem'}}>
                +1 (555) 123-4567
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                ✉️ Email
              </h3>
              <p style={{color: '#666', marginLeft: '1.5rem'}}>
                info@propertyland.com
              </p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h3 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                🕒 Office Hours
              </h3>
              <p style={{color: '#666', marginLeft: '1.5rem'}}>
                Monday - Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div style={{marginTop: '3rem'}}>
          <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#2c5aa0'}}>Find Our Office</h2>
          <div style={{
            width: '100%', 
            height: '400px', 
            background: '#f0f0f0', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #ccc'
          }}>
            <div style={{textAlign: 'center', color: '#666'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🗺️</div>
              <p>Interactive map would be embedded here</p>
              <p style={{fontSize: '0.9rem'}}>
                (Google Maps, Mapbox, or similar service)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;