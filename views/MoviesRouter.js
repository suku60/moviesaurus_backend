const express = require('express');
const router = express.Router();

const MoviesController = require('../controllers/MoviesController');

// CRUD Restfull endpoints. 

// (Read) Show all movies
router.get('/', MoviesController.showAllMovies);
// - Show newest movies
router.get('/newest', MoviesController.newestMovies);
// - Show filtered by adult rating
router.get('/adult', MoviesController.adultMovies);

// (Create) Store a movie
router.post('/', MoviesController.createMovie);


// (Update) Modify movie data
router.put('/:id', MoviesController.updateMovie);


// (Delete) movies stored
// - All
router.delete('/', MoviesController.deleteAllMovies);
// - Filtered by Id
router.delete('/:id', MoviesController.deleteMovie);


module.exports = router;
