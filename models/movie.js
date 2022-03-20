'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Order, {
        foreignKey: 'movieId'
      });
    }
  }
  Movie.init({
    title: DataTypes.STRING, //original title from imdb
    year: DataTypes.DATE, // release_date + 00:00:00
    adult: DataTypes.BOOLEAN, // adult
    popularity: DataTypes.FLOAT, // opularity
    image: DataTypes.STRING, // photo_url + poster_path
    description: DataTypes.STRING // overview
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};