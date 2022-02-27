const { Movie } = require('../models/index');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require('bcrypt');

const MoviesController = {};

// (Read) Show all movies

MoviesController.showAllMovies = (req, res) => {};

// - Show newest movies

MoviesController.newestMovies = (req, res) => {};

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
