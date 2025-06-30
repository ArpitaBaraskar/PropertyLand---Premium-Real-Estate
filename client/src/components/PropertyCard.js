import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="property-card">
      {property.featured && (
        <div className="featured-badge">Featured</div>
      )}
      <img 
        src={property.image} 
        alt={property.title}
        className="property-image"
      />
      <div className="property-info">
        <div className="property-price">{formatPrice(property.price)}</div>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          📍 {property.location}
        </div>
        <p className="property-description">
          {property.description.substring(0, 100)}...
        </p>
        <div className="property-features">
          <span>🛏️ {property.bedrooms} bed</span>
          <span>🚿 {property.bathrooms} bath</span>
          <span>📐 {property.area} sqft</span>
        </div>
        <Link to={`/property/${property._id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;