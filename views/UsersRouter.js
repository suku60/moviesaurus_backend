const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/UsersController');
const { route } = require('../router');

// CRUD Restfull endpoints. 

// (Read) Find users
router.get('/', auth, UsersController.showAllUsers);
// - Filtered by id / email
router.get('/:id', auth, UsersController.showAllUsersById);
router.get('/:email', auth, UsersController.showAllUsersByEmail);


// (Create) user / Register
router.post('/', UsersController.createUser);


// (Update) Modify user data
router.put('/:id', auth, UsersController.updateUser);
router.put('/:id/levelup', auth, UsersController.levelUpUser);

// (Delete) users
// - All
router.delete('/', adminPrivileges, UsersController.deleteAll);
// - Filtered by Id
router.delete('/', auth, UsersController.deleteById);


module.exports = router;

