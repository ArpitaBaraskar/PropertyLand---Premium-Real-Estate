import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import { propertyAPI } from '../services/api';

const PropertyList = ({ limit, featured = false }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await propertyAPI.getAll();
      let propertyData = response.data;
      
      // Filter for featured properties if requested
      if (featured) {
        propertyData = propertyData.filter(property => property.featured);
      }
      
      // Limit results if specified
      if (limit) {
        propertyData = propertyData.slice(0, limit);
      }
      
      setProperties(propertyData);
    } catch (err) {
      setError('Failed to fetch properties');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{textAlign: 'center', padding: '2rem'}}>Loading properties...</div>;
  if (error) return <div className="alert alert-error">{error}</div>;

  return (
    <div className="properties-grid">
      {properties.map(property => (
        <PropertyCard 
          key={property._id} 
          property={property} 
        />
      ))}
    </div>
  );
};

export default PropertyList;