const express = require('express')
const router = express.Router();
const userCtrl = require('../../controllers/api/users')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST 
router.post('/', userCtrl.create)


// POST /api/users/login
router.post("/login", userCtrl.login)


module.exports = router;
