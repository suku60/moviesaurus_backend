const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const adminPrivileges = require("../middlewares/adminPrivileges");

const MoviesController = require('../controllers/MoviesController');

// CRUD Restfull endpoints. 

// (Read) Show all movies

router.get('/show', MoviesController.showAllMovies);

// - Show newest movies

router.get('/newest', MoviesController.newestMovies);

// - Show filtered by adult rating

router.get('/adult', MoviesController.adultMovies);

// - Find a movie according to a title

router.get('/title', MoviesController.findTitleMovie);

// (Create) Store a movie

router.post('/new', MoviesController.createMovie);

// (Update) Modify movie data

router.put('/:id', auth, MoviesController.updateMovie);


// (Delete) movies stored

// - All

router.delete('/delete/all', auth, adminPrivileges, MoviesController.deleteAllMovies);

// - Filtered by Id

router.delete('/:id', auth, adminPrivileges, MoviesController.deleteMovie);


module.exports = router;
