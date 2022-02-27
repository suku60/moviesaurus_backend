const express = require('express');
const router = express.Router();

const MoviesController = require('../controllers/UsersController');
const { route } = require('../router');

// CRUD Restfull endpoints. 

// (Read) Show all orders
router.get('/', auth, OrdersController.showOrders);
// - Show only active:
router.get('/active', auth, OrdersController.showActiveOrders);


// (Create) Create an order
router.post('/', auth, OrdersController.newOrder);


// (Update) Modify order
router.put('/:id', adminPrivileges, OrdersController.updateOrder);


// (Delete) Orders
// - All
router.delete('/', adminPrivileges, OrdersController.deleteAllOrders);
// - Filtered by Id
router.delete('/:id', adminPrivileges, OrdersController.deleteOrder);


module.exports = router;