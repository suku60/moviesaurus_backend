const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const adminPrivileges = require("../middlewares/adminPrivileges");

const UsersController = require('../controllers/UsersController');

// CRUD Restfull endpoints. 


// (Create) user / Register

router.post('/new', UsersController.createUser);

// (Read) Find users

router.get('/', auth, UsersController.showAllUsers);

// - Filtered by id / email

router.get('/:id', auth, UsersController.showAllUsersById);

router.get('/:email', auth, UsersController.showAllUsersByEmail);


// (Update) Modify user data

router.put('/update/:id', auth, UsersController.updateUser);

router.put('/update/:id/levelup', auth, UsersController.levelUpUser);

// (Delete) users

// - All

router.delete('/delete/all', auth, adminPrivileges, UsersController.deleteAll);

// - Filtered by Id

router.delete('/delete/:id', auth, UsersController.deleteById);

// Login as an user

router.post('/login', UsersController.logUser);


module.exports = router;