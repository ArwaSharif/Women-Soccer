//from Item
const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./Teams');

const teamSchema = require('./teamSchema');

module.exports = mongoose.model('Item', teamSchema);