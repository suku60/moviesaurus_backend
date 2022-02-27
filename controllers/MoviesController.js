const { Movie } = require('../models/index');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require('bcrypt');

const MoviesController = {};

// (Read) Show all movies

MoviesController.showAllMovies = (req, res) => {};

// - Show newest movies

MoviesController.newestMovies = async (req, res) => {

    try {

        let result = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=es-ES&page=1");

        res.send(result.data);

    } catch (error) {
        
        console.log(error);
    }
}
// - Show filtered by adult rating

MoviesController.adultMovies = (req, res) => {};

// (Create) Store a movie

MoviesController.createMovie = (req, res) => {};

// (Update) Modify movie data

MoviesController.updateMovie = (req, res) => {};

// (Delete) movies stored

// - All

MoviesController.deleteAllMovies = (req, res) => {};

// - Filtered by Id

MoviesController.deleteMovie = (req, res) => {};
