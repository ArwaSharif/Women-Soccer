// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const teamSchema = require('./TeamSchema');

// const groupsTeamSchema = new Schema({
//   qty: { type: Number, default: 1 },
//   item: itemSchema
// }, {
//   timestamps: true,
//   toJSON: { virtuals: true }
// });

// lineItemSchema.virtual('extPrice').get(function() {
//   // 'this' is bound to the lineItem subdoc
//   return this.qty * this.item.price;
// });

// /*
// ^Virtuals are document properties that do not persist or get stored in the MongoDB database, they only exist logically and are not written to the document’s collection.

// With the get method of virtual property, we can set the value of the virtual property from existing document field values, and it returns the virtual property value. Mongoose calls the get method every time we access the virtual property.
// */


// const orderSchema = new Schema({
//   user: { type: Schema.Types.ObjectId, ref: 'User' },
//   lineItems: [lineItemSchema],
//   isPaid: { type: Boolean, default: false }
// }, {
//   timestamps: true,
//   toJSON: { virtuals: true }
// });

// orderSchema.virtual('orderTotal').get(function() {
//   return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
// });

// orderSchema.virtual('totalQty').get(function() {
//     // accumulate and return the total
//   return this.lineItems.reduce((total, item) => total + item.qty, 0);
// });

// orderSchema.virtual('orderId').get(function() {
//     // taking the orderID and cutting it in half
//     return this.id.slice(-6).toUpperCase();
// });

// orderSchema.statics.getCart = function(userId) {
//   // 'this' is the Order model
//   return this.findOneAndUpdate(
//     // query
//     { user: userId, isPaid: false },
//     // update
//     { user: userId },
//     // upsert option will create the doc if
//     // it doesn't exist
//     { upsert: true, new: true }
//   );
// };

// orderSchema.methods.addItemToCart = async function(itemId) {
//   const cart = this;
//   // Check if item already in cart
//   const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
//   if (lineItem) {
//     lineItem.qty += 1;
//   } else {
//     const item = await mongoose.model('Item').findById(itemId);
//     cart.lineItems.push({ item });
//   }
//   return cart.save();
// };

// // Instance method to set an item's qty in the cart (will add item if does not exist)
// orderSchema.methods.setItemQty = function(itemId, newQty) {
//   // this keyword is bound to the cart (order doc)
//   const cart = this;
//   // Find the line item in the cart for the menu item
//   const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
//   if (lineItem && newQty <= 0) {
//     // Calling deleteOne, delete itself from the cart.lineItems array
//     lineItem.deleteOne();
//   } else if (lineItem) {
//     // Set the new qty - positive value is assured thanks to prev if
//     lineItem.qty = newQty;
//   }
//   // return the save() method's promise
//   return cart.save();
// };

// module.exports = mongoose.model('Order', orderSchema);