const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, propertyId } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Name, email, and message are required' 
      });
    }

    const contact = new Contact({
      name,
      email,
      phone,
      message,
      propertyId: propertyId || null
    });

    const savedContact = await contact.save();
    
    // In a real app, you might send an email here
    console.log('New contact submission:', savedContact);
    
    res.status(201).json({ 
      message: 'Contact form submitted successfully!',
      contactId: savedContact._id 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/contact - Get all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .populate('propertyId', 'title')
      .sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;