import React from 'react';

const About = () => {
  return (
    <div className="section">
      <div className="container">
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h1 className="section-title">About PropertyLand</h1>
          
          <div style={{marginBottom: '3rem'}}>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" 
              alt="Modern office building"
              style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
            />
          </div>

          <div style={{fontSize: '1.1rem', lineHeight: '1.8', color: '#555'}}>
            <p style={{marginBottom: '2rem'}}>
              Founded in 2020, PropertyLand has quickly become one of the most trusted names in real estate. 
              We specialize in connecting buyers and renters with exceptional properties that match their 
              lifestyle and budget requirements.
            </p>

            <p style={{marginBottom: '2rem'}}>
              Our team of experienced real estate professionals brings together decades of industry knowledge 
              and a passion for helping people find their perfect home. We believe that everyone deserves a 
              place they can truly call home, and we're committed to making that dream a reality.
            </p>

            <h2 style={{color: '#2c5aa0', marginBottom: '1rem'}}>Our Mission</h2>
            <p style={{marginBottom: '2rem'}}>
              To revolutionize the property search experience by providing transparent, efficient, and 
              personalized service that puts our clients' needs first. We leverage cutting-edge technology 
              and deep market insights to deliver exceptional results.
            </p>

            <h2 style={{color: '#2c5aa0', marginBottom: '1rem'}}>Our Values</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              <div>
                <h3 style={{color: '#333', marginBottom: '0.5rem'}}>🎯 Excellence</h3>
                <p>We maintain the highest standards in everything we do, from property selection to customer service.</p>
              </div>
              <div>
                <h3 style={{color: '#333', marginBottom: '0.5rem'}}>🔍 Transparency</h3>
                <p>We believe in honest, open communication and provide all the information you need to make informed decisions.</p>
              </div>
              <div>
                <h3 style={{color: '#333', marginBottom: '0.5rem'}}>🤝 Integrity</h3>
                <p>We build lasting relationships based on trust, reliability, and ethical business practices.</p>
              </div>
              <div>
                <h3 style={{color: '#333', marginBottom: '0.5rem'}}>💡 Innovation</h3>
                <p>We continuously evolve our services and embrace new technologies to better serve our clients.</p>
              </div>
            </div>
          </div>

          <div style={{marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '10px', textAlign: 'center'}}>
            <h2 style={{marginBottom: '1rem'}}>Ready to Find Your Dream Property?</h2>
            <p style={{marginBottom: '2rem', color: '#666'}}>
              Let our experienced team help you navigate the property market and find the perfect match for your needs.
            </p>
            <a href="/contact" className="btn">Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;