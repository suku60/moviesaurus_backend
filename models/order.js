'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movie, {
        foreignKey: 'movieId'
      });
      this.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
    
  }
  Order.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    movie_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};