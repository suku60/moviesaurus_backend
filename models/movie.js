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
    title: DataTypes.STRING,
    year: DataTypes.DATE,
    adult: DataTypes.BOOLEAN,
    popularity: DataTypes.FLOAT,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};