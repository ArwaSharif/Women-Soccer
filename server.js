require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('./config/database');

const app = express();

app.use(logger('dev'));

app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
//giving us context = who is logged in
//will fired on all of our routers
app.use(require('./config/checkToken'));

//sign up and login part 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/team', require('./routes/api/newTeam'));
app.use('/api/favorites', require('./routes/api/favorites'));
// Protect the API routes below from anonymous users
// //setting up routers for order and item
const ensureLoggedIn = require('./config/ensureLoggedIn');
// //checking if a user logged in
// //the middleware ensureLoggedIn will protect all the routes and persist login
// app.use('/api/favorites', ensureLoggedIn, require('./routes/api/favorites'));
// app.use('/api/addNewTeam', ensureLoggedIn, require('./routes/api/NewTeam'));
// app.use('/api/favorites', ensureLoggedIn, require('./routes/api/users/favorites'));
// app.use('/api/newTeam', ensureLoggedIn, require('./routes/api/users/add-new-team'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

