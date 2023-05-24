const express = require('express')
const router = express.Router();
const userCtrl = require('../../controllers/api/users')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST 
// creating a new user
router.post('/', userCtrl.create)


// POST /api/users/login
// user logging in
router.post("/login", userCtrl.login)


module.exports = router;
