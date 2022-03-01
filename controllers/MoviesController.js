const { Movie } = require('../models/index');
const { default: axios } = require("axios");
const { Op } = require('sequelize');
const movie = require('../models/movie');

const MoviesController = {};

// (Read) Show all movies

MoviesController.showAllMovies = (req, res) => {
    
    User.findAll()
    .then(data => {

        res.send(data)
    });
};

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

MoviesController.createMovie = async (req, res) => {
    try {
        let title = req.body.title;
        let year = req.body.year;
        let adult = req.body.adult;
        let popularity = req.body.popularity;
        let image = req.body.image;
        let description = req.body.description;

        Movie.create({
            title: title,
            year: year,
            adult: adult,
            popularity: popularity,
            image: image,
            description: description
        }).then(movie => {
            res.send(`${movie.title} has been added to our database`)
        });
        console.log(title);
    } catch (error) {
        console.log (error);
        res.send(error);
    };

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

MoviesController.deleteAllMovies = async (req, res) => {

    try {

        Movie.destroy({
            where : {},
            truncate : false
        })
        .then(deletedMovie => {
            res.send(`${deletedMovie} have been deleted`);
        })

    } catch (error) {
        res.send(error);
    }

};

// - Filtered by Id

MoviesController.deleteMovie = (req, res) => {

    let id = req.params.pk;

    try {
        Movie.findOne({
            where: { id: id },
        }).then(movie => {
            if (movie) {
                movie.destroy({
                    truncate: false
                });
                res.status(200).json({ msg: `Movie with id ${id} was deleted.` });
            } else {
                res.status(404).json({ msg: `Movie with id ${id} does not exists, you can't delete a phantom.` })
            }
        });
    } catch (error) {
        res.send(error);
    }
}


module.exports = MoviesController;