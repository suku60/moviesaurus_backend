const { User } = require('../models/index');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt')

const UsersController = {};

// Controller functions

UsersController

// (Read) Find users
UsersController.showAllUsers = (req, res) => {

    User.findAll()
    .then(data => {

        res.send(data)
    });
};
// - Filtered by id / email
UsersController.showAllUsersById = (req, res) => {

    User.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
};
UsersController.showAllUsersByEmail = (req, res) => {};


// (Create) user / Register
UsersController.createUser = (req, res) => {};


// (Update) Modify user data
UsersController.updateUser = (req, res) => {};
UsersController.levelUpUser = (req, res) => {};

// (Delete) users
// - All
UsersController.deleteAll = (req, res) => {};
// - Filtered by Id
UsersController.deleteById = (req, res) => {};

