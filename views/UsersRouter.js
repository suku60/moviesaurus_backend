const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');
const { route } = require('../router');

// CRUD Restfull endpoints. 

// (Read) Find users
router.get('/', UsersController.showAllUsers);
// - Filtered by id / email
router.get('/', UsersController.showAllUsersById);
router.get('/', UsersController.showAllUsersByEmail);


// (Create) user / Register
router.post('/', UsersController.createUser);


// (Update) Modify user data
router.put('/:id', UsersController.updateUser);
router.put('/:id/levelup', UsersController.levelUpUser);

// (Delete) users
// - All
router.delete('/', UsersController.deleteAll);
// - Filtered by Id
router.delete('/', UsersController.deleteById);


module.exports = router;

