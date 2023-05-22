const express = require('express');
const router = express.Router();
const teamCtrl = require('../../controllers/api/team');

// GET /api/team
router.get('/', teamCtrl.index);
// GET /api/team/:id
router.get('/:id', teamCtrl.show);

module.exports = router;