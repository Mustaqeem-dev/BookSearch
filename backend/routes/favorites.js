const express = require('express');
const auth = require('../middleware/auth');
const Favorite = require('../models/Favorite');
const router = express.Router();
// Save a book as a favorite
router.post('/', auth, async (req, res) => {
  const { bookId, title, authors, thumbnail } = req.body; // Get book details from the request body
  try {
      const favorite = new Favorite({
          user: req.user.id, // Get the user ID from the authenticated user
          bookId,
          title,
          authors,
          thumbnail,
      });
      await favorite.save(); // Save the favorite book to the database
      res.status(201).json(favorite); // Respond with the saved favorite
  } catch (err) {
      res.status(500).json({ error: err.message }); // Handle errors
  }
});

router.get('/', auth, async (req, res) => {
  try {
      const favorites = await Favorite.find({ user: req.user.id }); // Fetch favorites for the logged-in user
      res.json(favorites); // Respond with the list of favorites
  } catch (err) {
      res.status(500).json({ error: err.message }); // Handle errors
  }
});
// Remove a book from favorites
router.delete('/:id', auth, async (req, res) => {
  try {
      const favorite = await Favorite.findById(req.params.id);
      if (!favorite) {
          return res.status(404).json({ error: 'Favorite not found' });
      }
      if (favorite.user.toString() !== req.user.id) {
          return res.status(403).json({ error: 'Not authorized to delete this favorite' });
      }
      await Favorite.findByIdAndDelete(req.params.id); // Delete the favorite by ID
      res.json({ message: 'Book removed from favorites' }); // Respond with a success message
  } catch (err) {
      res.status(500).json({ error: err.message }); // Handle errors
  }
});

module.exports = router;