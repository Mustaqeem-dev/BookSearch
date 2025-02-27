const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch books from Google Books API
router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    res.json(response.data.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch details of a specific book
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;