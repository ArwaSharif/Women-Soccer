// from Item
const mongoose = require('mongoose');
// Ensure the teamSchema model is processed by Mongoose
const teamSchema = require('./TeamSchema');

module.exports = mongoose.model('Team', teamSchema);