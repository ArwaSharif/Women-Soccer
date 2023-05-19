const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//or initiate a cart to start ordering
// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// to check the orders history
// GET /api/orders/history
router.get('/history', ordersCtrl.history);
// go to controller/orders
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
// to see how many items in our card
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);

module.exports = router;