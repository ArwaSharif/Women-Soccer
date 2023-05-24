const express = require('express');
const router = express.Router();
const favoritesCtrl = require('../../controllers/api/addFavorites');

// GET /api/team
// router.get('/', teamCtrl.index);

// POST /api/
// adding a new fav team
router.post('/favorites', favoritesCtrl.update);

// GET /api/team/:id
// router.put('/:id', teamCtrl.show);

module.exports = router;