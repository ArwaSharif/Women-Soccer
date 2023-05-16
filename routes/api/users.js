const express = require('express')
const router = express.Router();
const userCtrl = require('../../controllers/api/users')
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//POST 
router.post('/', userCtrl.create)


// POST /api/users/login
router.post("/login", userCtrl.login)

// GET /api/users/check-token
//making a get route for checkToken and assigning 
// router.get('/check-token', userCtrl.checkToken);
// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, userCtrl.checkToken);


module.exports = router;
