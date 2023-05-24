//Add an "external" crud-helper.js Module Used for Testing Models, etc.


// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/User');
// const Team = require('./models/Team');
// const Favorites = require('./models/FavoritesList');

// Local variables will come in handy for holding retrieved documents
// let user, team, favorites, ntherTeam;
// let users, teams;

/*
This is how we will use the crud-helper.js module in the future:

mern-infrastructure[main*] % node
Welcome to Node.js v15.2.0.
Type ".help" for more information.
> .load crud-helper.js
// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy
let user, item, category, order;
let users, items, categories, orders;

{}
> Connected to mern-infrastructure at localhost:27017
*/