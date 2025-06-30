import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import AddPropertyForm from '../components/AddPropertyForm';

const Properties = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="section">
      <div className="container">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <div>
            <h1 className="section-title" style={{textAlign: 'left', marginBottom: '0.5rem'}}>
              All Properties
            </h1>
            <p style={{color: '#666', margin: 0}}>
              Browse our complete collection of available properties
            </p>
          </div>
          
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn"
            style={{whiteSpace: 'nowrap'}}
          >
            {showAddForm ? 'Hide Form' : '+ Add Property'}
          </button>
        </div>

        {/* Add Property Form */}
        {showAddForm && (
          <div style={{marginBottom: '3rem'}}>
            <AddPropertyForm />
          </div>
        )}

        {/* Properties List */}
        <PropertyList />
      </div>
    </div>
  );
};

export default Properties;