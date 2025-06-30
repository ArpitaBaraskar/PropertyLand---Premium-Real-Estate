import React from 'react';
import { Link } from 'react-router-dom';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Property</h1>
          <p>Discover the perfect home with our curated selection of premium properties</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/properties" className="btn">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">
            Hand-picked properties that offer exceptional value and unique features
          </p>
          <PropertyList featured={true} limit={3} />
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <Link to="/properties" className="btn">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <h2 className="section-title">Why Choose PropertyLand?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
              <div style={{padding: '2rem', background: 'white', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏆</div>
                <h3>Premium Selection</h3>
                <p>Carefully curated properties that meet the highest standards of quality and location.</p>
              </div>
              <div style={{padding: '2rem', background: 'white', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💰</div>
                <h3>Best Prices</h3>
                <p>Competitive pricing and transparent fees with no hidden costs or surprises.</p>
              </div>
              <div style={{padding: '2rem', background: 'white', borderRadius: '10px', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🤝</div>
                <h3>Expert Support</h3>
                <p>Professional guidance from our experienced team throughout your property journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;