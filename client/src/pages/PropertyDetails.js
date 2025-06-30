import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertyAPI } from '../services/api';
import ContactForm from '../components/ContactForm';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await propertyAPI.getById(id);
      setProperty(response.data);
    } catch (err) {
      setError('Property not found');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) return <div style={{textAlign: 'center', padding: '3rem'}}>Loading property...</div>;
  if (error || !property) return <div className="alert alert-error">{error}</div>;

  return (
    <div className="section">
      <div className="container">
        {/* Back button */}
        <Link to="/properties" style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#2c5aa0', textDecoration: 'none'}}>
          ← Back to Properties
        </Link>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem'}}>
          {/* Property Image and Details */}
          <div>
            <div style={{position: 'relative', marginBottom: '2rem'}}>
              {property.featured && (
                <div className="featured-badge">Featured</div>
              )}
              <img 
                src={property.image} 
                alt={property.title}
                style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px'}}
              />
            </div>

            <div style={{background: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
              <div style={{marginBottom: '1rem'}}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#2c5aa0'}}>
                  {formatPrice(property.price)}
                </span>
              </div>
              
              <h1 style={{fontSize: '2rem', marginBottom: '1rem', color: '#333'}}>
                {property.title}
              </h1>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#666'}}>
                📍 {property.location}
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
                <div style={{textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🛏️</div>
                  <div style={{fontWeight: 'bold'}}>{property.bedrooms}</div>
                  <div style={{fontSize: '0.9rem', color: '#666'}}>Bedrooms</div>
                </div>
                <div style={{textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🚿</div>
                  <div style={{fontWeight: 'bold'}}>{property.bathrooms}</div>
                  <div style={{fontSize: '0.9rem', color: '#666'}}>Bathrooms</div>
                </div>
                <div style={{textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>📐</div>
                  <div style={{fontWeight: 'bold'}}>{property.area?.toLocaleString()}</div>
                  <div style={{fontSize: '0.9rem', color: '#666'}}>Sq Ft</div>
                </div>
                <div style={{textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '8px'}}>
                  <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🏠</div>
                  <div style={{fontWeight: 'bold', textTransform: 'capitalize'}}>{property.type}</div>
                  <div style={{fontSize: '0.9rem', color: '#666'}}>Type</div>
                </div>
              </div>

              <div>
                <h3 style={{marginBottom: '1rem', color: '#333'}}>Description</h3>
                <p style={{lineHeight: '1.6', color: '#666'}}>
                  {property.description}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm 
              propertyId={property._id} 
              propertyTitle={property.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;