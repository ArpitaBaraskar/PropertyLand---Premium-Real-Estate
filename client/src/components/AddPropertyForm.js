import React, { useState } from 'react';
import { propertyAPI } from '../services/api';

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    image: '',
    bedrooms: 1,
    bathrooms: 1,
    area: '',
    type: 'house',
    featured: false,
    //password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await propertyAPI.create(formData);
      setMessage('Property added successfully!');
      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        location: '',
        image: '',
        bedrooms: 1,
        bathrooms: 1,
        area: '',
        type: 'house',
        featured: false,
        password: ''
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to add property');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Property (Admin Only)</h2>
      
      {message && (
        <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-error'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Admin Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Enter admin password"
          />
        </div>

        <div className="form-group">
          <label>Property Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="e.g., Beautiful Modern Villa"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="Describe the property..."
          />
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="e.g., 500000"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="e.g., Los Angeles, CA"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
            required
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label>Property Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-control"
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
          </select>
        </div>

        <div style={{display: 'flex', gap: '1rem'}}>
          <div className="form-group" style={{flex: 1}}>
            <label>Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="form-control"
              min="1"
            />
          </div>

          <div className="form-group" style={{flex: 1}}>
            <label>Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="form-control"
              min="1"
            />
          </div>

          <div className="form-group" style={{flex: 1}}>
            <label>Area (sqft)</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g., 1500"
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              style={{marginRight: '0.5rem'}}
            />
            Featured Property
          </label>
        </div>

        <button 
          type="submit" 
          className="btn"
          disabled={loading}
          style={{width: '100%'}}
        >
          {loading ? 'Adding Property...' : 'Add Property'}
        </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;