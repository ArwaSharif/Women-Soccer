const express = require('express');
const router = express.Router();
const teamCtrl = require('../../controllers/api/team');

// POST /api/team
// user adding a new team
router.post('/', teamCtrl.create);

// GET /api/team
// getting all teams
router.get('/', teamCtrl.index); //TO DO

// PUT /api/team/:id
// editing existing info
// router.get('/:id', teamCtrl.edit);

// GET /api/team/:id
// showing a specific team
// router.get('/:id', teamCtrl.show);

module.exports = router;