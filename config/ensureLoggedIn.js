// config/ensureLoggedIn.js

module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    //catching the user before doing smth we don't want them to do
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay
    next(); // to the controller
  };