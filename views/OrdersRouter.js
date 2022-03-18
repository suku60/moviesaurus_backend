const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const adminPrivileges = require("../middlewares/adminPrivileges");

const OrdersController = require('../controllers/OrdersController');

// CRUD Restfull endpoints. 

// (Read) Show all orders

router.get('/show', auth, OrdersController.showOrders);

// - Show only active:

router.get('/show/active', auth, OrdersController.showActiveOrders);


// (Create) Create an order

router.post('/new', auth, OrdersController.newOrder);


// (Update) Modify order

router.put('/update/:id', auth, adminPrivileges, OrdersController.updateOrder);


// (Delete) Orders

// - All

router.delete('/delete/all', auth, adminPrivileges, OrdersController.deleteAllOrders);

// - Filtered by Id

router.delete('/delete/:id', auth, adminPrivileges, OrdersController.deleteOrder);


module.exports = router;