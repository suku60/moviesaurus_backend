const express = require('express');
const router = express.Router();

const MoviesController = require('../controllers/UsersController');
const { route } = require('../router');

// CRUD Restfull endpoints. 

// (Read) Show all orders
router.get('/', OrdersController.showOrders);
// - Show only active:
router.get('/active', OrdersController.showActiveOrders);


// (Create) Create an order
router.post('/', OrdersController.newOrder);


// (Update) Modify order
router.put('/:id', OrdersController.updateOrder);


// (Delete) Orders
// - All
router.delete('/', OrdersController.deleteAllOrders);
// - Filtered by Id
router.delete('/', OrdersController.deleteOrder);


module.exports = router;