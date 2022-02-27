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

MoviesController.adultMovies = (req,res) => {

    Movie.findAll({
        where : {
            [Op.not] : [
                {
                    adult : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(adultMovies => {
        if(adultMovies != 0){
            res.send(adultMovies);
        }else {
            res.send("There are no adult movies");
        }
    }).catch(error =>{
        res.send(error)
    })

};

// - Find a movie according to a title

MoviesController.findTitleMovie = async (req, res) => {

    let search = req.query.title;

    try {

        let result = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${search}&page=1&include_adult=false");

        res.send(result.data);
        

    } catch (error) {
        console.log(error);
    }

};

// (Create) Store a movie

MoviesController.createMovie = (req, res) => {
    
    let title = req.body.title;
    let year = req.body.year;
    let popularity = req.body.popularity;
    let image = req.body.image;
    let description = req.body.description;

    Movie.findAll({
        where : {

            [Op.or] : [
                {
                    title : {
                        [Op.like] : title
                    }
                },
            ]
        }

    }).then(repeatedData => {

        if(repeatedData == 0){

                Movie.create({
                title: title,
                year: year,
                popularity: popularity,
                image: image,
                description: description
            }).then(user => {
                res.send(`${movie.title} added to our database`);
            })
            .catch((error) => {
                res.send(error);
            });

        }else {
            res.send("This movie already exists in our database");
        }
    }).catch(error => {
        res.send(error)
    });



};

// (Update) Modify movie data

MoviesController.updateMovie = async (req, res) => {

    let data = req.body;

    let id = req.params.id;

    try {

        Movie.update(data, {
            where: {id : id}
        })
        .then(updated => {
            res.send(updated);
        });

    } catch (error) {
        res.send(error);
    }

};

// (Delete) movies stored

// - All

MoviesController.deleteAllMovies = (req, res) => {};

// - Filtered by Id

MoviesController.deleteMovie = (req, res) => {};


module.exports = MoviesController;