const express = require('express');
const router = express.Router();
const adminPrivileges = require("../middlewares/adminPrivileges");

const OrdersController = require('../controllers/OrdersController');

// CRUD Restfull endpoints. 

// (Read) Show all orders
router.get('/', auth, OrdersController.showOrders);
// - Show only active:
router.get('/active', auth, OrdersController.showActiveOrders);


// (Create) Create an order
router.post('/new', auth, OrdersController.newOrder);


// (Update) Modify order
router.put('/:id', auth, adminPrivileges, OrdersController.updateOrder);


// (Delete) Orders
// - All
router.delete('/deleteall', auth, adminPrivileges, OrdersController.deleteAllOrders);
// - Filtered by Id
router.delete('/:id', auth, adminPrivileges, OrdersController.deleteOrder);


module.exports = router;